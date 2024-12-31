import ReactDom from "react-dom/client";

function App() {
    return (
        <main className="container">
            <img 
                src="https://picsum.photos/640/360" 
                alt="Placeholder image for Picsum" 
            />
            <button onClick={function() {console.log("Clicked")}}>Click me</button>
        </main>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App />)