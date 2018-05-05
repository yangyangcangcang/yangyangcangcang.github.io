var week =new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
  //var titleObj=document.createElement("input");
 // document.body.appendChild(titleObj);
	//titleObj.style.width="500px";
	var time1Obj=document.getElementById("date");

	window.setInterval("clock2(time1Obj)",1000);
	//alert(time1Obj.firstChild);
	function clock2(time1Obj)
	{
		
		 var timer=new Date;
		
		//
		var year=timer.getFullYear();
		//alert(year);
		var month=timer.getMonth()+1;
		//alert(month);
		var today =timer.getDate();
		//alert(today);
	
		
		
		//alert(mill);
		var xingqi=timer.getDay();
		
		//var str =  "当前时间为："+year+"年"+month+"月"+today+"日"+"<br>"+hours+":"+min+":"+seconds+":"+mill+"&nbsp;"+week[xingqi];
        //alert(xingqi);
		//alert(titleObj);
		
		time1Obj.innerHTML="今天是："+year+"年"+month+"月"+today+"日&nbsp;&nbsp;&nbsp;"+week[xingqi];
		
		//document.write("当前时间为："+year+"年"+month+"月"+today+"日"+"<br>"+hours+":"+min+":"+seconds+":"+mill+"&nbsp;"+week[xingqi]);
		
		}
