var tYear=prompt("请输入你的出生年份"),tMonth=prompt("请输入你出生的月份"),tDay=prompt("请输入你的出生日期");

function tBirth(ydate,mdate,ddate){
//闰年
	if((ydate%4==0) && (ydate%100!=0) || (ydate%400==0)){
		//定义月份对应的天数 3开始 3-14 = 1月-12月。
		arguments[3]=31;
		arguments[4]=29;
		arguments[5]=31;
		arguments[6]=30;
		arguments[7]=31;
		arguments[8]=30;
		arguments[9]=31;
		arguments[10]=31;
		arguments[11]=30;
		arguments[12]=31;
		arguments[13]=30;
		arguments[14]=31;
		var sumday=0;
 //月份为1月的情况	
 	if (mdate==1) {
			sumday=ddate;
			document.write("您的生日在"+ydate+"年是第"+sumday+"天");
			return;
		}
//月份为2-12月的情况	
	else{ 
			for(var i=0;i<(mdate-1);i++){
			sumday+=arguments[i+3];
		}
		}

	document.write("您的生日在"+ydate+"年是第"+(sumday+tDay)+"天");

		}

//平年	
	else{
		arguments[3]=31;
		arguments[4]=28;
		arguments[5]=31;
		arguments[6]=30;
		arguments[7]=31;
		arguments[8]=30;
		arguments[9]=31;
		arguments[10]=31;
		arguments[11]=30;
		arguments[12]=31;
		arguments[13]=30;
		arguments[14]=31;
		var sumday=0;
//月份为1月的情况	
	if (mdate==1) { 
			sumday=ddate;
			document.write("您的生日在"+ydate+"年是第"+sumday+"天");
			return;
		}
//月份在2-12月的情况
	else{         
			for(var i=0;i<(mdate-1);i++){
			sumday+=arguments[i+3];
		}
		}

	document.write("您的生日在"+ydate+"年是第"+(sumday+tDay)+"天");

	}
}

//基本格式验证
if(isNaN(tYear) || isNaN(tMonth) ||isNaN(tDay)|| tMonth>12 || tMonth<=0 || tDay>31 || tDay<=0 )
{
	if(tYear==null && tMonth==null && tDay==null){
		alert("退出转换");
	}
	else{
	alert("输入格式错误");
	window.location.reload();
	}
}
//转年月日为number并且调用函数;
else
{
	tYear=parseInt(tYear);
	tMonth=parseInt(tMonth);
	tDay=parseInt(tDay);
	tBirth(tYear,tMonth,tDay);
}

