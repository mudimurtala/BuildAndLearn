
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

const themeToggler = {
  isDarkMode: false, // Current theme state

  
  toggleTheme: function () {
    this.isDarkMode = !this.isDarkMode; // Toggle state

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

toggleButton.addEventListener('click', function () {
  themeToggler.toggleTheme();
});
