$(document).ready(function() {

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
	       
      if (response) {
		
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
	  
	  }
	  
	  // If movies are returned
	  if (response[0]) {
		$('#movie-toggle').removeClass('hidden');
      }
	  
	  // If questions are returned
	  if (response[1]) {
	  
	    // Expand and Resize question container
		let calculated = 50 + 17 + 61 * response[1].length;
	    $('#question-container').removeClass('hidden');
        $('#question-body-container').removeClass('hidden');
		setTimeout(function(){ $('#question-container').animate({height: calculated}, 200); }, 0);
	  
	    // Reveal and feature clicked question
	    $('.question-content').each(function(i, obj) {
	  
	      if ($(this).children('.question-number').text() == response[1][0].id) {

		    $(this).addClass('featured-content');
		    $(this).parent().removeClass('hidden');
		
		  } else {}
	  
	    });
	  
	    // Set "Expand Questions" button status
        $('#expand-questions-button').removeClass('hidden');
      
	  }
	
	  // If answers are returned
	  if (response[2]) {
	  
	    // Expand and resize answer containers
        let calculated = 50 + 17 + 61 * response[2].length;
	    $('#answer-container').removeClass('hidden');
        $('#answer-body-container').removeClass('hidden');
        setTimeout(function() { $('#answer-container').animate({height: calculated}, 200); }, 0);
	  
	    // Populate individual answers
        $('.answer-content').each(function(i, obj) {
	  
	      if ($(this).children('.answer-number').text() == response[2][0].id) {
		  
		    $(this).parent().removeClass('hidden');
			$(this).addClass('featured-content');
		    $(this).children('.question-variable').html(response[2][0].answer_text);
		
		  } else {
		  
		    $(this).parent().addClass('hidden');
		
		  }
		  
	    });
	  
	    // Set "Expand Answers" button status
        $('#expand-answers-button').removeClass('hidden');
	  
	  }
	  
	  // Set "More Questions" button status
	  if (response[1].length < 5) {
        $('#more-questions-button').addClass('hidden');
	  } else {
	    $('#more-questions-button').removeClass('hidden');
	  }
	
	  // Set "More Answers" button status
	  if (response[2].length < 5) {
        $('#more-answers-button').addClass('hidden');
	  } else {
	    $('#more-answers-button').removeClass('hidden');
	  }
	  
	  /*
	  // Set view
	  setTimeout(function() {
		  
		  console.log($(document).height());
		  $("html, body").animate({ scrollTop: ($(document).height()) });
	  
	  }, 200);
	  */
	
    });
  
  });
  
  event.preventDefault();
  
});