import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {
    const dataElements = data.map((item) => {
        return (
            <Entry 
                key={item.id}
                img={{
                    src: item.img.src,
                    alt: item.img.alt
                }}
                // Or this bolow
                // img={item.img}
                title={item.title}
                country={item.country}
                googleMapsLink={item.googleMapsLink}
                dates={item.dates}
                text={item.text}
            />
        )
    })
    return (
        <>
            <Header />
            <main className="container">
                {dataElements}
            </main>
        </>
    )
}