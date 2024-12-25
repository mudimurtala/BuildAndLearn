

export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img
                    className="main-image"
                    src={props.item.img.src}
                    alt={props.item.img.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker" 
                    src="images/marker.png" 
                    alt="map marker icon" 
                />
                <span className="country">{props.item.country}</span>
                <a href={props.item.googleMapsLink}>view on Google Maps</a>
                <h2 className="entry-title">{props.item.title}</h2>
                <p className="trip-dates">{props.item.dates}</p>
                <p className="entry-text">{props.item.text}</p>
            </div>
        </article>
    )
}