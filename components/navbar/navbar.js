class Navbar extends HTMLElement {
    constructor() {
        super()
    }

connectedCallback() {
    this.innerHTML = `
    <nav>
            <a href="../home/home.html">
                <div class="homebutton" role="button">
                      Home
                </div>
            </a>
            <a href="../skills/skills.html">
                <div class="skillsbutton" role="button">
                    Skills
                </div>
            </a>
            <a href="../projects/projects.html">
                <div class="projectsbutton" role="button">   
                    Projects                      
                </div>
            </a>
            <a href="../contact/contact.html">
                <div class="contactbutton" role="button">
                    Contact
                </div>
            </a>
    </nav>
    `;
}
}

customElements.define('navbar-component', Navbar)