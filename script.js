// LOADER

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {

    loader.style.opacity = "0";

    setTimeout(() => {

      loader.style.display = "none";

    }, 1000);

  }, 1000); // tempo extra do loader

});

// NAVBAR SCROLL

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.classList.add("scrolled");

  }else{

    navbar.classList.remove("scrolled");

  }

});

// MENU MOBILE

const mobileButton =
document.querySelector(".mobile-button");

const mobileMenu =
document.querySelector(".mobile-menu");

mobileButton.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

});

// REVEAL

const reveals =
document.querySelectorAll(
  ".hero, .menu, .gallery, .reviews, .cta"
);

window.addEventListener("scroll", revealSections);

function revealSections(){

  reveals.forEach((section) => {

    const windowHeight =
    window.innerHeight;

    const revealTop =
    section.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      section.classList.add("reveal");
      section.classList.add("active");

    }

  });

}

revealSections();