$(document).ready(function() {

  $('.downvote-question-arrow').on('click', function(event) {

    $.ajax({
      data : {
        number : $(this).siblings('.question-content').children('.question-number').text()
      },
      type : 'POST',
      url : '/downvote-question'
    })
	
	.done(function(response) {
	  
	  $(this).siblings('.voting-points').children('.points-variable').html(response[1] + ' points');
	  
	});
  });
});