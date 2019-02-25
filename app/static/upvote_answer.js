$(document).ready(function() {

  $('.upvote-answer-arrow').on('click', function(event) {
	
	let reference = $(this).siblings('.answer-content');

    $.ajax({
      data : {
        number : reference.children('.answer-number').text()
      },
      type : 'POST',
      url : '/upvote-answer'
    }).done(function(response) {
	  
	  reference.siblings('.voting-points').children('.points-variable').html(response[1]);
	  
	}).fail(function() {
	  
	  alert('Failure!')
    
	});
  });
});