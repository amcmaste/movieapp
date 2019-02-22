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

      $('#movie-outer-container').removeClass('hidden');
	  $('#no-movie-outer-container').addClass('hidden');
	  alert(response)
	
	});

	event.preventDefault();

  });
});