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

// TEST GALLERY
$(function () {
  $(".img-w").each(function () {
    $(this).wrap("<div class='img-c'></div>");
    let imgSrc = $(this).find("img").attr("src");
    $(this).css("background-image", "url(" + imgSrc + ")");
  });

  $(".img-c").click(function () {
    let w = $(this).outerWidth();
    let h = $(this).outerHeight();
    let x = $(this).offset().left;
    let y = $(this).offset().top;

    $(".active").not($(this)).remove();
    let copy = $(this).clone();
    copy.insertAfter($(this)).height(h).width(w).delay(500).addClass("active");
    $(".active").css("top", y - 8);
    $(".active").css("left", x - 8);

    setTimeout(function () {
      copy.addClass("positioned");
    }, 0);
  });
});
//---------------

$(document).on("click", ".img-c.active", function () {
  let copy = $(this);
  copy.removeClass("positioned active").addClass("postactive");
  setTimeout(function () {
    copy.remove();
  }, 500);
});

// events

// reload when window is resized
window.onresize = function (event) {
  document.location.reload(true);
};
