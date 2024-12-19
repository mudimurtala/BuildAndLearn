/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 * 
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 * 
 * E.g.: "It’s hard to explain puns to kleptomaniacs because 
 * they always take things literally."
 * 
 * If you don't pass in a "question" prop, how might you make it only 
 * show the punchline?
 */




// import Joke from "./Joke"
// import jokesData from "./jokesData"

// export default function App() {
//     const jokeElements = jokesData.map((joke) => {
//         return <Joke 
//                     setup={joke.setup}
//                     punchline={joke.punchline}
//                 />
//     })
//     return (
//         <main>
//             {jokeElements}
//         </main>
//     )
// }



import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App() {
    const jokeElements = jokesData.map((joke) => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <main>
            {jokeElements}
        </main>
    )
}