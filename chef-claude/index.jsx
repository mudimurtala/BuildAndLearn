import ReactDom from "react-dom/client";

function App() {
    function onClickFunc() {
        console.log("It is Clicked")
    }
    return (
        <main className="container">
            <img 
                src="https://picsum.photos/640/360" 
                alt="Placeholder image for Picsum" 
            />
            <button onClick={onClickFunc}>Click me</button>
        </main>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App />)