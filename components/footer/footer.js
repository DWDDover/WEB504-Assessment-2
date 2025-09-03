class Footer extends HTMLElement {
    constructor() {
        super()
    }

connectedCallback() {
    this.innerHTML = `
        <footer>
        <p>
            Written by Declan Dover &copy; 2025 All Rights Reserved
        </p>
    </footer>
    `;
}
}

customElements.define('footer-component', Footer)