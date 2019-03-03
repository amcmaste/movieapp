$(document).ready(function() {

  $('.upvote-question-arrow').on('click', function(event) {
	
	let reference = $(this).siblings('.question-content');

    $.ajax({
      data : {
        
		user : $('#user-username').text(),
		number : reference.children('.question-number').text()
      
	  },
      type : 'POST',
      url : '/upvote-question'
    }).done(function(response) {
	  
	  reference.siblings('.voting-points').children('.points-variable').html(response[1]);
	  
	  if (response[2] == 'Y') {
		  
	    alert('Your vote has been counted!')
		
	  } else {
		  
	    alert('Sorry, you already voted on this question!')
		
	  }
	  
	}).fail(function() {
	  
	  alert('Failure!')
    
	});
  });
});