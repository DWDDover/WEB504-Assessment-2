class Header extends HTMLElement {
    constructor() {
        super()
    }

connectedCallback() {
    this.innerHTML = `
    <header>
        <img src="../assets/images/logo-transparent.svg" alt="Logo" class="logo">
        <a class="navlink" href="">Home</a>
        <a class="navlink" href="">Skills</a>
        <a class="navlink" href="">Projects</a>
        <a class="navlink" href="">Contact</a>
        <a href="javascript:void(0);" class="icon" onclick="expand()">
        <i class="fa fa-bars"></i>
        </a>
        <button class="login">Login</button>
        <div id=burger>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
            <button class="login">Login</button>
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

