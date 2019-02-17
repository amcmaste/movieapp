$(document).ready(function() {

  $('form').on('submit', function(event) {

    $.ajax({
      data : {
        title : $('#title').val(),
		question : $('#question').val()
      },
      type : 'POST',
      url : '/submit-question'
    })
	.done(function(response) {

      alert(response + ' added to database')
	
	});

	event.preventDefault();

  });
});