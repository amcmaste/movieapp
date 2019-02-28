$(document).ready(function() {

  $('#logout-button').on('click', function(event) {
	  
	let user = $('#user-username').val();

    $.ajax({
      data : {
		  
        user : user
      
	  },
      type : 'POST',
      url : '/logout'
    })
	.done(function(response) {
       
	  if (response.user == user) {
	
        $('#no-user-toggle').removeClass('hidden');
		$('#user-toggle').addClass('hidden');
		$('#user-username').html('');
		$('#fav-movie').html('');
		$('#user-since').html('');
		$('#user-points').html('');
		$('#user-container').animate({height: '288px'}, 500);
	
	  } else {}
	
	});

	event.preventDefault();

  });
});