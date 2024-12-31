import ReactDom from "react-dom/client";

function App() {
    function onClickFunc() {
        console.log("It is Clicked")
    }

    function handleClick() {
        alert("You Clicked Me!")
    }

    return (
        <main className="container">
            <img 
                src="https://picsum.photos/640/360" 
                alt="Placeholder image for Picsum" 
            />
            <button onClick={onClickFunc}>Click me</button>
            <button onClick={handleClick}>
                I don't do anything
            </button>
        </main>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App />)