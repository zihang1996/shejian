$(function(){
				$(".content_mintit a").hover(function(){
					$(this).css({"background":"#DD3915","color":"#fff"});
				},function(){
					$(this).css({"background":"","color":""});
				})
				$(".medal").hover(function(){
					$(this).css("color","#DD3915");
				},function(){
					$(this).css("color","");
				})
				
				$(".content_pics img").hover(function(){
					$(this).next().show();
				},function(){
					$(this).next().hide();
				})
				$(".content_txt a").hover(function(){
					$(this).css({"background":"#DD3915","color":"#fff"});
				},function(){
				    $(this).css({"background":"","color":""});
				})	
			})