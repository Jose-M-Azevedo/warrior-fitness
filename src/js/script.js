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

// Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
