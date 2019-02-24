$(document).ready(function() {

  $('#more-questions-button').on('click', function(event) {

    $.ajax({
      data : {
		number : $('#question-page').text(),
        title : $('#title').val()
      },
      type : 'GET',
      url : '/more-questions'
    })
	.done(function(response) {
       
	  if (response[1]) {
		$('#question-page').text(response[2]),
	    $('.question-content').removeClass('featured-content');
		$('.answer-content').removeClass('featured-content');
		$('#no-movie-outer-container').addClass('hidden');
		$('#expand-questions-button').removeClass('hidden');
		$('#expand-answers-button').addClass('hidden');
        $('#q1-container').addClass('hidden');
		$('#q2-container').addClass('hidden');
		$('#q3-container').addClass('hidden');
		$('#q4-container').addClass('hidden');
		$('#q5-container').addClass('hidden');
	    $('#answer-container').addClass('hidden');
		$('#answer-body-container').addClass('hidden');
        $('#a1-container').addClass('hidden');
		$('#a2-container').addClass('hidden');
		$('#a3-container').addClass('hidden');
		$('#a4-container').addClass('hidden');
		$('#a5-container').addClass('hidden');
	  } 
      
	  if (response[1]) {
	    $('#question-container').removeClass('hidden');
		$('#question-body-container').removeClass('hidden');
	  }
	  
	  if (response[1][0]) {
        $('#q1-container').removeClass('hidden');
		$('#q1-points').html(response[1][0].points);
		$('#q1-text').html(response[1][0].shortened_text);
		$('#q1-number').html(response[1][0].id);
	  }
	  
	  if (response[1][1]) {
        $('#q2-container').removeClass('hidden');
		$('#q2-points').html(response[1][1].points);
		$('#q2-text').html(response[1][1].shortened_text);
		$('#q2-number').html(response[1][1].id);
	  }
	
	  if (response[1][2]) {
        $('#q3-container').removeClass('hidden');
		$('#q3-points').html(response[1][2].points);
		$('#q3-text').html(response[1][2].shortened_text);
		$('#q3-number').html(response[1][2].id);
	  }
	
	  if (response[1][3]) {
        $('#q4-container').removeClass('hidden');
		$('#q4-points').html(response[1][3].points);
		$('#q4-text').html(response[1][3].shortened_text);
		$('#q4-number').html(response[1][3].id);
	  }
	
	  if (response[1][4]) {
        $('#q5-container').removeClass('hidden');
		$('#q5-points').html(response[1][4].points);
		$('#q5-text').html(response[1][4].shortened_text);
		$('#q5-number').html(response[1][4].id);
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