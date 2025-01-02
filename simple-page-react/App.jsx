import React from "react"

export default function App() {
    const isGoingOut = true;
    let answer;

    if (isGoingOut === true) {
        answer = "Yes";
    } else {
        answer = "No";
    }
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value">{answer}</button>
        </main>
    )
}