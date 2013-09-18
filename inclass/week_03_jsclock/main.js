function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('time').innerHTML=h+":"+m+":"+s;
t=setTimeout(function(){startTime()},500);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}

function findPosition(h, m) {
	var xPos = (h*4.2);
	var yPos = (m*1.6);
	moveSun(xPos, yPos);
}


function moveSun(x, y){
	document.getElementById("sun").style.position='absolute';
	document.getElementById("sun").style.left= x + '%'; //minutes
	document.getElementById("sun").style.top= y + '%'; //minutes
	
}

	var innerWidth = window.innerWidth;
	var innerHeight = window.innerHeight;
	
	document.getElementById("content").innerHTML="<canvas id='myCanvas' width='"+window.innerWidth+"' height='"+window.innerHeight+"'></canvas>";
	
		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		var grd=ctx.createLinearGradient(0,0,0,window.innerHeight);
		grd.addColorStop(0,"#2d4476");
		grd.addColorStop(0.65,"#b0b0b8");
		grd.addColorStop(1,"#f8b781");
		ctx.fillStyle=grd;
		ctx.fillRect(0,0,window.innerWidth,window.innerHeight);