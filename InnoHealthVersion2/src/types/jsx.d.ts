// Minimal JSX declarations to satisfy TypeScript when React types are not picked up by the editor.
// This file is intentionally small and only used as a fallback. If you have @types/react installed
// and the editor picks it up, you can remove this file.

declare namespace JSX {
  interface IntrinsicElements {
    // Allow any HTML/SVG tag with any props. This keeps the type-checker happy for JSX usage.
    [elemName: string]: any;
  }
}
