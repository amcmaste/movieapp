$(document).ready(function() {

  $('#add-answer-button').on('click', function(event) {

	// Clear random elements
      
    // Reset question variables (clean-slate)
	$('#add-question-container').addClass('hidden');

    // Reveal add question container
	$('#add-answer-container').removeClass('hidden');
	
	event.preventDefault();

  });
});