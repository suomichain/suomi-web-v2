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


/* Open the sidenav */
function openNav() {
    document.getElementById("sidenav").style.height = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("sidenav").style.height = "0";
}