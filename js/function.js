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

  var s = skrollr.init({
    forceHeight: false
  });

  skrollr.menu.init(s, {
      animate: true,
      easing: 'sqrt',
      scale: 2,
      duration: function(currentTop, targetTop) {
          return 500;
      },
      handleLink: function(link) {
          return 400;
      },
      complexLinks: false
  });


  function closeNotification() {
    $(".notification").delay(2000).slideUp("slow");
  }

  $(".top-container").css("top", $(window).height());

  $(window).resize(function() {
    $(".top-container").css("top", $(window).height());
  });


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
	
	
  window.onload=function(){s.refresh()};

  // document.addEventListener('orientationchange', function() {

  // });

});