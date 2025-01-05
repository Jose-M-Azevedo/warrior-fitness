"use strict";

const nav = document.querySelector(".nav");

// Swiper options
const swiper1 = new Swiper(".swiper-container-2", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1080: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const swiper2 = new Swiper(".swiper-container-1", {
  loop: true,
  slidesPerView: 1,
  allowTouchMove: false,

  autoplay: {
    delay: 2000,
  },
});

// Google Maps

let map;

const initMap = async function () {
  const myMap = document.querySelector(".location-map");
  const position = { lat: 38.697776794433594, lng: -9.339737892150879 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(myMap, {
    zoom: 17,
    center: position,
    mapId: "MAP-ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Warrior Gym",
  });
};

initMap();

///////////////////////////////////////
// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("section-link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".section-link");
    const logo = link.closest(".nav").querySelector("img");
    console.log(link);
    console.log(siblings);
    console.log(logo);

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Lazy loading image
const imageContainer = document.getElementById("gallery-image");

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.setAttribute("src", lazyImage.getAttribute("data-src"));
      // lazyImage.src = lazyImage.dataset.src;
      entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
      });
      observer.unobserve(lazyImage);
    }
  });
}

function createObserver() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  // Observe each image in the container
  document.querySelectorAll(".img-box img").forEach(img => {
    observer.observe(img);
  });
}

// Create Intersection Observer when the document is ready
document.addEventListener("DOMContentLoaded", createObserver);

// Events

// Reload when window is resized
window.onresize = function (event) {
  document.location.reload(true);
};

// Passing "argument" into handler - menu fade animation
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Smooth navigation
document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("section-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
