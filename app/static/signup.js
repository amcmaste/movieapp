$(document).ready(function() {

  $('form').on('submit', function(event) {

    $.ajax({
      data : {
        username : $('#username').val(),
        email : $('#email').val(),
        pword : $('#password').val()
      },
      type : 'POST',
      url : '/submit-user'
    })
	.done(function(response) {

	  $('#username').val('');
	  $('#email').val('');
	  $('#password').val('');
	  $('#verify').val('');
	  $('#submit').prop("disabled", true);
	  alert(response + ', your account has been created. Please login!');
	
	});

	event.preventDefault();

  });
});