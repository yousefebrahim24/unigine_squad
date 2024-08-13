'use strict';

/**
 * Add event on multiple elements
 */
const addEventOnElements = (elements, eventType, callback) => {
  elements.forEach(element => element.addEventListener(eventType, callback));
};

/**
 * MOBILE NAVBAR
 * Navbar will show after clicking menu button
 */
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

navToggler.addEventListener("click", toggleNav);

const navClose = () => {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElements(navLinks, "click", navClose);

/**
 * HEADER and BACK TOP BTN
 * Header and back top button will be active after scrolling down 100px of screen
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeEl = () => {
  const isActive = window.scrollY > 100;
  header.classList.toggle("active", isActive);
  backTopBtn.classList.toggle("active", isActive);
};

window.addEventListener("scroll", activeEl);

/**
 * Button hover ripple effect
 */
const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple = event => {
  event.currentTarget.style.setProperty("--top", `${event.offsetY}px`);
  event.currentTarget.style.setProperty("--left", `${event.offsetX}px`);
};

addEventOnElements(buttons, "mousemove", buttonHoverRipple);

/**
 * Scroll reveal
 */
const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = () => {
  revealElements.forEach(element => {
    const isElementInsideWindow = element.getBoundingClientRect().top < window.innerHeight / 1.1;
    if (isElementInsideWindow) {
      element.classList.add("revealed");
    }
  });
};

window.addEventListener("scroll", revealElementOnScroll);
window.addEventListener("load", revealElementOnScroll);

/**
 * Custom cursor
 */
const cursor = document.querySelector("[data-cursor]");
const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

const cursorMove = event => {
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;
};

window.addEventListener("mousemove", cursorMove);

addEventOnElements(hoverElements, "mouseover", () => cursor.classList.add("hovered"));
addEventOnElements(hoverElements, "mouseout", () => cursor.classList.remove("hovered"));
