import React from "react"

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the button flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    const isGoingOut = true
    function handleClick() {
        isGoingOut ? "Yes" : "No"
    }
    
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button onClick={handleClick} className="value">{isGoingOut}</button>
        </main>
    )
}