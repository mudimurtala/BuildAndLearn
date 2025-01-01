import React from "react"

export default function App() {

/**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */

    const [result, setResult] = React.useState("Yes");
    function handleClick() {
        setResult("So Yes")
    }
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value" onClick={handleClick}>{result}</button>
        </main>
    )
}