import React from "react"

export default function App() {
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value" onClick={handleClick}>{isImportant}</button>
        </main>
    )
}