$('document').ready(function() {

  $('.answer-content').on('click', function(event) {
	
    let clicked = $(this).children('.answer-number').text();
	
	$.ajax({
      data : {
        number : clicked
      },
      type : 'GET',
      url : '/select-answer'
    })
	.done(function(response) {
	  
	  $('.answer-content').removeClass('featured-content');
	  $('#no-movie-outer-container').addClass('hidden');
	  $('#expand-questions-button').removeClass('hidden');
	  $('#expand-answers-button').removeClass('hidden');

      $('.answer-content').each(function(i, obj) {
	  
	    if ($(this).children('.answer-number').text() == response[0].id) {
		  
		  $(this).addClass('featured-content');
		  $(this).children('.question-variable').html(response[0].answer_text);
		
		} else {
		  
		  $(this).parent().addClass('hidden');
		
		}
		
	  });
	  
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
	
  });
  
  event.preventDefault();
  
});