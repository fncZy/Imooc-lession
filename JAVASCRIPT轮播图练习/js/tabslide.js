window.onload=function(){
//封装一个 byID的方法
function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

//主要函数开始
var index=0,
	timer=null;


function tabchange(){
	var main=byId(mainbox),
	    banner=byId(bannerbox).getElementsByTagName("div"),
	    bannerlen=banner.length,
	    tabs=byId(tabbox).getElementsByTagName("div");
	    tabslen=tabs.length;
	    
//滑入时候清除定时器 , 离开继续;
	
	main.onmouseover=function(){
		if(timer) clearInterval(timer);
	}
	main.onmouseout=function(){
		timer=setInterval(function(){
		index++;
		if(index>=bannerlen){
				index=0;
			}
		imgTabChange();
		},1000);
	}
	main.onmouseout();

//变换图片和选项卡的函数
	
	function imgTabChange(){
		
		for(var i=0;i<bannerlen;i++){
			banner[i].style.display="none";
			tabs[i].className="tab";
			}
		banner[index].style.display="block";
		tabs[index].className="tab stab";
	}

//选项卡操作,切换图片
	
	for(var b=0;b<tabslen;b++){
		tabs[b].id=b;
		tabs[b].onclick=function(){
			index=this.id;
			imgTabChange();
		}
		}
	

}


tabchange();

}