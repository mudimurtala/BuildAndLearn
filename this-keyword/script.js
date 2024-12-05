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
  let sum = 0; // Step 1: Start with a sum of 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) { // Step 2: Check if the number is even
      const tripled = array[i] * 3; // Step 3: Triple the number
      sum += tripled; // Step 4: Add it to the sum
    }
  }

  return sum; // Step 5: Return the final sum
}

console.log(sumOfTripledEvens([1, 2, 3, 4])); // Output: 18
