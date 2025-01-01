import React from "react"

export default function App() {
    const [isResult, setIsResult] = React.useState(0)
    function handleClick() {
        setIsResult(prevResult => prevResult + 1);
    }

    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={() => setIsResult(isResult - 1)} className="minus" aria-label="Decrease count">-</button>
                <h2 className="count">{isResult}</h2>
                <button onClick={handleClick} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}