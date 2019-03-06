window.onload = function() {

  let user = $('#user-username').text();
    
  if (user) {
  
    $.ajax({
      data : {
  		  
        user : user
        
  	},
      type : 'POST',
      url : '/check-login'
    })
    .done(function(response) {
      
  	  if (response == 'Logged In') {
  	
        $('#no-user-toggle').addClass('hidden');
        $('#user-toggle').removeClass('hidden');
  	    $('#user-container').css('height', '228px');
  	
  	  } else {}
  	
    });
    
  } else {}

}