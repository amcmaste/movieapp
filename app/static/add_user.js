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
	  alert("Your account has been created. Please click 'LOGO' then login!");
	
	});

	event.preventDefault();

  });
});