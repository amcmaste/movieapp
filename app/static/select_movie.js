$(document).ready(function() {

  $('#select-movie-form').on('submit', function(event) {

    $.ajax({
      data : {
        title : $('#title').val(),
      },
      type : 'GET',
      url : '/select-movie'
    })
	.done(function(response) {

      alert(response)
	
	});

	event.preventDefault();

  });
});