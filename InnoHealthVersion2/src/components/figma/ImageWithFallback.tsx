import React, { useEffect, useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const [objectSrc, setObjectSrc] = useState<string | undefined>(typeof props.src === 'string' ? props.src : undefined)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  useEffect(() => {
    let active = true
    let objectUrl: string | undefined

    // Reset state whenever src changes
    setDidError(false)
    setObjectSrc(typeof src === 'string' ? src : undefined)

    if (typeof src === 'string' && src.includes('drive.google.com')) {
      // Try to normalize common Drive page URLs to a direct download endpoint
      // Patterns handled:
      // - https://drive.google.com/file/d/<id>/view?usp=...
      // - https://drive.google.com/uc?export=view&id=<id>
      const fileIdMatch = src.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
      const idParamMatch = src.match(/[?&]id=([a-zA-Z0-9_-]+)/)
      const id = fileIdMatch ? fileIdMatch[1] : idParamMatch ? idParamMatch[1] : undefined

      if (id) {
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${id}`

        // Attempt to fetch the file as a blob and convert to object URL.
        // Note: this will only work if the Drive file is shared publicly and CORS allows it.
        fetch(downloadUrl)
          .then((res) => {
            if (!res.ok) throw new Error('Network response was not ok')
            return res.blob()
          })
          .then((blob) => {
            if (!active) return
            objectUrl = URL.createObjectURL(blob)
            setObjectSrc(objectUrl)
          })
          .catch(() => {
            // Leave objectSrc as the original normalized uc link; onError will trigger fallback
            setObjectSrc(`https://drive.google.com/uc?export=view&id=${id}`)
          })
      }
    }

    return () => {
      active = false
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [src])

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    // Use objectSrc which may be the original src, a normalized Drive view URL, or an object URL from fetched blob
    // onError will fall back to the error SVG
    <img src={objectSrc} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
