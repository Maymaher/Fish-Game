linePage();
cycleText();

function linePage(){

	var splitMe = $('.sentence');

	splitMe.each(function(index){

		var text = $(this).html();
		var output = '';

		//split all letters into spans
		for (var i = 0, len = text.length; i < len; i++) {
		  
		  	output += '<span data-index="'+i+'">' + text[i] + '</span>';
			
		}

		//put it in the html
		$(this).html(output);

		//check the offset of each letter to figure out where the line breaks
		var prev = 0;
		var parts = [];
		$(this).find('span').each(function(i){
			if ($(this).offset().top > prev){
				parts.push(i);
				prev = $(this).offset().top;
			}
		})

		parts.push(text.length);

		//create final 
		var finalOutput = ''

		parts.forEach(function(endPoint, i){
			if (endPoint > 0){
				finalOutput += '<span data-line="'+i+'" class="line-wrap"><span class="line-inner">' + text.substring(parts[i-1],parts[i]) + '</span></span>';
			}
		})

		$(this).html(finalOutput);
		$(this).addClass("lined");

	})

}

function cycleText(){

	setInterval(function(){

		$('.sentence').toggleClass('sentence--show');

	}, 4000)

  setTimeout(function(){
    $('.sentence').toggleClass('sentence--show'); 
  },1000)
  
}