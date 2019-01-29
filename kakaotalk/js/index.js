$(function(){
    $('#intro .intro').delay(1000).fadeOut(500);

    $('#intro .phone >.talk ul li').eq(0).delay(2000).fadeIn();
    $('#intro .phone >.talk ul li').eq(1).delay(3000).fadeIn();
    $('#intro .phone >.talk ul li').eq(2).delay(4000).fadeIn();
    $('#intro .phone >.talk ul li').eq(3).delay(5000).fadeIn();
    $('#intro .phone >.talk ul li').eq(4).delay(6000).fadeIn();
    $('#intro .phone .select a').delay(8000).fadeIn();


    $('.popup').fadeOut();

    $('#intro .talk .wrap .phone .select .more').click(function(){
        $('.popup').fadeIn();
    });
    $('#intro .popup .close').click(function(){
        $('.popup').fadeOut();
    });
    
    var swiper4 = new Swiper('.slide3 .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,

      },
      navigation: {
        nextEl: '.slide3 .swiper-button-next',
        prevEl: '.slide3 .swiper-button-prev',
      },

    });
    
    
});

window.addEventListener("load",function(){
    var i=0;
    var text="너 라이브톡 몰라??";
    
function typing(){
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,100);
    }
}

    setTimeout(function(){
        typing();
    },7000);
});
