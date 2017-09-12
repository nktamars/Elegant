/////////////////////HAMBURGER/////////////////
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.body.style.backgroundColor = "white";
}



///////////////////////LOADMORE////////////////////

$(document).ready(function () {
    $('.gallery li:lt(3)').show();
    $('.less').hide();
    var items =  6;
    var shown =  3;
    $('.more').click(function () {
        $('.less').show();
        shown = $('.gallery li:visible').size()+3;
        if(shown< items) {$('.gallery li:lt('+shown+')').show(300);}
        else {$('.gallery li:lt('+items+')').show(300);
             $('.more').hide();
             }
    });
    $('.less').click(function () {
        $('.gallery li').not(':lt(3)').hide(300);
        $('.more').show();
        $('.less').hide();
    });
});

/////////////////////////LINK///////////////////////////


var acc = document.getElementsByClassName("aboutus__link");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}






//////////////////////SLIDER///////////////////

$('.ourwork__sl').slick({
  dots: true,
  infinite: true,
  speed: 300,
  adaptiveHeight: true,
   slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});
	




///////////////////

