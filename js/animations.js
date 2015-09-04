$(document).ready(function(){

	
	$('#char-count').hide();
	
	$('#tweet-submit').hide();
	
	$('.tweet-compose').on('click', function(){
		$('#char-count').show();
		$('#tweet-submit').show();
		$(this).css("height", "5em");
		
	});
	
	$('.tweet-compose').on('keyup', function(){
		var textlength = $('.tweet-compose').val().length;
		var max = 140;
		var char = max - textlength;
		$('#char-count').text(char);
		if(char <= 10){
			$('#char-count').css('color', 'red');
		} else if (char > 10) {
			$('#char-count').css('color', '#999')
			}
			if(char < 1){
				$('#tweet-submit').prop('disabled', true);
			} else if (char > 0){
				$('#tweet-submit').prop('disabled', false);
			}
	});
	
     $('#tweet-submit').on('click', function(){
		var cloneTweet = $('.tweet').first().clone();
		cloneTweet.find('.fullname').text('Sterling Archer');
		cloneTweet.find('.avatar').attr('src', 'img/alagoon.jpg');
		var textlength = $('.tweet-compose').val()
		cloneTweet.find('.tweet-text').text(textlength);
		$('#stream').prepend(cloneTweet);

	})
	
	$('.tweet-actions').hide();
	$('.stats').hide();
	
 
    $('.tweet').hover(function(){
        $('.tweet-actions').show();
        },function(){
        $('.tweet-actions').hide();
        
        })
	
	  $('.tweet').click(function(){
        $('.stats').show();
        },function(){
        $('.stats').slideDown();
        
        })
	
	
	
	
	/*$('.tweet').on('click', function(){
		$('.stats').show()}, function() {
		$('.stats').slidDown('slow');
		})
	});*/
	
	  
	
	
	

	
	
})

     
	  