$(document).ready(
    //show-search on click on mobile
function() {
   $("#search").click(function() {
       $("#searchbox").toggle();
   });	
   


});

$(document).ready(function(){

//responsive menu
//mobile menu click
$('.navbar-toggle').click(function(){
	$(this).toggleClass("active");
	$('body').toggleClass("openMenu");
});



//select
$("select").selectpicker();

//bxslider
$('.bxslider').bxSlider({
  pagerCustom: '#bx-pager'
});

//accordion
$('#accordion').on('hidden.bs.collapse', function () {
//do something...
})

$('#accordion .accordion-toggle').click(function (e){
  var chevState = $(e.target).siblings("i.indicator").toggleClass('fa-chevron-down fa-chevron-up');
  $("i.indicator").not(chevState).removeClass("fa-chevron-up").addClass("fa-chevron-down");
});

//carousel
$('.carousel').bxSlider({
  minSlides: 1,
  maxSlides: 4,
  slideMargin: 25
});

/*//mega-menu
    $(".dropdown").on('click', function(){            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    });
*/

});	

$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).fadeIn("800");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).fadeOut("800");
            $(this).toggleClass('open');       
        }
    );
});