import React from "react"

export default function App() {
    const [isResult, setIsResult] = React.useState(0)
    function add() {
        setIsResult(isResult + 1)
    }

    function subtract() {
        setIsResult(isResult -1)
    }
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={subtract} className="minus" aria-label="Decrease count">-</button>
                <h2 className="count">{isResult}</h2>
                <button onClick={add} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}