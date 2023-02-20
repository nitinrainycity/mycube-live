// Place JS within here

(function () {
  let logo_swiper = new Swiper('.logo-swiper', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      1920: {
        slidesPerView: 5,
        spaceBetween: 0
      },
      960: {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    }
  });
  let iwt_swiper = new Swiper('.rca_iwt_detail', {
    slidesPerView: 3,
    spaceBetween: 0,
    simulateTouch: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      960: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true
      }
    }
  });
  let feat_collection_swiper = new Swiper('.rca-feat-colletion', {
    loop: true,
    slidesPerView: 2.4,
    centeredSlides: true,
    spaceBetween: 180,
    navigation: {
      nextEl: '.feat_next',
      prevEl: '.feat_prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      1920: {
        slidesPerView: 2.4,
        spaceBetween: 180
      },
      1200: {
        slidesPerView: 2.4,
        spaceBetween: 80
      },
      990: {
        slidesPerView: 1,
        spaceBetween: 60
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 60
      }
    }
  });
  let slide_in = new Swiper('.slide_in', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      1920: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      960: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

  // featured tab slider
  var Swipes = new Swiper('.rca_swiper_tab', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    on: {
      init: function () {
        var swiper = this;
        
        var slides = swiper.slides[swiper.activeIndex];

        var slide = slides.classList[1];

        var productname = document.querySelector(`.rca-featured_tabs .${slide}`).getAttribute("alt");
        var productdesc = document.querySelector(`.rca-featured_tabs .${slide}`).getAttribute("description");
        var producturl = document.querySelector(`.rca-featured_tabs .${slide}`).getAttribute("data_url");

        document.querySelector('#p_desc').textContent = productdesc;
        document.querySelector('#p_name').textContent = productname;
        document.querySelector('#p_url').setAttribute('href', producturl);
      },
    },
  });

  Swipes.on('slideChange', function () {
    var swiper = this;
        
    var slides = swiper.slides[swiper.activeIndex];

    var slide = slides.classList[1];

    var productname = document.querySelector(`.rca-featured_tabs .${slide}`).getAttribute("alt");
    var productdesc = document.querySelector(`.rca-featured_tabs .${slide}`).getAttribute("description");
    var producturl = document.querySelector(`.rca-featured_tabs .${slide}`).getAttribute("data_url");
    document.querySelector('#p_desc').textContent = productdesc;
    document.querySelector('#p_name').textContent = productname;
    document.querySelector('#p_url').setAttribute('href', producturl);
  });

  let swatchclick = document.querySelectorAll('input[name=swatch_cust]')
  swatchclick.forEach(function (elem) {
    elem.addEventListener("click", function (e) {
      let proid = e.target.getAttribute('data-productid');
      let proimg = e.target.getAttribute('data-varimg');
      let varid = e.target.getAttribute('data-varid');
      // Add Remove Checked Class
      let radiobtn = Array.from(document.querySelectorAll('.radiobtn-' + proid));
      radiobtn.forEach(node => {
        node.classList.remove('checked');
      });

      e.target.classList.add("checked");

      // Change Variant Id
      let variantid = document.querySelector('.variantid-' + proid);
      variantid.setAttribute("value", varid);

      // Change Image On Variant Change
      let variantimage = document.querySelector('.fisrt_pimage-' + proid);
      variantimage.setAttribute("src", proimg);
      variantimage.setAttribute("srcset", proimg);

      // Check Product Available Or Not
      let addbtntext = document.querySelector('.add_btn_text-' + proid);
      let addbtnattr = document.querySelector('.add_btn-' + proid);
      if (e.target.classList.contains("unavailabe")) {
        addbtntext.innerHTML = 'Sold out';
        addbtnattr.setAttribute("data-sold-out-message", true);
        addbtnattr.setAttribute("disabled", "disabled");
      }
      else {
        addbtntext.innerHTML = 'Add to cart';
        addbtnattr.setAttribute("data-sold-out-message", false);
        addbtnattr.removeAttribute("disabled");
      }
    });
  });

  $(".swatch_new input[name='swatch_cust']").click(function () {

    var proid = $(this).attr("data-productid");
    var proimg = $(this).attr("data-varimg");
    var varid = $(this).attr("data-varid");
    // Change Selected Value On Quiz Page
    var chekval = $(this).val();
    $(".chekcolor-" + proid).html(chekval);
    // Add Remove Checked Class
    $(".radiobtn-" + proid).removeClass("checked");
    $(this).addClass("checked");

    // Change Image
    $(".fisrt_pimage-" + proid).attr("src", proimg);
    $(".fisrt_pimage-" + proid).attr("srcset", proimg);
    // End Change Image

    // Change Variant id
    $(".variantid-" + proid).attr("value", varid);
    // End Change Variant id

    // Change Button Text
    if ($(this).hasClass("unavailabe")) {
      $(".add_btn_text-" + proid).html("Sold out");
      $(".add_btn-" + proid).attr("data-sold-out-message", "true");
      $(".add_btn-" + proid).attr("disabled", "disabled");
    }
    else {
      $(".add_btn_text-" + proid).html("Add to cart");
      $(".add_btn-" + proid).removeAttr("data-sold-out-message");
      $(".add_btn-" + proid).removeAttr("disabled");
    }
    // End Change Button Text
  });

  var popvideo = document.querySelector('.popvideo');
  var modalclick = document.querySelector('.product-popup-modal__button');
  if(modalclick){
    modalclick.addEventListener('click', function (event) {
      var pop_vid_data = document.querySelector('.pop_vid_data');
      var iframedata = pop_vid_data.innerHTML;
      popvideo.innerHTML = iframedata;
    });
  }

  var closeclick = document.querySelector('.product-popup-modal__toggle');
  if(closeclick){
    closeclick.addEventListener('click', function (event) {
      popvideo.innerHTML = "";
    });
  }

  var selectedColorEl = document.querySelector('.product-form__input input[name="Color"]:checked');
  if(selectedColorEl){
    var selectedColor = selectedColorEl.value;
    var checkval = document.querySelector('.ch_val');
    checkval.innerHTML = selectedColor;

    var stockhtml = document.querySelector('.instock_text');
    var stocktext = document.querySelector('.product-form__submit span');
    var stocktextval = stocktext.innerHTML;
    if (stocktextval.indexOf("OUT OF STOCK") != -1) {
      stockhtml.innerHTML = stocktextval;
    }

    let swatchproclick = document.querySelectorAll('.product-form__input input[type=radio]')
    swatchproclick.forEach(function (elem) {
      elem.addEventListener("click", function (e) {
        let radioVal = elem.value;
        checkval.innerHTML = radioVal;
        setTimeout(function () {
          var stockhtml = document.querySelector('.instock_text');
          var stocktext = document.querySelector('.product-form__submit span');
          var stocktextval = stocktext.innerHTML;
          if (stocktextval.indexOf("OUT OF STOCK") != -1) {
            stockhtml.innerHTML = stocktextval;
          }
          else {
            stockhtml.innerHTML = "In Stock";
          }
        }, 3500);
      });
    });
  }
  $(document).on("click", ".thumbnail-list__item", function () {
    var target = $(this).attr("data-target");
    console.log(target);
    $(".slider-counter__link--dots").removeClass("activedot");
    $("." + target).addClass("activedot");
  });

  $(document).on("click", ".main_gallery .slider-button", function () {
    var target = $(".main_gallery .is-active").attr("data-media-id");
    $(".slider-counter__link--dots").removeClass("activedot");
    $("." + target).addClass("activedot");
    $('.thumbnail-list__item[data-target="' + target + '"] .thumbnail').get(0).click();
  });

  const checkbodyclass = document.querySelector("body");
  if (checkbodyclass.classList.contains("customers-login")) {
    var acc_recover = document.querySelector('.acc_recover');
    var acc_login = document.querySelector('.acc_login');
    acc_recover.addEventListener('click', function (event) {

      acc_login.classList.add('remove_image');
    });
    var currentLocation = window.location.href;
    if (currentLocation.indexOf('#recover') > -1) {
      acc_login.classList.add('remove_image');
    }
  }

  // Show Hide Divs When Add && Edit Address
  if (checkbodyclass.classList.contains("customers-addresses")) {
    var add_address = document.querySelectorAll('.add_editaddress');
    add_address.forEach(function (elem) {
      elem.addEventListener("click", function (e) {
        console.log("clickaddress");
        document.querySelectorAll('.showhide_data_address').forEach(function (el) {
          el.style.display = 'none';
        });
      });
    });
  }

// js for Sticky Atc Button, Qunatity, Title, Price PDP When Scroll on Mobile
if (checkbodyclass.classList.contains("product")) {
  const stickybtn = document.querySelector(".product-form__input.product-form__quantity");
  const stickytitle_price = document.querySelector(".product__title");
  window.addEventListener('scroll', function(e) { 
    var scrolled = document.scrollingElement.scrollTop;
    var position = stickybtn.offsetTop;
    if(scrolled > position - 50){
        stickybtn.classList.add('sticky');
        stickytitle_price.classList.add('sticky');
      }
      else{
          stickybtn.classList.remove('sticky');
          stickytitle_price.classList.remove('sticky');
      }
    });
  }
  var popvideo = document.querySelector('.popvideo');
  var modalclick = document.querySelector('button.product-popup-modal__button');

  modalclick.addEventListener('click', function (event) {
    var pop_vid_data = document.querySelector('.pop_vid_data');
    var iframedata = pop_vid_data.innerHTML;
    popvideo.innerHTML = iframedata;
    console.log(iframedata);
  });
  var closeclick = document.querySelector('.product-popup-modal__toggle');
  closeclick.addEventListener('click', function (event) {
    popvideo.innerHTML = "";
  });
})();