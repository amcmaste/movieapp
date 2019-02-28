$(document).ready(function() {

  $('#login-form').on('submit', function(event) {

    $.ajax({
      data : {
		  
        user : $('#username').val(),
		pword : $('#password').val()
      
	  },
      type : 'POST',
      url : '/login'
    })
	.done(function(response) {
       
	  if (response == false) {
	  
	    $('#username').val('');
		$('#password').val('');
	  
	  } else {
	
        $('#no-user-toggle').addClass('hidden');
		$('#user-toggle').removeClass('hidden');
		$('#user-username').html(response.user);
		$('#fav-movie').html(response.fav_movie);
		$('#user-since').html(response.user_since);
		$('#user-points').html(response.points);
		$('#user-container').animate({height: '228px'}, 500);
	
	  }
	
	});

	event.preventDefault();

  });
});