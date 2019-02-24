$(document).ready(function() {

  $('#more-answers-button').on('click', function(event) {

    let selected = $('#a1-number').text();

    $.ajax({
      data : {
		page : $('#answer-page').text(),
        number : selected
      },
      type : 'GET',
      url : '/more-answers'
    })
	.done(function(response) {
       
	  if (response[1]) {
		$('#question-page').text(response[2]),
		$('#no-movie-outer-container').addClass('hidden');
		$('#expand-questions-button').removeClass('hidden');
		$('#expand-answers-button').removeClass('hidden');
        $('#a1-container').addClass('hidden');
		$('#a2-container').addClass('hidden');
		$('#a3-container').addClass('hidden');
		$('#a4-container').addClass('hidden');
		$('#a5-container').addClass('hidden');
	  } 
      
	  if (response[1]) {
	    $('#answer-container').removeClass('hidden');
		$('#answer-body-container').removeClass('hidden');
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
	  
	  
	  if ($('#q1-container').hasClass('hidden') || $('#q2-container').hasClass('hidden') || $('#q3-container').hasClass('hidden') || $('#q4-container').hasClass('hidden') || $('#q5-container').hasClass('hidden')) {
	    $('#more-questions-button').addClass('hidden');
	  } else {
	    $('#more-questions-button').removeClass('hidden');
	  }
	
	  if ($('#a1-container').hasClass('hidden') || $('#a2-container').hasClass('hidden') || $('#a3-container').hasClass('hidden') || $('#a4-container').hasClass('hidden') || $('#a5-container').hasClass('hidden')) {
	    $('#more-answers-button').addClass('hidden');
	  } else {
	    $('#more-answers-button').removeClass('hidden');
	  }
	  
	});

	event.preventDefault();

  });
});