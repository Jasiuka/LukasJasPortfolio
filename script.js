"use strict";

// sections
const heroSection = document.querySelector(".hero-section");
const aboutSection = document.querySelector(".about-section");
const workSection = document.querySelector(".work-section");
const contactSection = document.querySelector(".contact-section");

// Navigations
const navOutside = document.querySelectorAll(".nav-outside");
const navInner = document.querySelector(".nav-inner");
const navAbout = document.querySelector(".nav--about");
const navSkills = document.querySelector(".nav--skills");
const navWork = document.querySelector(".nav--work");
const navContact = document.querySelector(".nav--contact");

const mobileBtn = document.querySelector(".mobile-btn");
const header = document.querySelector(".mobile-header");

const welcomeText = document.querySelector(".about-welcome");
const skillsSection = document.querySelector(".skills-section");
const project1 = document.querySelector(".project-box--1");
const project2 = document.querySelector(".project-box--2");
const project3 = document.querySelector(".project-box--3");

// Inputs
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");

// functions

// Nav slides

const aboutNavSlide = function (entries) {
  const entry = entries[0];

  if (!entry.isIntersecting) navAbout.classList.remove("hide");
  else navAbout.classList.add("hide");
};

// ----------------------------------------------

const skillsNavSlide = function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    navSkills.classList.remove("hide");
    navAbout.classList.add("hide");
  } else {
    navSkills.classList.add("hide");
    navAbout.classList.remove("hide");
  }
};

// --------------------------------------------

const workNavSlide = function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    navWork.classList.remove("hide");
    navSkills.classList.add("hide");
  } else {
    navWork.classList.add("hide");
    navSkills.classList.remove("hide");
  }
};

// -------------------------------------------------

const contactNavSlide = function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    navContact.classList.remove("hide");
    navWork.classList.add("hide");
  } else {
    navContact.classList.add("hide");
    navWork.classList.remove("hide");
  }
};

const welcomeSlide = function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) welcomeText.classList.remove("slide-in");
  else welcomeText.classList.add("slide-in");
};

// Project slide functions

const projectSlide1 = function (entries) {
  const e = entries[0];
  if (!e.isIntersecting) project1.classList.remove("slide-to-right");
  else project1.classList.add("slide-to-right");
  if (window.screen.width > 1536) {
    project1.classList.remove("slide-to-right");
    project1.style.display = "none";
    project1.style.display = "flex";
  }
};

// ------------------------------------------------

const projectSlide2 = function (entries) {
  const e = entries[0];
  if (!e.isIntersecting) project2.classList.remove("slide-to-left");
  else project2.classList.add("slide-to-left");
  if (window.screen.width > 1536) {
    project2.classList.remove("slide-to-left");
    project2.style.display = "none";
    project2.style.display = "flex";
  }
};

// -------------------------------------------------

const projectSlide3 = function (entries) {
  const e = entries[0];
  if (!e.isIntersecting) project3.classList.remove("slide-to-right");
  else project3.classList.add("slide-to-right");
  if (window.screen.width > 1536) {
    project3.classList.remove("slide-to-right");
    project3.style.display = "none";
    project3.style.display = "flex";
  }
};

/// Nav slides

const aboutObs = new IntersectionObserver(aboutNavSlide, {
  root: null,
  threshold: 0.2,
});
aboutObs.observe(heroSection);

// ---------------------------------------

const skillsObs = new IntersectionObserver(skillsNavSlide, {
  root: null,
  threshold: 0.4,
});

skillsObs.observe(aboutSection);

// ---------------------------------------------

const workObs = new IntersectionObserver(workNavSlide, {
  root: null,
  threshold: 0.4,
});

workObs.observe(skillsSection);

// ----------------------------------------------

const contactObs = new IntersectionObserver(contactNavSlide, {
  root: null,
  threshold: 0.4,
});

contactObs.observe(workSection);

// ------------------------------------------------

const obsWelcome = new IntersectionObserver(welcomeSlide, {
  root: null,
  threshold: 0.7,
});
obsWelcome.observe(heroSection);

// Project slide observers

const obsProject1 = new IntersectionObserver(projectSlide1, {
  root: null,
  threshold: 0.7,
});
obsProject1.observe(skillsSection);

// -----------------------------------------------------

const obsProject2 = new IntersectionObserver(projectSlide2, {
  root: null,
  threshold: 0.5,
});
obsProject2.observe(skillsSection);

// ----------------------------------------------------------

const obsProject3 = new IntersectionObserver(projectSlide3, {
  root: null,
  threshold: 0.3,
});
obsProject3.observe(skillsSection);

/// Smooth scroll

navInner.addEventListener("click", function (e) {
  e.preventDefault();
  const link = e.target;
  if (link.classList.contains("nav-link")) {
    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behaviour: "smooth" });
  } else return;
});

navOutside.forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const link = e.target;
    if (link.classList.contains("out-hero")) {
      const id = link.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behaviour: "smooth" });
    } else return;
  })
);

/// Mobile navigation

mobileBtn.addEventListener("click", function () {
  header.classList.toggle("open-menu");
});

header.addEventListener("click", function (e) {
  e.preventDefault();
  const link = e.target;
  if (link.classList.contains("menu-link")) {
    const id = link.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behaviour: "smooth" });

    header.classList.remove("open-menu");
  } else return;
});

console.log(window.screen.width);
console.log(window.screen.height);

// Invalid input messages

// nameInput.addEventListener("invalid", function () {
//   if (nameInput === "") nameInput.setCustomValidity("Hello world");
// });
