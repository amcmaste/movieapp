$(document).ready(function() {

  $('form').on('submit', function(event) {

    $.ajax({
      data : {
        favorite : $('#favorite').val()
      },
      type : 'POST',
      url : '/modify-profile'
    })
	.done(function(response) {
		
      alert(response + ' added to database')
	
	});

	event.preventDefault();

  });
});