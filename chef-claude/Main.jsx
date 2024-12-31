export default function Main() {

    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const ingredientsListItems = ingredients.map(ingredient =>
        <li key={ingredient}>
            {ingredient}
        </li>
    )

    function onSubmit() {
        console.log("Form submitted!")
    }
    
    /**
     * Challenge:
     * Add an `onSubmit` event listener on the form. Have the function
     * simply console.log("Form submitted!") for now
     */

    return (
        <main>
            <form action="" className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button onSubmit={onSubmit}>
                    Add ingredient
                </button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}