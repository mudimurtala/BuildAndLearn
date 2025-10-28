const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
const squares = nums.map(num => num * num)

console.log(squares)


const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
const capitalized = names.map(name => name[0].toUpperCase() + name.slice(1))
console.log(capitalized)


const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
const withParagraph = pokemon.map(item => `<p>${item}</p>`);
console.log(withParagraph);


const jsx = <h1>Donatello</h1>;
console.log(jsx);