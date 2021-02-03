
(function($) {
    "use strict"; // Start of use strict
    var userData = {
      name:''
    }
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      
      userData[pair[0]] = pair[1]
      
    }
    if(userData.name.length){
      $('.name').text(decodeURIComponent(userData.name))
    }
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 72)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    $('body').scrollspy({
      target: '#mainNav',
      offset: 75
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 50) {
        $("#mainNav").addClass("navbar-scrolled");
      } else {
        $("#mainNav").removeClass("navbar-scrolled");
      }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);
  
  
  
  let options = {
      'speed': 3000,
      'pause': true,
  }
  
  
  $('[data-toggle="tooltip"]').tooltip()
  
  
  function sendMail(email, name, address, tel, callback) {
    $.ajax({
        type: "POST",
        url: "sendlead.php",
        data: "email=" + email + "&name=" + name + "&address=" + address + "&tel=" + tel,
        cache: false,
        success: function (result) {
          console.log('success');
         
          callback()
          
        }
    });
    console.log('success sendlead')
  }
  
  var formContainer = $('#form-container');
  
  bindFormClick();
  //Opening the form
  function bindFormClick(){
    
    
  }
  $('.form-opener').on('click', function() {
    
    toggleForm();
    //Ensure container doesn't togleForm when open
  });
  $('#form-container').click(function(){
    if(!$(this).hasClass('expand')){
      toggleForm();
    } 
    
  })
  //Closing the form
  $('#form-close, .form-overlay').click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    toggleForm();
    bindFormClick();
  });
  
  function toggleForm(){
    googleAutocomplete2.autocompleteField("address-pop");
    $(formContainer).toggleClass('expand');
    $(formContainer).children().toggleClass('expand');
    $('body').toggleClass('show-form-overlay');
    $('.form-submitted').removeClass('form-submitted');
  }
  $('#contact').parsley();
  //Form validation
  $('form').submit(function() {
    var form = $(this);
    form.find('.form-error').removeClass('form-error');
    var formError = false;
    
    form.find('.input').each(function() {
      if ($(this).val() == '') {
        $(this).addClass('form-error');
        $(this).select();
        formError = true;
        return false;
      }
      else if ($(this).hasClass('email') && !isValidEmail($(this).val())) {
        $(this).addClass('form-error');
        $(this).select();
        formError = true;
        return false;
      }
    });
    
    if (!formError) {
      $('body').addClass('form-submitted');
      $('#form-head').addClass('form-submitted'); 
  
      var name = encodeURI(form.find('input.name').val())
      var email = encodeURI(form.find('input.email').val())
      var address = encodeURI(form.find('input.address').val())
      var tel = encodeURI(form.find('input.number').val())
  
      var getUrl = window.location;
      var finalUrl = getUrl.protocol + "//" + getUrl.host + "/step2/?" 
      + 'name=' + name + '&'
      + 'email=' + email + '&'
      + 'address=' + address + '&'
      + 'tel=' + tel;
      
      sendMail(email, name, address, tel, function(){
        $(form).trigger("reset");
        window.location.href = finalUrl;
      })
  
      $('.thankyou-container').fadeIn()
    
      
      // setTimeout(function(){
        
      // }, 1000);
    }
    return false;
  });
  
  function isValidEmail(email) {
      var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
      return pattern.test(email);
  };
  
  })(jQuery); // End of use strict