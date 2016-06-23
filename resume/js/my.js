// JavaScript Document;
var img_box;
var _scroll;


var isChange = true;
var isTop;
var isRoll;

var t2,t4,t6,t,_t;
var time1,time2,time3,time4,time5;


function g(selector){
	var method = selector.substr(0,1) == "." ? "getElementsByClassName" : "getElementById";
	return document[method](selector.substr(1));
		
}
function arrey(x){
	var y = g("."+x);
	var _y = [];
	for( i = 0 ;i < y.length ; i++)
	   _y.push(y[i]);
	  return _y;	
}
function position(o){
    var x = y = 0;
	
	do{
		x += o.offsetLeft;
		y += o.offsetTop;
		
	}while((o = o.offsetParent)&&(o.tagName != "body"))
	
	return {x:x,y:y};
	
}
function _random(x,y){
	return (y-x)*Math.random()+x;	
}


function head(){
	var head = document.getElementById("head");
    var top = document.getElementById("top");
	var middle = document.getElementById("middle_box");
	var head_sm = g(".head_sm")[0];
    var nav_icon = document.getElementsByClassName("nav_icon")[0];
	var middle_context = document.getElementsByClassName("middle_context")[0];
	var li_cut = document.getElementById("li_cut");
		
	var t;
	
	var img = head.getElementsByTagName("img")[0];
	var _x = position(head).x - position(head_sm).x ;
	var _y = position(head).y - position(head_sm).y -  80;
	var _x2 = _y2 = 210 - 56;
	var _x3 = _y3 = 200 - 52; 
	

	head.onclick = function(){
	clearTimeout(t);
	if(isChange && document.body.scrollTop <= 10)
	{	
	    clearInterval(time2);
	    time2 = setInterval(function(){
			if(parseInt(top.style.marginTop) == 0)
			   clearInterval(time2);
			else top.style.marginTop = parseInt(top.style.marginTop) + 8 + "px";
			if(parseInt(top.style.marginTop) == 0)
			   clearInterval(time2);
		},30);
		nav_icon.style.display = "none";
		t = setTimeout(function(){
			head.style.position = "fixed";
			head.style.left = position(head).x + "px";
			head.style.top = position(head).y + "px";
			
			time1 = setInterval(function(){
				middle_context.style.marginLeft = parseFloat(middle_context.style.marginLeft) - 11.5 + "px";
				if(parseFloat(middle_context.style.marginLeft) == 115)
				   clearInterval(time1);
			},30);
			
			t1 = setInterval(function(){
				
				if(parseFloat(head.style.left)==10)
				    {  
					  clearInterval(t1);
					  isChange = false;
					   head.onmouseover = function(){
		               head.style["-webkit-transform"] = "scale(1.2,1.2)";}
		               head.onmouseout = function(){
			           head.style["-webkit-transform"] = "scale(1)";}	
					}
				else 	  
				{
				  if(isChange)
				  {
					 head.style.left = parseFloat(head.style.left) - _x/10 + "px";
				     head.style.top = parseFloat(head.style.top) - _y/10 + "px";
				     head.style.width = parseFloat(head.style.width) - _x2/10 + "px";
				     head.style.height = parseFloat(head.style.height) - _y2/10 + "px";
			         img.style.width = parseFloat(img.style.width) - _x3/10 + "px";
				     img.style.height = parseFloat(img.style.height) - _y3/10 + "px";
				     img.style.marginLeft = parseFloat(img.style.marginLeft) - 3/10 + "px";
				     img.style.marginTop = parseFloat(img.style.marginTop) - 3/10 + "px";}
					 }
				},30);
		  },300)
		  
	}
	else if(!isChange  && document.body.scrollTop <= 10){
		head.style["-webkit-transform"] = "scale(1)";
		_t = setInterval(function(){
			head.style.left = parseFloat(head.style.left) + _x/10 + "px";
			head.style.top = parseFloat(head.style.top) + _y/10 + "px";
			head.style.width = parseFloat(head.style.width) + _x2/10 + "px";
			head.style.height = parseFloat(head.style.height) + _x2/10 + "px";
			img.style.width = parseFloat(img.style.width) + _x3/10 + "px";
			img.style.height = parseFloat(img.style.height) + _y3/10 + "px";
			img.style.marginLeft = parseFloat(img.style.marginLeft) + 3/10 + "px";
			img.style.marginTop = parseFloat(img.style.marginTop) + 3/10 + "px";
			
			if(parseFloat(head.style.left) == (position(head_sm).x + _x))
			{
			     clearInterval(_t);
				 isChange = true;}
			},30);
			head.onmouseover = function(){
		        }
		    head.onmouseout = function(){
			    }
		
		_t1 = setTimeout(function(){
			head.style.position = "static";
            clearInterval(time3);
            time3 = setInterval(function(){
				if(parseInt(top.style.marginTop) == -80)
				   clearInterval(time3);
			    else top.style.marginTop = parseInt(top.style.marginTop) - 8 + "px";	
				if(parseInt(top.style.marginTop) == -80)
				   clearInterval(time3);
			},30)
			nav_icon.style.display = "block";
			li_cut.style.display = "none";
			},300);
		t3 = setTimeout(function(){
		    _t3 = setInterval(function(){
			   middle_context.style.marginLeft = parseFloat(middle_context.style.marginLeft) + 11.5 + "px";
			   if(parseFloat(middle_context.style.marginLeft) == 230)
			      clearInterval(_t3);
		   },30)	
		    },150);
	    }

		if(!isChange && (_scroll >= 200))
		{
			clearInterval(t4);
			t2 = setInterval(function(){
	         	speed = Math.ceil(_scroll/5);
		        document.documentElement.scrollTop = document.body.scrollTop = _scroll - speed;
				isTop = true;
		        if(document.body.scrollTop <= 0)
		            clearInterval(t2);
		     },50)
		}
	}
}

function navIcon(){
	var nav_icon = document.getElementsByClassName("nav_icon")[0];
    var nav_icon2 = document.getElementsByClassName("nav_icon2")[0];
	var top = document.getElementById("top");
	nav_icon.onclick = function(){
        clearInterval(time2); 
		time2 = setInterval(function(){
			if(parseInt(top.style.marginTop) == 0)
			   clearInterval(time2);
			top.style.marginTop = parseInt(top.style.marginTop) + 8 + "px";
			if(parseInt(top.style.marginTop)==0)
		},30); 
		nav_icon.style.display = "none"; 
	}
	nav_icon2.onmouseover = function(){
	    this.style.marginTop = 0;	
	}
	nav_icon2.onmouseout = function(){
	    this.style.marginTop = -8+"px";	
	}
	nav_icon2.onmouseup = function(){
		clearInterval(time3);
		time3 = setInterval(function(){
			    if(parseInt(top.style.marginTop) == -80)
				   clearInterval(time3);
			    top.style.marginTop = parseInt(top.style.marginTop) - 8 + "px";	
		
		},30)	
		nav_icon.style.display = "block"; 
		this.style.marginTop = -8+"px";
	}
}

function roll(){
    var li = arrey("top_li");
	var li_cut = document.getElementById("li_cut");
	var speed;
	var x;
	var y;
	
	for(i = 0;i < li.length; i++)
	{
	     li[i].onmouseover = function(){
 
		 }
	     li[i].onclick = function(){
			 clearInterval(t2);
			 x = li.indexOf(this);
			 
			 y = parseFloat(li_cut.style.left);
			 clearInterval(time4);
			 time4 = setInterval(function(){
				 li_cut.style.left = parseFloat(li_cut.style.left) + (100+100*x-y)/10 + "px";
				 if(parseFloat(li_cut.style.left) == (100+100*x))
				 clearInterval(time4);
			 },20);
			 li_cut.style.display = "block";
			 clearInterval(t4);
			 t4 = setInterval(function(){
				 var roll = _scroll - document.body.clientHeight * x;
				 if(roll < 0)
				     speed = Math.floor(roll/6);
			     else 
				     speed = Math.ceil(roll/6);
				 isRoll = true;
				 document.documentElement.scrollTop = document.body.scrollTop = _scroll - speed;	
				 if(document.body.scrollTop == document.body.clientHeight * x)
				    clearInterval(t4);
				 },50);
		  }
	 }
	
}

function middle(){
    var photo1 = arrey("photo_right_text");
	var com_ph = arrey("com_ph");
    var i = 0;
	var j;
	var t5,t7,t9;
	var pt_2 = document.getElementById("pt_2");
	pt_2.onclick = function(){
		t6 = setInterval(function(){
			var roll = _scroll - document.body.clientHeight * 3;
			if(roll < 0)
				speed = Math.floor(roll/6);
			else 
				speed = Math.ceil(roll/6);
			isRoll = true;
			document.documentElement.scrollTop = document.body.scrollTop = _scroll - speed;	
			if(document.body.scrollTop == document.body.clientHeight * 3)
				clearInterval(t6);
			},50);
		
		
	}
	clearInterval(t5);
	t5 = setInterval(function(){
		if(i == 3)
		  j = 0;
		 else j = i+1;
		photo1[j].style.left = "300px";

		photo1[i].style.opacity = 0;
	
		clearInterval(t7);
		t7 = setTimeout(function(){
			photo1[j].style.left = 0;
			photo1[j].style.opacity = 1;
			com_ph[i].style.left = "-662px";
			com_ph[i].style.zIndex = 0;
			com_ph[j].style.left = 0;
			com_ph[j].style.zIndex = 1;
			
			},100)
	    clearTimeout(t9)
		t9 = setTimeout(function(){
			com_ph[i].style.left = "662px";
			i++;
			if(i == 4)
			  i = 0;
			
			},400)
		com_ph
		},5000)
	
}

function sc3(){
	var _sc3 = arrey("sc3");
	var _screen3 = document.getElementsByClassName("screen3")[0];
	var x;
	var m;
	
	for(var i = 0;i < _sc3.length;i++)
	{
		_sc3[i].onmouseover = function(){

			x = _sc3.indexOf(this);
			time5 = setInterval(function(){
				if(parseFloat(_sc3[x].style.width) == 366)
				clearInterval(time5);
				else
				{_sc3[x].style.width  = parseFloat(_sc3[x].style.width) + 5.8 + "px";
				 _sc3[x].getElementsByTagName("img")[0].style.marginLeft = parseFloat(_sc3[x].getElementsByTagName("img")[0].style.marginLeft) - 12.5 + "px";}
				
				if(parseFloat(_sc3[x].style.width) == 366)
				clearInterval(time5);
			},50);
			
			_screen3.style.backgroundColor = this.id;

			time4 = setInterval(function(){
				for(j = 0;j<_sc3.length;j++)
				{	if( j!= x)
					{	m = parseFloat(_sc3[j].style.width) - 250;
					    if(m > 0)
						{ 
					      _sc3[j].style.width = parseFloat(_sc3[j].style.width) - 5.8 + "px";
						  _sc3[j].getElementsByTagName("img")[0].style.marginLeft = parseFloat(_sc3[j].getElementsByTagName("img")[0].style.marginLeft) + 12.5 +"px";
						if(parseFloat(_sc3[j].style.width) == 250)
						 clearInterval(time4);
						}
					} 
				}			
			},50)			
		}
	}
}
function sc4(){
	var _sc4 = arrey("sc4_icon");
	var _m = 0;
	for(var i = 0;i < _sc4.length;i++)
	{
		_sc4[i].onmouseover = function(){
			
			if(_m == 0)
		    {
				this.getElementsByTagName("span")[0].style.top = "0px";
				switch(this){
				case _sc4[0]:setTimeout(function(){_sc4[0].getElementsByTagName("span")[0].style.top = "15px"},100);break;
				case _sc4[1]:setTimeout(function(){_sc4[1].getElementsByTagName("span")[0].style.top = "15px"},100);break;
				case _sc4[2]:setTimeout(function(){_sc4[2].getElementsByTagName("span")[0].style.top = "15px"},100);break;
				case _sc4[3]:setTimeout(function(){_sc4[3].getElementsByTagName("span")[0].style.top = "15px"},100);break;
				case _sc4[4]:setTimeout(function(){_sc4[4].getElementsByTagName("span")[0].style.top = "15px"},100);break;
				case _sc4[5]:setTimeout(function(){_sc4[5].getElementsByTagName("span")[0].style.top = "15px"},100);break;}}}
	    _sc4[i].onmouseout = function(){
		    var _y = position(this).y;
			var _x = position(this).x;
			var x = document.body.scrollLeft + event.clientX;
			var y = document.body.scrollTop + event.clientY;
			if(x > _x && x < _x+ _sc4[0].offsetWidth && y > _y && y < _y + _sc4[0].offsetHeight)
				_m = 1;
			else _m = 0;}
	}
	
	
	
}


window.onload = function(){
	
	var top = document.getElementById("top");
	var nav_icon = document.getElementsByClassName("nav_icon")[0];
	var li_cut = document.getElementById("li_cut");
	
	head();
	navIcon();
	roll();
	middle();
	sc3();
	sc4();
	
	_scroll = document.body.scrollTop || document.documentElement.scrollTop;
	window.onscroll = function(){

	_scroll = document.body.scrollTop || document.documentElement.scrollTop;
	
	if(document.body.scrollTop >= document.body.clientHeight -60 && document.body.scrollTop <= 2 * document.body.clientHeight -60)
	    nav_icon.style.backgroundImage = "url(image/nav_icon1.png)"
	else
	    nav_icon.style.backgroundImage = "url(image/nav_icon.png)"
		
	if(!isTop)
	    clearInterval(t2);
	if(!isRoll)
	   { clearInterval(t4);
		clearInterval(t6);}
	isTop = false;
	isRoll = false;
	}

}