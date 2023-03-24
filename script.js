// DOM elements
const body = document.body;
const btnTheme = document.querySelector(".fa-moon");
const btnHamburger = document.querySelector(".fa-bars");

// Add theme class
const addThemeClass = (bodyClass, btnClass) => {
  if (bodyClass && btnClass) {
    body.classList.add(bodyClass);
    btnTheme.classList.add(btnClass);
  }
};

// Get stored theme or set default theme
const getBodyTheme = localStorage.getItem("portfolio-theme") || "dark";
const getBtnTheme = localStorage.getItem("portfolio-btn-theme");

// Add initial theme classes
addThemeClass(getBodyTheme, getBtnTheme);

// Check if the current theme is dark
const isDark = () => body.classList.contains("dark");

// Set theme classes
const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem("portfolio-theme"));
  btnTheme.classList.remove(localStorage.getItem("portfolio-btn-theme"));

  addThemeClass(bodyClass, btnClass);

  localStorage.setItem("portfolio-theme", bodyClass);
  localStorage.setItem("portfolio-btn-theme", btnClass);
};

// Toggle theme between dark and light
const toggleTheme = () =>
  isDark() ? setTheme("light", "fa-moon") : setTheme("dark", "fa-sun");

// Event listener for theme toggle button
btnTheme.addEventListener("click", toggleTheme);

// Display or hide navigation list
const displayList = () => {
  const navUl = document.querySelector(".nav__list");

  if (btnHamburger.classList.contains("fa-bars")) {
    btnHamburger.classList.remove("fa-bars");
    btnHamburger.classList.add("fa-times");
    navUl.classList.add("display-nav-list");
  } else {
    btnHamburger.classList.remove("fa-times");
    btnHamburger.classList.add("fa-bars");
    navUl.classList.remove("display-nav-list");
  }

  navUl.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      displayList();
    }
  });
};

// Event listener for hamburger menu button
btnHamburger.addEventListener("click", displayList);
