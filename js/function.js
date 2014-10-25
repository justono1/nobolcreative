$(document).ready(function() {

	$(".services-select").fancySelect();
	$(".budget-select").fancySelect();

	$.validate({
    validateOnBlur : false,
    showHelpOnFocus : false,
    modules : 'file'
  });
	

});