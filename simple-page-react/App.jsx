import React from "react"

export default function App() {
    /**
     * Challenge: move our ternary directly inside of the JSX
     * so the "Yes" and "No" are determined inside the <h1>
     * 
     * Hint: you will no longer need the `answer` variable
     */
    const isGoingOut = true
    const answer = isGoingOut ? "Yes" : "No"
    
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value">{answer}</button>
        </main>
    )
}