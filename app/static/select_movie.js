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
       
      if (response[0]) {
	    $('#no-movie-outer-container').addClass('hidden');
	  }
	  
	  if (response[0]) {
	    $('#movie-outer-container').removeClass('hidden');
		$('#movie-title').html(response[0].movie_title);
		$('#directed-by').html(response[0].directed_by);
		$('#released-on').html(response[0].release_date);
		$('#movie-points-count').html(response[0].points)
	  }
	  
	  if (response[1]) {
	    $('#question-container').removeClass('hidden');
		$('#question-body-container').removeClass('hidden');
	  }
	  
	  if (response[1][0]) {
        $('#q1-container').removeClass('hidden');
		$('#q1-content').addClass('featured-content');
		$('#q1-points').html(response[1][0].points);
		$('#q1-text').html(response[1][0].shortened_text);
	  }
	  
	  if (response[1][1]) {
        $('#q2-container').removeClass('hidden');
		$('#q2-points').html(response[1][1].points);
		$('#q2-text').html(response[1][1].shortened_text);
	  }
	
	  if (response[1][2]) {
        $('#q3-container').removeClass('hidden');
		$('#q3-points').html(response[1][2].points);
		$('#q3-text').html(response[1][2].shortened_text);
	  }
	
	  if (response[1][3]) {
        $('#q4-container').removeClass('hidden');
		$('#q4-points').html(response[1][3].points);
		$('#q4-text').html(response[1][3].shortened_text);
	  }
	
	  if (response[1][4]) {
        $('#q5-container').removeClass('hidden');
		$('#q5-points').html(response[1][4].points);
		$('#q5-text').html(response[1][4].shortened_text);
	  }
	
	});

	event.preventDefault();

  });
});