$('document').ready(function() {

  $('.question-content').on('click', function(event) {
	  
      alert($(this).children('.question-number').text());
	  
  });
  
  event.preventDefault();
  
});