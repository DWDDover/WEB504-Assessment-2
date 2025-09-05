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
      </header>
        <div id="mySidenav" class="sidenav">
          <a id="closeBtn" href="#" class="close">&times;</a>
          <ul>
            <li><a href="index.html"><button>Home</button></a></li>
            <li><a href="skills.html"><button>Skills</button></a></li>
            <li><a href="projects.html"><button>Projects</button></a></li>
            <li><a href="contact.html"><button>Contact</button></a></li>
            <li><a href="#"><button>Log in</button></a></li>
            <li><a href="#"><button>Sign Up</button></a></li>
          </ul>
        </div>
        <a href="#" id="burger-icon">
          <i class="fa fa-bars burger-icon"></i>
        </a>
    `;
}
}

customElements.define('header-component', Header)

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("burger-icon");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

