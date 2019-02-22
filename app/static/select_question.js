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
	  
	  alert(response[0][0].question_text);
	
	});
	
  });
  
  event.preventDefault();
  
});