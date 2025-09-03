class tswitch extends HTMLElement {
    constructor() {
        super()
    }

connectedCallback() {
    this.innerHTML = `
        <h2 class="theme-picker-title">Pick a Theme</h2>
        <div class="theme-switcher">
                <button data-theme="green" aria-pressed="true" class="theme-btn">Green</button>
                <button data-theme="blue" aria-pressed="false" class="theme-btn">Blue</button>
                <button data-theme="pink" aria-pressed="false" class="theme-btn">Pink</button>
                <button data-theme="orange" aria-pressed="false" class="theme-btn">Orange</button>
        </div>
    `;
}
}

customElements.define('tswitch-component', tswitch)

const themeSwitcher = document.querySelector('.theme-switcher');
const buttons = themeSwitcher.querySelectorAll('button');

const handleThemeSelection = (event) => {
  const target = event.target;
  const theme = target.getAttribute('data-theme');
  const isPressed = target.getAttribute('aria-pressed');
  document.documentElement.setAttribute("data-selected-theme", theme);
  
  const previouslyPressedButton = document.querySelector('[data-theme][aria-pressed="true"]');
  previouslyPressedButton.setAttribute('aria-pressed', false);
  target.setAttribute('aria-pressed', 'true');
  
  localStorage.setItem('selected-theme', theme);
}

const savedTheme = localStorage.getItem('selected-theme');
const defaultTheme = "green";

if (savedTheme && savedTheme !== defaultTheme) {
  const previouslyPressedButton = document.querySelector('[data-theme][aria-pressed="true"]');
  previouslyPressedButton.setAttribute('aria-pressed', false);
  document.querySelector(`[data-theme="${savedTheme}"]`).setAttribute('aria-pressed', true);
  document.documentElement.setAttribute("data-selected-theme", savedTheme);
}

buttons.forEach((button) => {
   button.addEventListener('click', handleThemeSelection);
});