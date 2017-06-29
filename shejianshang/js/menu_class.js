$(function(){
				//  *****topnav*****
				$(".mini_nav a").hover(function(){
					$(this).css({"background":"#DD3915","color":"#fff"});
				},function(){
				    $(this).css({"background":"","color":""});
				})
				$(".mini_nav a").eq(1).mouseover(function(){
					$(".show").show();
				})
				$(".mini_nav a").eq(1).mouseout(function(){
					$(".show").hide();
				})
				
				//  *****content*****
				$(".content a").hover(function(){
					$(this).css("color","#DD3915");
				},function(){
					$(this).css("color","");
				})

                $(".click1").hover(function(){
                	$(this).css("color","#DD3915");
                },function(){
                	$(this).css("color","");
                })
                $(".click2").hover(function(){
                	$(this).css("color","#DD3915");
                },function(){
                	$(this).css("color","");
                })
                $(".click1").click(function(){
                	console.log($(this).parent().parent().next());
					$(this).parent().parent().hide();
					$(this).parent().parent().next().show();
				})
                $(".click2").click(function(){
					$(this).parent().parent().hide();
					$(this).parent().parent().prev().show();
				})


			})