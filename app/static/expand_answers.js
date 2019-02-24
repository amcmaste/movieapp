$(document).ready(function() {

  $('#expand-answers-button').on('click', function(event) {
	
    let selected = $('#a1-number').text();
	
	$.ajax({
      data : {
        number : selected
      },
      type : 'GET',
      url : '/expand-answers'
    })
	.done(function(response) {
       
	  if (response) {
		$('.answer-content').removeClass('featured-content');
		$('#no-movie-outer-container').addClass('hidden');
		$('#expand-answers-button').addClass('hidden')
        $('#a1-container').addClass('hidden');
		$('#a2-container').addClass('hidden');
		$('#a3-container').addClass('hidden');
		$('#a4-container').addClass('hidden');
		$('#a5-container').addClass('hidden');
	  } 
	  

	  if (response[1][0]) {
        $('#a1-container').removeClass('hidden');
		$('#a1-points').html(response[1][0].points);
		$('#a1-text').html(response[1][0].shortened_text);
		$('#a1-number').html(response[1][0].id);
	  }
	  
	  if (response[1][1]) {
        $('#a2-container').removeClass('hidden');
		$('#a2-points').html(response[1][1].points);
		$('#a2-text').html(response[1][1].shortened_text);
		$('#a2-number').html(response[1][1].id);
	  }
	
	  if (response[1][2]) {
        $('#a3-container').removeClass('hidden');
		$('#a3-points').html(response[1][2].points);
		$('#a3-text').html(response[1][2].shortened_text);
		$('#a3-number').html(response[1][2].id);
	  }
	
	  if (response[1][3]) {
        $('#a4-container').removeClass('hidden');
		$('#a4-points').html(response[1][3].points);
		$('#a4-text').html(response[1][3].shortened_text);
		$('#a4-number').html(response[1][3].id);
	  }
	
	  if (response[1][4]) {
        $('#a5-container').removeClass('hidden');
		$('#a5-points').html(response[1][4].points);
		$('#a5-text').html(response[1][4].shortened_text);
		$('#a5-number').html(response[1][4].id);
	  }
	
	});
	
  });
  
  event.preventDefault();
  
});