const body = document.body;

const btnTheme = document.querySelector(".fa-moon");
const btnHamburger = document.querySelector(".fa-bars");

const addThemeClass = (bodyClass, btnClass) => {
  if (bodyClass && btnClass) {
    body.classList.add(bodyClass);
    btnTheme.classList.add(btnClass);
  }
};

const getBodyTheme = localStorage.getItem("portfolio-theme") || "dark"; // Default to "dark" if no theme is saved
const getBtnTheme = localStorage.getItem("portfolio-btn-theme");

addThemeClass(getBodyTheme, getBtnTheme);

const isDark = () => body.classList.contains("dark");

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem("portfolio-theme"));
  btnTheme.classList.remove(localStorage.getItem("portfolio-btn-theme"));

  addThemeClass(bodyClass, btnClass);

  localStorage.setItem("portfolio-theme", bodyClass);
  localStorage.setItem("portfolio-btn-theme", btnClass);

  updateGradientColors(bodyClass);
};

const toggleTheme = () =>
  isDark() ? setTheme("light", "fa-moon") : setTheme("dark", "fa-sun");

btnTheme.addEventListener("click", toggleTheme);

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

btnHamburger.addEventListener("click", displayList);

const updateGradientColors = (bodyClass) => {
  if (bodyClass === "dark") {
    document.documentElement.style.setProperty("--color1", "#0068ac");
    document.documentElement.style.setProperty("--color2", "#34495e");
    document.documentElement.style.setProperty("--color3", "#2c3e50");
    document.documentElement.style.setProperty("--color4", "#1c2833");
    document.documentElement.style.setProperty("--color5", "#34495e");
  } else {
    document.documentElement.style.setProperty("--color1", "#3498db");
    document.documentElement.style.setProperty("--color2", "#9b59b6");
    document.documentElement.style.setProperty("--color3", "#f1c40f");
    document.documentElement.style.setProperty("--color4", "#e67e22");
    document.documentElement.style.setProperty("--color5", "#2ecc71");
  }
};

// Update gradient colors based on the initial theme
updateGradientColors(getBodyTheme);
