var swiper = new Swiper(".mySwiper", {
  lazy: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // loop: true,
  // autoplay: true,
});
var colors = ["green", "burlywood", "gray", "red"];
swiper.on('slideChange', function () {
  let realIndex = swiper.realIndex;
  let colorIndex = realIndex % colors.length;
  document.body.style.backgroundColor = colors[colorIndex];
});

