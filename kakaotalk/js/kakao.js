$(function(){

//    index=0;
//    $('.window').on('mousewheel',function(e,delta){
//       windowH=$('.window').height();
//       if(delta>0){
//         index--;
//         if(index<0){index=0;}
//         console.log('이전', index);
//       }else if(delta<0){
//         index++;
//         if(index>6){index=6;}
//         console.log('다음', index);
//       }
//       $('html').stop().animate({
//         scrollTop:(windowH*index)
//       },1000)
//
    
             
    var sectionTopValue=0;
    $(window).resize(function(){
        w=$(window).width();
                                
        if(w>767){
            //마우스 휠
            sectionTopValue=70;       
            $('.window').on('mousewheel',function(e,delta){
                if(delta>0){
                    if($(this).prev().is('.window')){
                        var prev=$(this).prev().offset().top;
                        $('html').stop().animate({
                           scrollTop:prev-70
                       },1000)
                   }
               }else if(delta<0){
                    if($(this).next().is('.window')){
                        var next=$(this).next().offset().top;
                        $('html').stop().animate({
                            scrollTop:next-70
                        },1000)
                    }
               }
           })
        }else{
            sectionTopValue=50;                      
        }
        
        //스파이 스크롤
        var windowH=$('.window').height();
        $(window).on('scroll',function(){
            var scrollTop=$(window).scrollTop()+sectionTopValue;            
            var sec1=Math.floor($('#sec1').offset().top);
            var sec2=Math.floor($('#sec2').offset().top);
            var sec3=Math.floor($('#sec3').offset().top);
            var sec4=Math.floor($('#sec4').offset().top);
//            console.log(scrollTop, sec1, sec2, sec3, sec4);  
            var i=0;
            if(scrollTop>=0 && scrollTop<sec2){
                i=0;
            }else if(scrollTop>=sec2 && scrollTop<sec3){
                i=1;
            }else if(scrollTop>=sec3 && scrollTop<sec4){
                i=2;
            }else if(scrollTop>=sec4){
                i=3;
            }
//            console.log(i);  
            $('header nav ul li a').removeClass('active');
            $('header nav ul li a').eq(i).addClass('active');

            //샵검색에 도달시 애니메이션 추가
            if(scrollTop>=3*windowH && scrollTop<4*windowH){
//                          console.log('샵검색영역');
              $('.at3 .emo').addClass('ani-move');
            }else{
//                          console.log('샵검색영역아님');
              $('.at3 .emo').removeClass('ani-move');
            }
        })
    }).resize();
        
    
    //메뉴클릭
    $('header nav ul li a').on('click',function(e){
      e.preventDefault();
      $('header nav ul li a').removeClass('active');
      $(this).addClass('active');
      id=$(this).attr('href');
      sectionTop=$(id).offset().top;      
      $('html, body').stop().animate({
        scrollTop:sectionTop-sectionTopValue
      })           
    });
        
    
    
    
    
    



//#sec1 팝업메뉴
  var sec1_obj={
    title:["무료채팅", "PC버전", "보이스&페이스톡", "오픈채팅"],
    imgSrc:["talkpc01_01_180904", "talkpc02_01", "talkpc03_01", "talkpc04_01_180904"],
    contents:[
      "언제 어디서나, 1년 365일, 몇 명과 함께하든 무료입니다.<br>가입과 로그인 없이 전화번호만 있으면 실시간 그룹채팅 및 1:1 채팅을 즐길 수 있고, 사진, 동영상, 연락처 등의 멀티미디어도 간편하게 주고 받을 수 있어요.",
      "카카오톡의 편리한 기능을 PC에서도 그대로 <br> 다양한 파일을 최대 300MB까지 전송하는 것은 물론, 백업/복원, 무료통화도 가능한 PC버전 (Windows, MacOS 지원)을 사용해보세요.",
      "친구와 실시간으로 음성 또는 영상으로 통화할 수 있습니다.<br>캐릭터 음성 필터는 물론 뽀샤시한 영상 필터로 색다른 통화를 즐겨보세요.",
      "친구 추가없이 간편하게 대화하는 카카오톡 오픈채팅<br>관심사로 모여 대화하고 명함으로도 활용해보세요."
    ]
  }

  $('.sec1 ul a').on('click',function(e){
      e.preventDefault();
      var i=$('.sec1 ul a').index(this);
      // console.log(i);
      $('.sec1-popup h3').text(sec1_obj.title[i]);
      $('.sec1-popup img').attr('src','img/'+sec1_obj.imgSrc[i]+'.jpg');
      $('.sec1-popup p').html(sec1_obj.contents[i]);
      $('.sec1-popup').fadeIn();
    });
  $('.sec1-popup .close').on('click',function(e){
    e.preventDefault();
    $('.sec1-popup').fadeOut();
  });

    $('.sec1 ul li').hover(function(){
    var sec1 = $(this).find('img').attr('src').replace('-1','-2');
        $(this).find('img').attr('src',sec1);
    },function(){
        var sec1 = $(this).find('img').attr('src').replace('-2','-1');
        $(this).find('img').attr('src',sec1);
    })








    //at1

    //동적으로 요소가 생성되었을 경우 컨트롤하는 방법
    $('.at1 .icon-rank').on({
        'mouseover':function(){
            console.log('바꾸기');
            var src=$(this).find('img').attr('src').replace('png','gif');
            $(this).find('img').attr('src',src);
        },
        'mouseleave':function(){
          console.log('복귀');
            var src=$(this).find('img').attr('src').replace('gif','png');
            $(this).find('img').attr('src',src);
        }
    },'.iconW') 

    $("#sec2 .style_list li").on({
          'mouseover':function(){
            var src=$(this).find('img').attr('src').replace('png','gif');
            $(this).find('img').attr('src',src);
        },
        'mouseleave':function(){
            var src=$(this).find('img').attr('src').replace('gif','png');
            $(this).find('img').attr('src',src);
        }

    });
















    //#at3
    $('.at3 .slide').slideUp();

    $('.at3 .hash').click(function(){

        $('.at3 .slide').slideToggle();
        $('.at3 p').toggleClass('opacity');
        $(this).toggleClass('left');
        $('.at3 .btn-search').toggleClass('index');
        $('.at3 .gray i').toggleClass('rotate');
        $('div',this).toggleClass('shake-constant');
    });






    //#at4

    var flag=true;
    $('.at4 .slide button').click(function(){
       if(flag){
           $('.at4 .slide').removeClass('close');
           $('.at4 .slide').addClass('open');

            $('.at4 .slide button .arrow-top-l').addClass('arrow');

            $('.at4 .slide button .arrow-bottom-l').addClass('arrow');

           flag=false;

       }else{
           $('.at4 .slide').removeClass('open');
           $('.at4 .slide').addClass('close');
               $('.at4 .slide button .arrow-top-l').removeClass('arrow');

            $('.at4 .slide button .arrow-bottom-l').removeClass('arrow');
           flag=true;
       }




    });




    //#sec4 롤링메뉴
    function move(){
        $('.ani .rolling ul').animate({
            'margin-top':-60
        },function(){
            $('.ani .rolling ul li').eq(0).appendTo('.ani .rolling ul');
            $('.ani .rolling ul').css('margin-top',0);
        });
    }
    move();
    play=setInterval(move,2000);
     $('.ani .rolling ul').on({
         mouseenter:function(){
             clearInterval(play)
         },
         mouseleave:function(){
             clearInterval(play)
             play=setInterval(move,2000)
         }
     });
});

//intro

//swiper
$(function(){

    var swiper1 = new Swiper('.icon-rank .swiper-container', {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 5,
      loop: true,
      // loopFillGroupWithBlank: true,

      navigation: {
        nextEl: '.icon-rank .swiper-button-next',
        prevEl: '.icon-rank .swiper-button-prev',
      },
        breakpoints:{
           1024:{
               slidesPerView: 3,
               spaceBetween: 10,
               slidesPerGroup:3,
           }
        },
    });

    var swiper2 = new Swiper('.slide .swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.slide .swiper-pagination',
        clickable: true,
      },
         breakpoints:{
            1024:{
                slidesPerView: 1,
                spaceBetween: 10,
                
               
            }
        },
        
    });

     var swiper3 = new Swiper('.slide2 .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.slide2 .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slide2 .swiper-button-next',
        prevEl: '.slide2 .swiper-button-prev',
      },
        
    });


   });
