
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;


const themeToggler = {
  isDarkMode: false, // Current theme state

  // Toggle Method
  toggleTheme: function () {
    this.isDarkMode = !this.isDarkMode; // Toggle state

    // Update the body's class based on the state
    if (this.isDarkMode) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      toggleButton.textContent = 'Switch to Light Mode';
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      toggleButton.textContent = 'Switch to Dark Mode';
    }
  },
};

// Add click event to the button and bind the toggle method
toggleButton.addEventListener('click', function () {
  themeToggler.toggleTheme();
});
