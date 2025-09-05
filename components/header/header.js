class Header extends HTMLElement {
    constructor() {
        super()
    }

connectedCallback() {
    this.innerHTML = `
    <header>
        <a href="../pages/index.html"><img src="../assets/images/logo-transparent.svg" alt="Logo" class="logo"></a>
        <a class="navlink" href="index.html">Home</a>
        <a class="navlink" href="skills.html">Skills</a>
        <a class="navlink" href="projects.html">Projects</a>
        <a class="navlink" href="contact.html">Contact</a>
        <a href="javascript:void(0);" class="icon" onclick="expand()">
        <i class="fa fa-bars"></i>
        </a>
        <button id="login" class="login">Login</button>
        <div id=burger>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
            <button id="login" class="login>Login</button>
        </div>
    </header>
    `;
}
}

customElements.define('header-component', Header)

function expand() {
  var x = document.getElementById("burger");
  if (x.style.display != "none") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

