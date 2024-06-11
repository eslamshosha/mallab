let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  if ($(window).width() >= 991) {
    sal({
      once: true,
    });
  } else {
    sal({
      disabled: true,
    });
  }

  //phone size menu onclick
  $("#menu-id").click(function (e) {
    e.preventDefault();
    $(".navgition").toggleClass("reset-left");
    $("body").toggleClass("overflow");
  });
  $(".nav-head .close-menu").click(function () {
    $(".navgition").removeClass("reset-left");
    $("body").removeClass("overflow");
  });
  if ($(window).width() <= 1199) {
    //slide down menu
    $(".lang-anchor .lang-cont").click(function (e) {
      e.preventDefault();
      $(this).siblings(".dropdown-content").slideToggle(400);
    });
    $(".close-menu").click(function (e) {
      e.preventDefault();
      $(".lang-anchor .lang-cont").siblings(".dropdown-content").slideUp(400);
    });
  }
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html").css("scroll-behavior", "unset");

    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000,
      "swing"
    );
    setTimeout(() => {
      $("html").css("scroll-behavior", "smooth");
    }, 1000);
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
  const selectExists =
    document.getElementsByClassName("select_input").length > 0;
  if (selectExists) {
    const $select2 = $(".select_input");
    $select2.select2();
  }

  ///////// ** championship-slider** /////////
  var specialsO = new Swiper(".championship-slider .swiper", {
    loop: true,
    autoplay: true,
    preloadImages: false,
    pagination: {
      el: ".championship-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".championship-slider .swiper-btn-next",
      prevEl: ".championship-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  //otp code animation
  $(".otp-form *:input[type!=hidden]:first").focus();
  let otp_fields = $(".otp-form .otp-field"),
    otp_value_field = $(".otp-form .otp-value");
  otp_fields
    .on("input", function (e) {
      $(this).val(
        $(this)
          .val()
          .replace(/[^0-9]/g, "")
      );
      let opt_value = "";
      otp_fields.each(function () {
        let field_value = $(this).val();
        if (field_value != "") opt_value += field_value;
      });
      otp_value_field.val(opt_value);
    })
    .on("keyup", function (e) {
      let key = e.keyCode || e.charCode;
      if (key == 8 || key == 46 || key == 37 || key == 40) {
        // Backspace or Delete or Left Arrow or Down Arrow
        $(this).prev().focus();
      } else if (key == 38 || key == 39 || $(this).val() != "") {
        // Right Arrow or Top Arrow or Value not empty
        $(this).next().focus();
      }
    })
    .on("paste", function (e) {
      let paste_data = e.originalEvent.clipboardData.getData("text");
      let paste_data_splitted = paste_data.split("");
      $.each(paste_data_splitted, function (index, value) {
        otp_fields.eq(index).val(value);
      });
    });
  ///////// ** offer** /////////
  var specials = new Swiper(".offer-slider .swiper", {
    loop: true,
    autoplay: true,
    autoHeight: true,
    slidesPerView: 1,
    pagination: {
      el: ".offer-slider .swiper-pagination",
      clickable: true,
    },
  });
  ///////// **category-section** /////////
  var categorySlider = new Swiper(".category-section .swiper", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".category-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".category-slider .swiper-btn-next",
      prevEl: ".category-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 8,
        spaceBetween: 30,
      },
    },
  });
  //bannerSlider
  var bannerSlider = new Swiper(".banner-section .swiper", {
    loop: true,
    autoplay: true,
    autoHeight: true,
    slidesPerView: 1,
    pagination: {
      el: ".banner-slider .swiper-pagination",
      clickable: true,
    },
  });
  var productThumbs = new Swiper(".product-thumbs", {
    slidesPerView: 4,
    direction: 'vertical',
    // loop: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        spaceBetween: 10,
        direction: 'horizontal',
      },
      767: {
        spaceBetween: 15,
        direction: 'vertical',
      },
      1199: {
        spaceBetween: 15,
      },
    },
  });
  var productImgs = new Swiper(".product-imgs", {
    spaceBetween: 1,
    // loop: true,
    thumbs: {
      swiper: productThumbs,
    },
  });
  ///////// **product-qty** /////////
  $(".qty-plus").on("click", function () {
    var $parentElm = $(this).parents(".item-qty");
    var maxVal = parseInt($parentElm.find(".qty-input").attr("data-max"));
    var value = $parentElm.find(".qty-input").val();
    if (value < maxVal) {
      value++;
    }
    $parentElm.find(".qty-input").val(value);
  });
  $(".qty-minus").on("click", function () {
    var $parentElm = $(this).parents(".item-qty");
    var minVal = parseInt($parentElm.find(".qty-input").attr("data-min"));
    var value = $parentElm.find(".qty-input").val();
    if (value > minVal) {
      value--;
    }
    $parentElm.find(".qty-input").val(value);
  });
  if (window.innerWidth < 992) {
    // Collaped all panel in small device
    $(".panel-heading").click(function (e) {
      e.stopPropagation();
    });
    $(".filters-mobile-btn").click(function (e) {
      $(".filter-cont").toggleClass("active");
    });
  }
});
//showPass
function showPass(showPass) {
  sibling = showPass.parentElement.nextElementSibling;
  // sibling.focus();
  if (showPass.checked) {
    sibling.setAttribute("type", "text");
    $(".password-show i").addClass("active");
  } else {
    sibling.setAttribute("type", "password");
    $(".password-show i").removeClass("active");
  }
}
