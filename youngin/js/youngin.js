$(function(){ 
    //인기검색어 롤
    function roll(){
        $('header nav .search-t .roll ul').animate({
            'marginTop':-45
        },function(){
             $('header nav .search-t .roll ul li').eq(0).appendTo('header nav .search-t .roll ul');
            $('header nav .search-t .roll ul').css('marginTop',0);
        });
    }
    roll()
    play=setInterval(roll,2000);
      $('header nav .search-t .roll ul').on({
          mouseenter:function(){
              clearInterval(play)
          },
          mouseleave:function(){
              clearInterval(play)
              play=setInterval(roll,2000)
          }
      })
//인기검색어 버튼 조작
    $('header nav .search-t button').click(function(){
        if($(this).attr('id')=='up'){
           $('header nav .search-t .roll ul').stop().animate({
            'marginTop':-45
          },function(){
               $('header nav .search-t .roll ul li').eq(0).appendTo('header nav .search-t .roll ul');
              $('header nav .search-t .roll ul').css('marginTop',0);
          })
       }else{
         $('header nav .search-t .roll ul').css('margin-top',-45);
        $('header nav .search-t .roll ul li:last-child').prependTo('header nav .search-t .roll ul');
         $('header nav .search-t .roll ul').stop().animate({
             'margin-top':0
         })
       }

    })

//인기검색어 버튼 자동 플레이

    $('.search-t .button .prev').on({
          mouseenter:function(){
              clearInterval(play)
          },
          mouseleave:function(){
              clearInterval(play)
              play=setInterval(roll,2000)
          }
      })


    
 //팝업창 자동 플레이

    function pop(){
      var page=$('.sec2 .popup .cont ul li').eq(1).data('page');
      $('.sec2 .popup .control .page .current').text(page);
//      console.log(page);
      $('.sec2 .popup .cont ul').animate({
          'marginLeft':-340
      },function(){
          $('.sec2 .popup .cont ul li').eq(0).appendTo('.sec2 .popup .cont ul');
          $('.sec2 .popup .cont ul').css('marginLeft',0);
      })
    }
    move=setInterval(pop,2000);
    $('.sec2 .popup .control .page .total').text($('.sec2 .popup .cont ul li').length);

    //팝업창 재생 정지
    $('.sec2 .popup .control .pas .pause').click(function(e){
        e.preventDefault();
        $('.sec2 .popup .control .pas .pause').css('display','none');
        $('.sec2 .popup .control .pas .play').css('display','block');
        clearInterval(move);
    })

     $('.sec2 .popup .control .pas .play').click(function(e){
        e.preventDefault();
        $('.sec2 .popup .control .pas .play').css('display','none');
        $('.sec2 .popup .control .pas .pause').css('display','block');
        move=setInterval(pop,2000);
    })

    //팝업창 옆으로 넘기기
    
    $('.sec2 .popup .control button').click(function(e){
        var page=$('.sec2 .popup .cont ul li').eq(1).data('page');
            $('.sec2 .popup .control .page .current').text(page);
        if($(this).attr('id')=='prev'){
        $('.sec2 .popup .cont ul').animate({
            'marginLeft':-340
                
        },function(){
             $('.sec2 .popup .cont ul li').eq(0).appendTo('.sec2 .popup .cont ul');
            $('.sec2 .popup .cont ul').css('marginLeft',0);
        })
        }else{
           $('.sec2 .popup .cont ul').css('margin-left',-340);
            $('.sec2 .popup .cont ul li:last-child').prependTo('.sec2 .popup .cont ul');
            $('.sec2 .popup .cont ul').stop().animate({
                'margin-left':0
            })
        }
    })

    //버튼 정지
      $('.sec2 .popup .control button').on({
          mouseenter:function(){
              clearInterval(move)
          },
          mouseleave:function(){
              clearInterval(play)
             move=setInterval(pop,2000)
          }
      })
    
    

//베스트 대출 클레스

   $('.sec3 .list li').click(function(e){
        e.preventDefault();
         $('.sec3 .list li').removeClass('on');
        $(this).addClass('on');

    })


    //탭메뉴
    $('header nav ul li a').on({
         mouseenter:function(){
        $('header nav ul li a .hide >ul').css('display','block');
        $('header nav .back').css('display','block'); 
         }
    })
      
   
    
    $('header nav ul li a .hide >ul').on({
       mouseleave:function(){
        $('header nav ul li a .hide >ul').css('display','none');
        $('header nav .back').css('display','none');
       }
    })
    
    
    //블로그 페이스북
    
    $('.sec2 .sns .snsT li a').click(function(e){
        e.preventDefault();
        
        $('.sec2 .sns .snsT li a').removeClass('on');
        $(this).addClass('on');
    })
    
    $('.sec2 .sns .snsT .blog').click(function(){
        $('.sec2 .sns .cont .view').hide();
        $('.blog-w').show();
    })
    $('.sec2 .sns .snsT .facebook').click(function(){
        $('.sec2 .sns .cont .view').hide();
        $('.facebook-w').show();
    })
    
    
    
    //sec1 탭메뉴
  var $libObj = $(".libwrap");
   var $box=$('.sec1 .libwrap .box');
   var num=0;
   var animateTime=500;
   var timer=0;
   var length=$box.children().length;//3
   var setTime=3000;
   var set;
   var autoPlay = false;
      
   function libTabEv(){
        $box.find('.tab').find('.on').removeClass('on');
        $box.find('.text-box').removeClass('on');
        $box.find('.tab').find('a').off('click');
       
       var $thistab= $box.children('.on').find('.tab');
       
       //가운데 박스의 탭메뉴 클릭시
       $thistab.find('a').on('click',function(e){
                      
           var $this=$(this);
           var $cont=$($this.attr('href'));           
           $this.parent().addClass('on').siblings().removeClass('on');
           //탭에 해당되는 컨텐츠 보여주기
           $cont.addClass("on").siblings(".text-box").removeClass("on");
           return false;
       })
       
       //왼쪽, 오른쪽 탭메뉴 클릭시
       $box.children('.on').siblings().find('.tab').find('a').on('click',function(e){
           e.preventDefault();
        //    e.stopPropagation();
           var $this =$(this);
           num=$this.parent().index();//탭메뉴의 인덱스 저장
           console.log('몇번째?',$this.parents('.cont').parent().index());
           
           libSlide($this.parents('.cont').parent().index());//.box > li인덱스 보내기
           return false;
       })
       
       
       $thistab.children().eq(num).children('a').click();//왼쪽, 오른쪽의 탭메뉴 누를시 해당 탭의 컨텐츠 보여주기
       console.log('탭클릭함');

   }
            
   function libSlide(now){
       if(timer == 0){//스위치역할(슬라이드가 여러번 실행되지 않도록 막아주기) 
           timer = 1;//정지
           var move = $box.children().eq(0).width();//0번째의 넓이를 구한다.
           if(now == "prev" || now==0 ){//이전일때
                $box.addClass("prev");                
                $box.children(".on").removeClass("on").prev().addClass("on");               
                $box.prepend($box.children().eq(length-1).clone());
                $box.animate({"left":move+"px"},animateTime,function(){
                    $box.removeClass("prev");
                    $box.children().eq(length).remove();
                    $box.css("left",0);
                    timer=0;//실행
               })
           }else if(now == "next" || now==2 ){//다음일때
                    $box.addClass("next");
                    $box.children(".on").removeClass("on").next().addClass("on");
                    $box.append($box.children().eq(0).clone());
                    $box.animate({"left":"-"+move+"px"},animateTime,function(){
                    $box.removeClass("next");
                    $box.children().eq(0).remove();
                    $box.css("left",0);
                   timer =0;//실행
               })
           }
           libTabEv();
       }
   }

   $libObj.find(".btnPrev").click(function(e){
        stop();
        num = 0;
        libSlide("prev");
        playSlide();
        return false;
    });

    $libObj.find(".btnNext").click(function(e){
        stop();
        num = 0;
        libSlide("next");
        playSlide();
        return false;
    });

    $box.on({
        mouseover : function(){
            stopSlide();
        },
        mouseleave : function(){
            playSlide();
        }
    });

    function playSlide(){
        console.log('자동재생처리1');
        if(autoPlay){
            console.log('자동재생처리2');
            
            set = setInterval(function(){
                libSlide("next");
            },setTime);
        }
    }

    function stopSlide(){
        if(autoPlay) clearInterval(set);
    }

    //첫번째 세팅
    $box.children().eq(1).addClass("on");
    libTabEv();
    playSlide();
    console.log(typeof(playSlide));    
    // -- 도서관 바로가기 이벤트



   
   
//    $('.lisbox .tab a').click(function(e){
//        e.preventDefault();
//         $('.lisbox .tab li').removeClass('on');
//         $(this).parent('li').addClass('on');
//         var id=$(this).attr('href');
//         $('.text-box').removeClass('on');
//         $(id).addClass('on');
//    })
   
   //클릭시 스트롤 탑
    $('footer .fixTop').click(function(){
      $('html,body').stop().animate({
          'scrollTop':0
      })
    })
        
    $(window).scroll(function(){
        var po=$(window).scrollTop();
        if(po<110){
            $('footer .fixTop').stop().animate({
                'opacity':0
            })
        }else{
           $('footer .fixTop').stop().animate({
                'opacity':1
            }) 
        }
    })
   
    


})


function func(js) {
    ol1.style.display = "none";
    ol2.style.display = "none";
    ol3.style.display = "none";
    ol4.style.display = "none";
   
    
  switch (js) {
        case 1:
            ol1.style.display = "block";
            break;
        case 2:
           ol2.style.display = "block";
            break;
        case 3:
            ol3.style.display = "block";
            break;
        case 4:
            ol4.style.display = "block";
            break;

  }
}

