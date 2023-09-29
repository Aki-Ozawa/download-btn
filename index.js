$('.button-container').click(function(){
	if($('.button-container').hasClass('active')){
		$(this).removeClass('active');
		$('.complete').removeClass('fadein');
		$('#counter').fadeOut(100);
		$('.ball').fadeOut(100);
		count().stop;
	} else{
		$(this).addClass('active');
		$('#counter').fadeIn(200);
		$('.ball').fadeIn(200);
		count();
	}
});

function count(){
	$({countNum: $('#counter').text()}).animate({countNum: 100}, {
	  duration: 2500,
	  easing:'linear',
	  step: function() {
		 $('#counter').text(Math.floor(this.countNum) + '%');
	  },
	  complete: function() {
		 $('#counter').fadeOut(200);
		 $('.complete').addClass('fadein');
		 $('.ball').fadeOut(200);
		  $('#button').fadeOut(100);
		  setTimeout(function() {
			   $('.button-container').removeClass('active');
			  $('.complete').removeClass('fadein');
			  $('#button').fadeIn(200);
   		}, 1000);
	  }
	});
}
