export default function Joke(props) {
    return (
        <>
            <p className="setup">Setup: </p><span>{props.setup}</span>
            <p className="setup">Punchline: </p><span>{props.punchline}</span>
            <hr />
        </>
    )
}


