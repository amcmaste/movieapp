$(document).ready(function() {

  $('.question-content').on('click', function(event) {
	
    let clicked = $(this).children('.question-number').text();
	
	$.ajax({
      data : {
		  
        number : clicked
      
	  },
      type : 'GET',
      url : '/select-question'
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
		$('#add-question-button').addClass('hidden');
		$('#add-question-container').addClass('hidden');
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
		$('#add-answer-button').addClass('hidden');
		$('#add-answer-container').addClass('hidden');
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
	  
	    // Set "Expand Questions" and "Add Questions" button status
        $('#expand-questions-button').removeClass('hidden');
		$('#add-question-button').removeClass('hidden');
		$('#add-answer-button').removeClass('hidden');
      
	  }
	
	  // If answers are returned
	  if (response[2].length > 0) {
	  
	    // Expand answer containers
        let calculated = 50 + 17 + 61 * response[2].length;
	    $('#answer-container').removeClass('hidden');
        setTimeout(function(){ $('#answer-body-container').removeClass('hidden'); }, 200);
		setTimeout(function() { $('#answer-container').animate({height: calculated}, 200); }, 0);
	  
	    // Populate individual answers
	    if (response[2][0]) {
          $('#a1-container').removeClass('hidden');
		  $('#a1-points').html(response[2][0].points);
		  $('#a1-text').html(response[2][0].shortened_text);
		  $('#a1-number').html(response[2][0].id);
	    }
	  
	    if (response[2][1]) {
          $('#a2-container').removeClass('hidden');
		  $('#a2-points').html(response[2][1].points);
		  $('#a2-text').html(response[2][1].shortened_text);
		  $('#a2-number').html(response[2][1].id);
	    }
	
	    if (response[2][2]) {
          $('#a3-container').removeClass('hidden');
		  $('#a3-points').html(response[2][2].points);
		  $('#a3-text').html(response[2][2].shortened_text);
		  $('#a3-number').html(response[2][2].id);
	    }
	
	    if (response[2][3]) {
          $('#a4-container').removeClass('hidden');
		  $('#a4-points').html(response[2][3].points);
		  $('#a4-text').html(response[2][3].shortened_text);
		  $('#a4-number').html(response[2][3].id);
	    }
	
	    if (response[2][4]) {
          $('#a5-container').removeClass('hidden');
		  $('#a5-points').html(response[2][4].points);
		  $('#a5-text').html(response[2][4].shortened_text);
		  $('#a5-number').html(response[2][4].id);
	    }
	  
	    // Set "Expand Answers" button status
        $('#expand-answers-button').addClass('hidden');
	  
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