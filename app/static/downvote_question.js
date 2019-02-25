$(document).ready(function() {

  $('.downvote-question-arrow').on('click', function(event) {
	
	let reference = $(this).siblings('.question-content');

    $.ajax({
      data : {
        number : reference.children('.question-number').text()
      },
      type : 'POST',
      url : '/downvote-question'
    }).done(function(response) {
	  
	  reference.siblings('.voting-points').children('.points-variable').html(response[1]);
	  
	}).fail(function() {
	  
	  alert('Failure!')
    
	});
  });
});