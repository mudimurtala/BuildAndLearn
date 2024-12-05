// const toggleButton = document.getElementById('theme-toggle');
// const body = document.body;

// const themeToggler = {
//   isDarkMode: false,
  
//   toggleTheme: function () {
//     this.isDarkMode = !this.isDarkMode; 

//     if (this.isDarkMode) {
//       body.classList.remove('light-theme');
//       body.classList.add('dark-theme');
//       toggleButton.textContent = 'Switch to Light Mode';
//     } else {
//       body.classList.remove('dark-theme');
//       body.classList.add('light-theme');
//       toggleButton.textContent = 'Switch to Dark Mode';
//     }
//   },
// };

// toggleButton.addEventListener('click', function () {
//   themeToggler.toggleTheme();
// });


// let car = {
//     brand: 'Honda',
//     getBrand: function () {
//         return this.brand;
//     }
// };

// console.log(car.getBrand()); // Honda

function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0) // Keep only even numbers
    .map((num) => num * 3)          // Triple each even number
    .reduce((sum, num) => sum + num, 0); // Add them all up
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(sumOfTripledEvens()); // Output: 18

