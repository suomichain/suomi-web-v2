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
  centerPadding: '10%',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false,
  		centerPadding: '10%',
        centerMode: true,
        slidesToShow: 3
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