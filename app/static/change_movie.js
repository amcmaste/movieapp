$(document).ready(function() {

  $('#change-movie-button').on('click', function(event) {

    // Reset movie variables (clean-slate)
    $('#no-movie-toggle').addClass('hidden');
    $('#movie-toggle').addClass('hidden');
		
    // Reset question variables (clean-slate)
	$('#question-container').addClass('hidden');
	$('#question-body-container').addClass('hidden');
	$('.question-content').removeClass('featured-content');
	$('#expand-questions-button').addClass('hidden');
	$('#q1-container').addClass('hidden');
	$('#q2-container').addClass('hidden');
	$('#q3-container').addClass('hidden');
	$('#q4-container').addClass('hidden');
	$('#q5-container').addClass('hidden');
		
	// Reset answer variables (clean-slate)
	$('#answer-container').addClass('hidden');
	$('#answer-body-container').addClass('hidden');
	$('.answer-content').removeClass('featured-content');
	$('#expand-answers-button').addClass('hidden');
	$('#a1-container').addClass('hidden');
	$('#a2-container').addClass('hidden');
	$('#a3-container').addClass('hidden');
	$('#a4-container').addClass('hidden');
	$('#a5-container').addClass('hidden');

    // Adjust movie search containers
	$('#movie-container').animate({height: '214px'}, 500);
	$('#no-movie-toggle').removeClass('hidden');
	$('#movie-toggle').addClass('hidden');

	event.preventDefault();

  });
});