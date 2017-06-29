$(function(){
	function $(id){
			return document.getElementById(id);
		}
		var txt=$("txt");
		var btn_1=$("btn_1");
		var show=$("show");
		var ps=document.getElementsByTagName("p");
		var arr=["家常菜","馒头","鱼香肉丝","菜单"];
			oninput=function(){
			show.innerHTML="";
			
			for(i=0;i<arr.length;i++){
				if(arr[i].indexOf(txt.value)!=-1){
					var sss="<p>"+arr[i].replace(new RegExp(txt.value,"g")+"<span style='color:red;'>"+txt.value+"</span>"+"</p>");
					show.innerHTML+=sss;
				}
				if(txt.value==0){
					show.innerHTML="";
				}
			}
			for(var i=0;i<ps.length;i++){
	
				ps[i].onclick=function(){
					txt.value=this.innerHTML;
					show.innerHTML="";
				}
			}	
		}
			
})
function sub(){
			var a=document.getElementById("txt").value;
			
			if(a=="家常菜"){
			window.location.href = "jcc.html";
				} 
			if(a=="馒头"){
			window.location.href = "zxcjxq.html";
				} 
			if(a=="鱼香肉丝"){
			window.location.href = "zcddl.html";
				} 
			if(a=="菜单"){
			window.location.href = "caidan.html";
				} 
			} 