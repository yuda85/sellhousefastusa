(function($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Show the navbar when the page is scrolled up
  var MQL = 992;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
          } else {
            $('#mainNav').removeClass('is-visible is-fixed');
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#mainNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
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
  var formContainer = $('#form-container');
  function toggleForm(){
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
      if(form.hasClass('hero-form')){
        form.find('.contact-submit').text('...Sending')
      }
  
    
      
      // setTimeout(function(){
        
      // }, 1000);
    }
    return false;
  });
})(jQuery); // End of use strict
