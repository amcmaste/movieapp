$(document).ready(function() {

  $('#add-question-button').on('click', function(event) {
      
    // Reset answer variables (clean-slate)
    $('#answer-container').addClass('hidden');
    $('#answer-body-container').addClass('hidden');
    $('.answer-content').removeClass('featured-content');
    $('#expand-answers-button').addClass('hidden');
	$('#add-answer-button').addClass('hidden');
	$('#add-answer-container').addClass('hidden');
    $('#a1-container').addClass('hidden');
    $('#a2-container').addClass('hidden');
    $('#a3-container').addClass('hidden');
    $('#a4-container').addClass('hidden');
    $('#a5-container').addClass('hidden');

    // Reveal add question container
	$('#add-question-container').removeClass('hidden');
	
	event.preventDefault();

  });
});