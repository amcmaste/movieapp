$(document).ready(function() {

  $('#more-questions-button').on('click', function(event) {

    let selected = $('#q1-number').text();

    $.ajax({
      data : {
		page : $('#question-page').text(),
        number : selected
      },
      type : 'GET',
      url : '/more-questions'
    })
	.done(function(response) {
       
	  if (response) {
		
		// Clear form fields
		$('#title').val('');
		
		// Reset movie variables (clean-slate)
		$('#no-movie-toggle').addClass('hidden');
		$('#movie-toggle').addClass('hidden');
		
		// Reset question variables (clean-slate)
		$('#question-container').addClass('hidden');
		$('#question-body-container').addClass('hidden');
		$('.question-content').removeClass('featured-content');
		$('#expand-questions-button').addClass('hidden');
		$('#add-question-container').addClass('hidden');
		$('#add-question-button').addClass('hidden');
		$('#add-answer-button').addClass('hidden');
		$('#add-answer-container').addClass('hidden');
		$('#q1-container').addClass('hidden');
		$('#q2-container').addClass('hidden');
		$('#q3-container').addClass('hidden');
		$('#q4-container').addClass('hidden');
		$('#q5-container').addClass('hidden');
		$('#q1-points').html('');
		$('#q1-text').html('');
		$('#q1-number').html('');
		$('#q2-points').html('');
		$('#q2-text').html('');
		$('#q2-number').html('');
		$('#q3-points').html('');
		$('#q3-text').html('');
		$('#q3-number').html('');
		$('#q4-points').html('');
		$('#q4-text').html('');
		$('#q4-number').html('')
		$('#q5-points').html('');
		$('#q5-text').html('');
		$('#q5-number').html('')
		
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
		$('#a1-points').html('');
		$('#a1-text').html('');
		$('#a1-number').html('');
		$('#a2-points').html('');
		$('#a2-text').html('');
		$('#a2-number').html('');
		$('#a3-points').html('');
		$('#a3-text').html('');
		$('#a3-number').html('');
		$('#a4-points').html('');
		$('#a4-text').html('');
		$('#a4-number').html('')
		$('#a5-points').html('');
		$('#a5-text').html('');
		$('#a5-number').html('')
		
	  }
	  
	  //If movies are returned
	  if (response[0]) {
		// Adjust movie containers
		setTimeout(function(){ $('#movie-container').animate({height: '266px'}, 200); }, 0);
		$('#movie-toggle').removeClass('hidden');
		
		// Set movie variables
		$('#movie-title').html(response[0].movie_title);
		$('#directed-by').html(response[0].directed_by);
		$('#released-on').html(response[0].release_date);
		$('#movie-points-count').html(response[0].points)
	  }
	  
	  // Prepare and adjust question containers
	  if (response[1]) {
		//Calculate height of container
		let calculated = 50 + 17 + 61 * response[1].length;
		setTimeout(function(){ $('#question-container').animate({height: calculated}, 200);}, 0);
	    $('#question-container').removeClass('hidden');
		setTimeout(function(){ $('#question-body-container').removeClass('hidden'); }, 200);
	  }
	  
	  // Set "Add Questions" button status
      $('#add-question-button').removeClass('hidden');
	  
	  // Set question-1 variables
	  if (response[1][0]) {
        $('#q1-container').removeClass('hidden');
		$('#q1-points').html(response[1][0].points);
		$('#q1-text').html(response[1][0].shortened_text);
		$('#q1-number').html(response[1][0].id);
	  }
	  
	  // Set question-2 variables
	  if (response[1][1]) {
        $('#q2-container').removeClass('hidden');
		$('#q2-points').html(response[1][1].points);
		$('#q2-text').html(response[1][1].shortened_text);
		$('#q2-number').html(response[1][1].id);
	  }

	  // Set question-3 variables	
	  if (response[1][2]) {
        $('#q3-container').removeClass('hidden');
		$('#q3-points').html(response[1][2].points);
		$('#q3-text').html(response[1][2].shortened_text);
		$('#q3-number').html(response[1][2].id);
	  }
	
	  // Set question-4 variables
	  if (response[1][3]) {
        $('#q4-container').removeClass('hidden');
		$('#q4-points').html(response[1][3].points);
		$('#q4-text').html(response[1][3].shortened_text);
		$('#q4-number').html(response[1][3].id);
	  }
	
	  // Set question-5 variables
	  if (response[1][4]) {
        $('#q5-container').removeClass('hidden');
		$('#q5-points').html(response[1][4].points);
		$('#q5-text').html(response[1][4].shortened_text);
		$('#q5-number').html(response[1][4].id);
	  }
	  
	  // Set "Expand Questions" button status
      $('#expand-questions-button').removeClass('hidden');
	  
	  // Set "More Questions" button status
	  if (response[1].length < 5) {
		$('#more-questions-button').addClass('hidden');
	  } else {
	    $('#more-questions-button').removeClass('hidden');
	  }
	  
	  /*
	  // Set view
	  setTimeout(function() {
		  
		  console.log($(document).height());
		  $("html, body").animate({ scrollTop: ($(document).height()) });
	  
	  }, 200);
	  */
	
	});

    // Prevent default action
	event.preventDefault();

  });
});