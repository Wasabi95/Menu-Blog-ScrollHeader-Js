const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went Wrong, make sure that ${selector} exists or is typed correctly.`
  );
};

const scrollHeader = () => {
  const headerElement = selectElement("#header");
  if (this.scrollY >= 5) {
    headerElement.classList.add(`activated`);
  } else {
    headerElement.classList.remove(`activated`);
  }
};
window.addEventListener(`scroll`, scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement("#menu-toggle-icon");

const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classList.toggle("activated");
  menuToggleIcon.classList.toggle("activated");
};

menuToggleIcon.addEventListener("click", toggleMenu);
