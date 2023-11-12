// Toggle Class Active 
const NavbarNav = document.querySelector(".nav");

// ketika menu di klik
document.querySelector("#menu").onclick = () => {
    NavbarNav.classList.toggle("active");
  };

  // klik di luar sidebar untuk menghilangkan nav
  const navs = document.querySelector("#menu");

  document.addEventListener("click", function (e) {
    if (!navs.contains(e.target) && !NavbarNav.contains(e.target)) {
      NavbarNav.classList.remove("active");
    }
  });
  