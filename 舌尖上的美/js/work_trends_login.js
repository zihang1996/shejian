$(function(){
	$(".content_left_tit .ck").eq(0).css({"background":"#DD3916","color":"#fff"});
	$(".content_left_tit .ck").click(function(){
		$(this).css({"background":"#DD3916","color":"#fff"}).siblings().css({"background":"","color":""})
	})
	$(".fa-trophy").hover(function(){
		$(this).css("color","#DD3916");
	},function(){
		$(this).css("color","");
	})
})