// Activates the Carousel
$('.carousel').carousel({
  interval: 6500
})
	
// Activates Tooltips for Social Links
$('.social-network li').tooltip({
  selector: "a[data-toggle=tooltip]"
})
$('.foot-contact li').tooltip({
  selector: "[data-toggle=tooltip]"
})

var current = 0,
    max = $(".slider > .slide").length;
$(".slider > .slide:gt(0)").hide();
$('.counter').text('1 of ' + max);

setInterval(function() { 
  $('.slider > .slide:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slider');
  current++;
  if (current >= max) current = 0;
  $('.progress').width((current+1) * 315 / max);
  $('.counter').text(current+1 + ' of ' + max);
  
},  3000);

function initNavbar() {

    var scrollSpeed = 1750;
    var scrollOffset = 0;
    var easing = 'swing';

    $('.navbar ul.nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: scrollSpeed,
        scrollOffset: scrollOffset,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        easing: easing
    });
	$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});

    $('.nav-external').click(function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - scrollOffset
        }, scrollSpeed, easing);
    });
}
function initPortfolio () {
    var portfolio = $('#bottle-packages');
    var items = $('.items', portfolio); 
    var filters = $('.filters button', portfolio); 

    items.imagesLoaded(function() {
        items.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows',
            transitionDuration: '0.7s'
        });
    });
    
    filters.click(function(){
        var el = $(this);
        filters.removeClass('active');
        el.addClass('active');
        var selector = el.attr('data-filter');
        items.isotope({ filter: selector });
        return false;
    });   
}