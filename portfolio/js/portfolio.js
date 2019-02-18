//var timer=setInterval("move()",4000);
//function move(){
//    $(".pic ul li").eq(0).appendTo(".pic ul");
//}   
$(function(){
    
    
//    $('.skillbar').each(function(){
//	$(this).find('.skillbar-bar').animate({
//		width:$(this).attr('data-percent')
//	},2000);
//});
    
//    $('#sec4 .contents>div .pic>div .pic-frame').on({
//        'mouseover':function(){
//            $(this).find('img').css({
//               trasform:translateY('88px')
//            });
//                console.log("오버");
//        },
//        'mouseleave':function(){
//           $(this).find('img').css({
//                trasform:translateY('0px')
//            });  
//        }
//        
//    });

    $('header nav ul li a').on('click',function(e){
        e.preventDefault();
        id=$(this).attr('href');
        sectonTop=$(id).offset().top;
        $('body,html').stop().animate({
            scrollTop:sectonTop
        })
    })
    
   
    $(window).on('scroll',function(){
    var scrollTop=$(window).scrollTop();
        var sec3=Math.floor($('#sec3').offset().top);
        var sec4=Math.floor($('#sec4').offset().top);
        
    if(scrollTop>=sec3 && scrollTop<sec4){
        console.log("높이");
            $('#sec3 .gaze .skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width:$(this).attr('data-percent')
            },1800);
        });  
    }
        else{
//             console.log("아님");
//               $('#sec3 .gaze .skillbar').each(function(){
//            $(this).find('.skillbar-bar').animate({
//                width:0
//            });
//        });
          
        }
    
    });
    var sec2=$('#sec2').offset().top;
    
    $('#down').click(function(){
        $('body,html').stop().animate({
            scrollTop:sec2
        })
    })
    
    
    $('#sec4 .pic-frame img').on({
        mouseover:function(){
            var frameW = $(this).width();
            var frameH = $(this).parent('.pic-frame').outerHeight();
            var imgH = $(this).height();
            var bottomF = imgH-frameH;
            console.log('오버');
            $(this).stop().animate({
                marginTop:-bottomF,
            },1000);
        },
        mouseleave:function(){
            $(this).stop().animate({
                marginTop:0,
            },1000);
        },
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});

































































