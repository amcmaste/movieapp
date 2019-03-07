$(document).ready(function() {

  $('#add-answer-form').on('submit', function(event) {
	
    let user = $('#user-username').text();
	let movie = $('#movie-title').text();
	let question;
	let answer = $('#answer').val();
	
    $('.question-content').each(function(i, obj) {
	  
	  if ($(this).hasClass('featured-content')) {
		  
	    question = $(this).children('.question-variable').text();
		
	  } else {}
		  
	});
	
	$.ajax({
      data : {
		  
        user : user,
		movie : movie,
		question : question,
		answer : answer
      
	  },
      type : 'GET',
      url : '/add-answer-content'
    })
	.done(function(response) {
    
	  $('#answer').val('');
      alert('Answer added successfully, please reload!');
	
	});
	
    event.preventDefault();
	
  });
  
});