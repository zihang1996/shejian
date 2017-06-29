$(function(){
			var w=$(".box_a").find("img:first").outerWidth();
			var len=$(".box_a img").length;
			var timer;
			$(".btn2").click(function(){
				$(".box_a").stop().animate({"left":-w+"px"},1000,function(){
					$(".box_a").find("img:first").appendTo($(".box_a"));
					$(".box_a").css({"left":0+"px"});
				})
			});
			$(".btn_1").click(function(){
				$(".box_a").find("img:last").prependTo($(".box_a"));
				$(".box_a").css({"left":-w+"px"});
				$(".box_a").stop().animate({"left":0+"px"},1000);
			});
			timer=setInterval(function(){
				$(".btn2").click()
			},3000);
			
			$(".box_1").hover(function(){
				clearInterval(timer);
				$(".btn").css("display","block");
			},function(){
				timer=setInterval(function(){
				$(".btn2").click();
				$(".btn").css("display","none");
			},3000);
			})
			
			$(".list ul li").hover(function(){
				clearInterval(timer);
				$(".btn").css("style","display=block")
			},function(){
				timer=setInterval(function(){
				$(".btn2").click();
				$(".btn").css("display","none");
			},3000);
			})
			})