export default function Joke(prop) {
    return (
        <>
            <p className="setup">{prop.Setup}</p>
            <p className="punchline">{prop.Punchline}</p>
            <hr />
        </>
    )
}