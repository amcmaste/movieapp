$(document).ready(function() {

  $('#expand-questions-button').on('click', function(event) {

    $.ajax({
      data : {
        title : $('#title').val(),
      },
      type : 'GET',
      url : '/select-movie'
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

      // Expand movie box
	  if (response[0]) {
	    $('#movie-toggle').removeClass('hidden');
	  }
	  
	  // Expand and Resize question container
      let calculated = 50 + 17 + 61 * response[1].length;
	  $('#question-container').removeClass('hidden');
      $('#question-body-container').removeClass('hidden');
      $('#question-container').animate({height: calculated}, 500);
	  
	  // Expand individual questions
	  if (response[1][0]) {
        $('#q1-container').removeClass('hidden');
		$('#q1-points').html(response[1][0].points);
		$('#q1-text').html(response[1][0].shortened_text);
		$('#q1-number').html(response[1][0].id);
	  }
	  
	  if (response[1][1]) {
        $('#q2-container').removeClass('hidden');
		$('#q2-points').html(response[1][1].points);
		$('#q2-text').html(response[1][1].shortened_text);
		$('#q2-number').html(response[1][1].id);
	  }
	
	  if (response[1][2]) {
        $('#q3-container').removeClass('hidden');
		$('#q3-points').html(response[1][2].points);
		$('#q3-text').html(response[1][2].shortened_text);
		$('#q3-number').html(response[1][2].id);
	  }
	
	  if (response[1][3]) {
        $('#q4-container').removeClass('hidden');
		$('#q4-points').html(response[1][3].points);
		$('#q4-text').html(response[1][3].shortened_text);
		$('#q4-number').html(response[1][3].id);
	  }
	
	  if (response[1][4]) {
        $('#q5-container').removeClass('hidden');
		$('#q5-points').html(response[1][4].points);
		$('#q5-text').html(response[1][4].shortened_text);
		$('#q5-number').html(response[1][4].id);
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
	  
	  // Set view
	  setTimeout(function() {
		  
		  console.log($(document).height());
		  $("html, body").animate({ scrollTop: ($(document).height()) });
	  
	  }, 100);
	
	  });
	
	});
	
	event.preventDefault();

});