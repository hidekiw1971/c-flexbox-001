"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // setting start
  var swiper = new Swiper('.swiper-card', {
    autoplay: {
      delay: 1000,
    },
    loop: true
  });
  // setting end
});