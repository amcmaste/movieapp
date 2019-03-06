$(document).ready(function() {

  $('#add-question-form').on('submit', function(event) {
	
    let user = $('#user-username').text();
	let movie = $('#movie-title').text();
	let question = $('#question').val();
	
	$.ajax({
      data : {
		  
        user : user,
		movie : movie,
		question : question
      
	  },
      type : 'GET',
      url : '/add-question-content'
    })
	.done(function(response) {
    
      alert(response);
	
	});
	
    event.preventDefault();
	
  });
  
});