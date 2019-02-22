$('document').ready(function() {

  $('.question-content').on('click', function(event) {
	
    let clicked = $(this).children('.question-number').text();
	
	$.ajax({
      data : {
        number : clicked
      },
      type : 'GET',
      url : '/select-question'
    })
	.done(function(response) {
	  
      $('.question-content').each(function(i, obj) {
	  
	    if ($(this).children('.question-number').text() == response[0][0].id) {
		  
		  $(this).addClass('featured-content');
		
		} else {
		  
		  $(this).parent().addClass('hidden');
		
		}
	  
	  });
	
	});
	
  });
  
  event.preventDefault();
  
});