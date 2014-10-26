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

  $(".icon-contact").on("touchstart click", function() {
    $("html, body").animate({scrollTop: $(".contact").offset().top - 78}, 800);
    return false;
  });

  function closeNotification() {
    $(".notification").delay(2000).slideUp("slow");
  }

  $("#ajaxForm").submit(function() {
    var postData = $(this).serializeArray();
    var formUrl = $(this).attr("action");

    $.ajax({
      url: formUrl,
      type: "POST",
      data: postData,
      success: function(data) {
        $(".notification").css("background-color", "#00bf61").slideDown("slow");
        $(".notification p").html(data);
        closeNotification();
      },
      error: function(data) {
        $(".notification").css("background-color", "#e12e34").slideDown("slow");
        $(".notification p").html(data);
        closeNotification();
      }
    });
    return false;
  });
	
	var s = skrollr.init();

});