let display = document.getElementById('display');
let darkModeButton = document.getElementById('darkModeButton');
let isDarkMode = false;

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    darkModeButton.textContent = 'Normal Mode';
  } else {
    document.body.classList.remove('dark-mode');
    darkModeButton.textContent = 'Dark Mode';
  }
}
