$(document).ready(function() {

	$(".services-select").fancySelect();
	$(".budget-select").fancySelect();

  $(".slideshow").cycle({
  	fx: "fade",
  	timeout: 10000,
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
  });

  var s = skrollr.init();

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
      dataType: "json",
      success: function(data) {
        if(data.status == "error") {
          $(".notification").css("background-color", "#e12e34").slideDown("slow");
        } else {
          $(".notification").css("background-color", "#00bf61").slideDown("slow");
        }
        $(".notification p").html(data.response);
        closeNotification();
      },
      error: function(data) {
        $(".notification").css("background-color", "#e12e34").slideDown("slow");
        $(".notification p").html(data.response);
        closeNotification();
      }
    });
    return false;
  });
	
	
  window.onload=function(){s.refresh()};

  // document.addEventListener('orientationchange', function() {

  // });

});