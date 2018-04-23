$("document").ready(function(){
	

	$("button").click(function(){
			$.ajax({
				url: "https://talaikis.com/api/quotes/random/",
				success: function(result){
					$(".quote-text").html(result.quote);
					$(".quote-author").html(result.author);
			}});
	});
});
