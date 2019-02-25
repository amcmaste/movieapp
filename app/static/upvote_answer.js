$(document).ready(function() {

  $('.upvote-answer-arrow').on('click', function(event) {

    $.ajax({
      data : {
        number : $(this).siblings('.answer-content').children('.answer-number').text()
      },
      type : 'POST',
      url : '/upvote-answer'
    })
	
	.done(function(response) {
	  
	  $(this).siblings('.voting-points').children('.points-variable').html(response[1] + ' points');
	  
	});
  });
});