(function ($) {
  "use strict"; // Start of use strict
  // $("#main-form").validate();
  var userData = {
    address: "",
    email: "",
    name: "",
    tel: "",
  };
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");

    userData[pair[0]] = pair[1];
  }
  // console.log(userData)

  $("#name").val(decodeURI(userData.name));
  $("#email").val(decodeURI(userData.email));
  $("#tel").val(decodeURI(userData.tel));

  var addressArr = decodeURI(userData.address).split(",");

  addressArr[0] ? $("#address").val(addressArr[0]) : $("#address").val(decodeURI(userData.address));
  addressArr[1] ? $("#city").val(addressArr[1]) : $("#city").val("Memphis");
  addressArr[2] ? $("#state").val(addressArr[2]) : $("#state").val("TN");

  var elementPosition = $(".sticky-top").offset();

  $(window).scroll(function () {
    if ($(window).scrollTop() > elementPosition.top) {
      $(".sticky-top").addClass("active");
    } else {
      $(".sticky-top").removeClass("active");
    }
  });

  var formInstance = $("#main-form").parsley();

  $("#main-form").submit(function (e) {
    e.preventDefault();
    var _fromDataString = "";
    $("form#main-form input[type=text], form#main-form input[type=email],form#main-form select, form#main-form textarea").each(function () {
      //getting all the items in the form
      console.log($(this).val());
      var id = $(this).attr("id");
      var val = $(this).val();
      _fromDataString += "&" + id + "=" + val;
      //send email to crm etc
    });
    var fromDataString = _fromDataString.substr(1);
    console.log(fromDataString);

    $(".submit-btn").text("...Sending");
    $(".loading3").fadeIn();
    var getUrl = window.location;
    var finalUrl = getUrl.protocol + "//" + getUrl.host + "/thank-you/?name=" + $("#name").val();
    sendMail(fromDataString, function () {
      window.location.href = finalUrl;
    });
    //
    //  debugger;
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 72,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 75,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  let options = {
    speed: 3000,
    pause: true,
  };

  $('[data-toggle="tooltip"]').tooltip();

  function sendMail(fromDataString, callback) {
    $.ajax({
      type: "POST",
      url: "https://formspree.io/f/xqkgjlkz",
      data: fromDataString,
      cache: false,
      success: function (result) {
        console.log("success");
      },
      error: function () {
        callback();
      },
    });
    console.log("success sendlead");
  }
  //Form Submittions
  // $('#contact-form-modal').submit(function(e){
  //   e.preventDefault();
  //   console.log('form submit modal');

  //   sendMail($("#contact-form-modal .email").val(), $("#contact-form-modal .name").val(), $("#contact-form-modal .message").val(), $("#contact-form-modal .tel").val(), '#contact-form-modal' );
  //   $('#contact-form-modal .contact-submit').html('...Sending');

  // })
  // $('#contact-form').submit(function(e){
  //   e.preventDefault();
  //   console.log('form submit');
  //   sendMail($("#contact-form .email").val(), $("#contact-form .name").val(), $("#contact-form .message").val(), $("#contact-form .tel").val(), '#contact-form');
  //   $('#contact-form .contact-submit').html('...Sending');
  // })

  var formContainer = $("#form-container");

  bindFormClick();
  //Opening the form
  function bindFormClick() {}
  // $(formContainer).on('click', function(e) {
  //   e.preventDefault();
  //
  //   //Ensure container doesn't togleForm when open
  //   $(this).off();
  // });
  $(".form-opener").on("click", function () {
    toggleForm();
    //Ensure container doesn't togleForm when open
  });
  $("#form-container").click(function () {
    if (!$(this).hasClass("expand")) {
      toggleForm();
    }
  });
  //Closing the form
  $("#form-close, .form-overlay").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    toggleForm();
    bindFormClick();
  });

  function toggleForm() {
    $(formContainer).toggleClass("expand");
    $(formContainer).children().toggleClass("expand");
    $("body").toggleClass("show-form-overlay");
    $(".form-submitted").removeClass("form-submitted");
  }

  //Form validation
  // $('form').submit(function() {
  //   var form = $(this);
  //   sendMail(email, name, address, tel, function(){
  //     debugger;
  //     $(form).trigger("reset");
  //     window.location.href = finalUrl;
  //   })

  // });

  // function isValidEmail(email) {
  //     var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  //     return pattern.test(email);
  // };
})(jQuery); // End of use strict
