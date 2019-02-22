$('document').ready(function() {

  $('.answer-content').on('click', function(event) {
	
    let clicked = $(this).children('.answer-number').text();
	
	$.ajax({
      data : {
        number : clicked
      },
      type : 'GET',
      url : '/select-answer'
    })
	.done(function(response) {

      $('.answer-content').each(function(i, obj) {
	  
	    if ($(this).children('.answer-number').text() == response[0].id) {
		  
		  $(this).addClass('featured-content');
		  $(this).children('.question-variable').html(response[0].answer_text);
		
		} else {
		  
		  $(this).parent().addClass('hidden');
		
		}
	  
	  });
	  

	});
	
  });
  
  event.preventDefault();
  
});