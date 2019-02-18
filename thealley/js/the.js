var athA= new Array();
athA[1]=430;
athA[2]=480;
athA[3]=460;
athA[4]=580;
athA[5]=730;
athA[6]=1355;
athA[7]=330;
athA[8]=280;
athA[9]=380;

var poA = new Array
poA[1]=0;
poA[2]=2500;
poA[3]=3280;
poA[5]=4965;



$(function(){
    for(i=1; i<=9; i++)
    $("#at"+i).css("height",athA[i]+"px") ;    
});

$(function(){
    $("#nav ul li").on("click",function(){
        var pos = $(this).index()+1;
   $("html,body").stop().animate({"scrollTop":poA[pos]},500);
    });
});



$(function(){
$(window).scroll(function(){
    var po=$(window).scrollTop();
   if(po>=600)
    $("#nav").css("position","fixed").css("top","0px").css("left","0px").css("width","100%");
    else
         $("#nav").css("position","relative").css("width","95%").css("top","50px");
    
    if(po>=1000)
        {
            $("#at3 ul li").stop().animate({"marginTop":"-20px","opacity":"1"},500);
        }
    else
        {
            $("#at3 ul li").stop().animate({"marginTop":"20px","opacity":"0"},500);
        }
    if(po>=1400)
        {
            $(".at4_div1").stop().animate({"marginTop":"-20px","opacity":"1"},500);
            
        }
    else
        {
            $(".at4_div1").stop().animate({"marginTop":"20px","opacity":"0"},500);
            
        }
    
    if(po>1500)
        {
        $(".at4_div2").stop().animate({"opacity":"1"},500)
        }
    else
        {
           $(".at4_div2").stop().animate({"opacity":"0"},500) 
        }
    
    
    if(po>=1600)
        {
            $(".at4_div3").stop().animate({"marginTop":"-20px","opacity":"1"},500);
        }
    else
        {
            $(".at4_div3").stop().animate({"marginTop":"20px","opacity":"0"},500);
        }
    if(po>=2100)
        {
            $(".at5_div").stop().animate({"marginTop":"-30px"},500);
        }
    else
        {
          $(".at5_div").stop().animate({"marginTop":"0px"},500);  
        }
    
    if(po>=2700)
        {
            $(".at6_cle1").stop().animate({"opacity":"1"},500);
            $(".at6_text1").stop().animate({"marginTop":"0px"},500);
        }
    else
        {
            $(".at6_cle1").stop().animate({"opacity":"0"},500);
            $(".at6_text1").stop().animate({"marginTop":"40px"},500);
        }
    if(po>=3000)
         {
            $(".at6_cle2").stop().animate({"opacity":"1"},500);
            $(".at6_text2").stop().animate({"marginTop":"0px"},500);
        }
    else
        {
            $(".at6_cle2").stop().animate({"opacity":"0"},500);
            $(".at6_text2").stop().animate({"marginTop":"40px"},500);
        }
     if(po>=3300)
         {
            $(".at6_cle3").stop().animate({"opacity":"1"},500);
            $(".at6_text3").stop().animate({"marginTop":"0px"},500);
        }
    else
        {
            $(".at6_cle3").stop().animate({"opacity":"0"},500);
            $(".at6_text3").stop().animate({"marginTop":"40px"},500);
        }
    if(po>=4000)
         {
            $(".at7_div1").stop().animate({"opacity":"1"},500);
            $(".at7_div2").stop().animate({"opacity":"1"},700);
            $(".at7_div3").stop().animate({"opacity":"1"},900);
           
        }
    else
        {
            $(".at7_div1").stop().animate({"opacity":"0"});
            $(".at7_div2").stop().animate({"opacity":"0"});
            $(".at7_div3").stop().animate({"opacity":"0"});
        }
    if(po>=4500)
        {
            $(".at8_div").stop().animate({"opacity":"1"},500);
            $(".at8_div").stop().animate({"marginTop":"0px"},500);
        }
    else
        {
            $(".at8_div").stop().animate({"opacity":"0"},500);
            $(".at8_div").stop().animate({"marginTop":"-20px"},500);
        }
   
});
});



























































































































