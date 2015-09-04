$(window).load(function(){

setTimeout("A3()",100);
setTimeout("moonRot()",200);
setTimeout("A5()",600);
setTimeout("A6()",2000);
setTimeout("A7()",2100);
setTimeout("A8()",2200);
setTimeout("A9()",2400);
})


/* 滾軸動畫 */
$(document).ready(function(){

$("#A3").hide(); 
$("#A5").hide(); 
$("#A6").hide(); 
$("#A7").hide(); 
$("#A8").hide(); 
$("#A9").hide(); 
$("#T1").hide(); 
$("#T2").hide(); 
$("#T4").hide(); 
$("#T3").hide(); 
$("#T5").hide(); 
$("#Tmap").hide(); 
$("#102").hide(); 

$('#bar').hide()
$('#introWord').hide()
$('#movieword0').hide()
$(window).scroll(function(){  
   
    var scrollTop = $(window).scrollTop();  
   var moonR = scrollTop/15 + 90;
    if(scrollTop >850)  
   
       { $('#bar').fadeIn("slow")}
		
    else  
   
        {$('#bar').fadeOut("slow")
		
		}
/* 月亮旋轉 */
$("#moon").rotate({animateTo:moonR,duration: 1700});
/* 第一頁動畫 */
if(scrollTop >300 && scrollTop <1000)
   
       { 
	   $('#introWord').fadeIn("slow").animate({left:"287px"},{duration: 1000, queue: false});
	   
	   }
		
else  
   
        {
		$('#introWord').fadeOut("slow").animate({left:"317px"},{duration: 1000, queue: false});
		
		};
/* 第二頁 */
if(scrollTop >1000 && scrollTop <2000)
   
       { 
	   $('#movieword0').fadeIn("slow").animate({left:"194px"},{duration: 800, queue: false});
	   $('.youtube-player').fadeIn("slow").animate({left:"356px"},{duration: 1200, queue: false});
	   
	   }
		
else  
   
        {
		$('#movieword0').fadeOut("slow").animate({left:"224px"},{duration: 1000, queue: false});
		$('.youtube-player').fadeOut("slow").animate({left:"386px"},{duration: 1000, queue: false});
		
		};		
/* 第三頁 */
if(scrollTop >1700 && scrollTop <3000)
   
       { 
	   $('#T1').fadeIn("slow").animate({left:"276px"},{duration: 800, queue: false});
	   $('#T2').fadeIn("slow").animate({left:"292px"},{duration: 900, queue: false});
	   $('#T3').fadeIn("slow").animate({left:"460px"},{duration: 1000, queue: false});
	   $('#T4').fadeIn("slow").animate({left:"627px"},{duration: 1100, queue: false});
	   $('#T5').fadeIn("slow").animate({left:"276px"},{duration: 1150, queue: false});
	   $('#Tmap').fadeIn("slow").animate({left:"291px"},{duration: 1200, queue: false});
	   
	   }
		
else  
   
        {
		$('#T1').fadeOut("slow").animate({left:"296px"},{duration: 1000, queue: false});
		$('#T2').fadeOut("slow").animate({left:"312px"},{duration: 1000, queue: false});
		$('#T3').fadeOut("slow").animate({left:"480px"},{duration: 1000, queue: false});
		$('#T4').fadeOut("slow").animate({left:"647px"},{duration: 1000, queue: false});
		$('#T5').fadeOut("slow").animate({left:"296px"},{duration: 1000, queue: false});
		$('#Tmap').fadeOut("slow").animate({left:"311px"},{duration: 1000, queue: false});
		
		};		
/* 第四頁 */
if(scrollTop >3000 && scrollTop <4000)
   
       { 
	   
	   $('#L1').fadeIn("slow").animate({left:"248px"},{duration: 900, queue: false});

	   
	   
	   }
		
else  
   
        {
		
		$('#L1').fadeOut("slow").animate({left:"268px"},{duration: 1000, queue: false});
		
				
		};		

});  


/* 選單的底線 */

$("#A6").hover(
function(){$("#A6").css("text-decoration","underline")},
function(){$("#A6").css("text-decoration","none")}
)
$("#A7").hover(
function(){$("#A7").css("text-decoration","underline")},
function(){$("#A7").css("text-decoration","none")}
)
$("#A8").hover(
function(){$("#A8").css("text-decoration","underline")},
function(){$("#A8").css("text-decoration","none")}
)
$("#A9").hover(
function(){$("#A9").css("text-decoration","underline")},
function(){$("#A9").css("text-decoration","none")}
)



/* 移動滾軸 */
$('#A6').click(function(){$('html,body').animate({scrollTop:'960px'},500);});
$('#A7').click(function(){$('html,body').animate({scrollTop:'2540px'},500);});
$('#A8').click(function(){$('html,body').animate({scrollTop:'3330px'},500);});
$('#A9').click(function(){$('html,body').animate({scrollTop:'4320px'},500);});

$('#B1').click(function(){$('html,body').animate({scrollTop:'0px'},500);});
$('#B2').click(function(){$('html,body').animate({scrollTop:'960px'},500);});
$('#B3').click(function(){$('html,body').animate({scrollTop:'2560px'},500);});
$('#B4').click(function(){$('html,body').animate({scrollTop:'3330px'},500);});
$('#B5').click(function(){$('html,body').animate({scrollTop:'4320px'},500);});

<!-- 圖片切換 --!>
$("#103").click(function(){$(".A").css("display","inline");$(".B").css("display","inline")})
$("#typeA").click(function(){$(".A").css("display","inline");$(".B").css("display","none")})
$("#typeB").click(function(){$(".A").css("display","none");$(".B").css("display","inline")})
});






function moonRot(){$("#moon").rotate({animateTo:90,duration:5000});}
function A3(){$("#A3").fadeIn(3000);}
function A5(){$("#A5").fadeIn(2000);}
function A6(){$("#A6").fadeIn(1000);}
function A7(){$("#A7").fadeIn(1000);}
function A8(){$("#A8").fadeIn(1000);}
function A9(){$("#A9").fadeIn(1000);}


$("#ncku").click(function(){
	
	window.open('http://web.ncku.edu.tw/bin/home.php','_tab')
 });
 $("#nckuid").click(function(){
	
	window.open('http://www.ide.ncku.edu.tw/','_tab')
 });
 $("#nckuf").click(function(){
	
	window.open('http://nckuid.tw/forum/index.php','_tab')
 });
