$("nav.nav-menu a").hover(
  function() {
    $(this).find("img.diamond").remove();
    $(this).append($("<img class='diamond ml-2 mb-1' src='assets/images/diamond-green.svg'>"));
  }, function() {
    $(this).find("img.diamond").remove();
    $(this).append($("<img class='diamond ml-2 mb-1' src='assets/images/diamond.svg'>"));
  }
);

$('.single-item').slick({
	dots: true,
	arrows: false
});

$('.center').slick({
  centerMode: true,
  arrows: false,
  centerPadding: '22.5%',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 414,
      settings: {
        arrows: false,
  		  centerPadding: '20%',
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


/* Open the sidenav */
function openNav() {
    document.getElementById("sidenav").style.height = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("sidenav").style.height = "0";
}

function submitForm(){
  if (validateEmail(document.getElementById('mce-EMAIL').value)) {
      document.getElementById('response').style.display="none";
      document.getElementById('mc-embedded-subscribe-form').submit();
  } else {
    document.getElementById('response').style.display="block";
  }
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$(document).ready(function() {
  $('.popup-link').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    preloader: false,
    fixedContentPos: false
  });
});

$("#mce-EMAIL").keyup(function(event) {
    if (event.keyCode === 13) {
        submitForm();
    }
});


$(document).ready(function () {
    //Disable full page
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });

    $("body").on("contextmenu",function(e){
        return false;
    });
});