const headerHeroTitleChange = document.querySelector("#hero-content");
const delay = 2000;
let count = 0;

setInterval(() => {
  const wordsArr = ["MADE", "BORN", "FORGED"];
  const tm = setTimeout(function () {
    headerHeroTitleChange.textContent = wordsArr[count++];
    if (count === wordsArr.length) {
      clearInterval(tm);
      count = 0;
    }
  }, delay);
}, delay);

// Swiper options
const swiper = new Swiper(".swiper", {
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
