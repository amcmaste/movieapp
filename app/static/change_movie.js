$(document).ready(function() {

  $('#change-movie-button').on('click', function(event) {

	$('#no-movie-outer-container').removeClass('hidden');

	event.preventDefault();

  });
});