$(document).ready(function() {

	$(".services-select").fancySelect();
	$(".budget-select").fancySelect();

  $(".slideshow").cycle({
  	fx: "fade",
  	timeout: 6000,
  	pager: '#pager'
  });

  $.validate({
    validateOnBlur : false,
    showHelpOnFocus : false,
    modules : 'file'
  });
	

});