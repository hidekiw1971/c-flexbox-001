
jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // setting start
  const swiper = new Swiper('.swiper-card', {
    autoplay: {
      delay: 1000,
    },
    loop: true,
  });
  // setting end
});
