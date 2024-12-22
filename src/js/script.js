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
