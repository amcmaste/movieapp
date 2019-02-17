$(document).ready(function() {

  $('form').on('submit', function(event) {

    $.ajax({
      data : {
        title : $('#title').val(),
		answer : $('#answer').val()
      },
      type : 'POST',
      url : '/submit-answer'
    })
	.done(function(response) {

      alert(response + ' added to database')
	
	});

	event.preventDefault();

  });
});