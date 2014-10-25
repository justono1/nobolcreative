$(document).ready(function() {

	$(".services-select").fancySelect();
	$(".budget-select").fancySelect();

  $(".slideshow").cycle({
  	fx: "fade",
  	timeout: 2000,
  	speed: 1000,
  	pager: '#pager',
  	pause: true,
  	pagerAnchorBuilder: function(idx, slide) {
        return '<a href="#"><div class="circle__small"></div></a>';
    }
	});

  $.validate({
    validateOnBlur : false,
    showHelpOnFocus : false,
    modules : 'file'
  });

  $(".top-container").css("top", $(window).height());

  $(window).resize(function() {
  	$(".top-container").css("top", $(window).height());
  });
	
	var s = skrollr.init();

});