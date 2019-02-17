$(document).ready(function() {

  $('form').on('submit', function(event) {

    $.ajax({
      data : {
        title : $('#title').val(),
      },
      type : 'POST',
      url : '/submit-movie'
    })
	.done(function(response) {

      alert(response + ' added to database')
	
	});

	event.preventDefault();

  });
});