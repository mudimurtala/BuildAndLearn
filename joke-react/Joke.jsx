export default function Joke(props) {
    console.log(props)
    return (
        <>
            <p className="setup">{props.setup}</p>
            <p className="punchline">{props.punchline}</p>
            <hr />
        </>
    )
}


