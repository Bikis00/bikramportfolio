$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items:1,
	    margin:25,
	    nav:false,
	    dots:true,
        dotsData:true,
	    center: true,
	    autoplay:true,
	    autoplayTimeout:5000
	});

	$("header li").click(function(){
		$("header li").removeClass("active");
		$(this).addClass("active");
	});

	var countDownDate = new Date("Dec 15, 2023 21:50:00").getTime();
	var x = setInterval(function() {
	  var now = new Date().getTime();
	  var distance = countDownDate - now;
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	  $(".timer").html("<li>"+ days + "<br><small>days</small></li><li>" + hours + "<br><small>hours</small></li><li>"+ minutes + "<br><small>minutes</small></li><li>" + seconds + "<br><small>seconds</small></li>");
	}, 1000);

	AOS.init({
		offset: 250,
		duration: 500
	});

	if ($( window ).width() <= 767) {
		AOS.init({
			offset: 150,
			duration: 500
		});	
	}

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100){  
			$('header').addClass("sticky");
		  }
		  else{
			$('header').removeClass("sticky");
		  }
	});
});