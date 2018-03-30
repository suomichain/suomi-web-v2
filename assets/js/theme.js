$("nav.nav-menu a").hover(
  function() {
    $(this).find("img.diamond").remove();
    $(this).append($("<img class='diamond ml-2 mb-1' src='assets/images/diamond-green.svg'>"));
  }, function() {
    $(this).find("img.diamond").remove();
    $(this).append($("<img class='diamond ml-2 mb-1' src='assets/images/diamond.svg'>"));
  }
);

/* Open the sidenav */
function openNav() {
    document.getElementById("sidenav").style.height = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("sidenav").style.height = "0";
}