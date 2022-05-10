$(document).ready(function(){


    // .wrap_topbar
    let lastScrollTop = 0,
    delta = 15;

    $(window).scroll(function(){

        let recentScrollTop = $(this).scrollTop();

        if(Math.abs(lastScrollTop - recentScrollTop) <= delta) return;

        if(recentScrollTop > lastScrollTop){
            $(".wrap_topbar").css({
                "top" : "-71px",
            });
        } else{
            $(".wrap_topbar").css({
                "top" : "0px",
            });
        }

        lastScrollTop = recentScrollTop;



    });







    // .wrap_section04

    $(".wrap_section04 > .section04 > .box_layout_section04 > .box_content > ul > .place").click(function(){

        let index = $(this).index();
        console.log(index);

        $(this).addClass("active");
        $(this).children(".box_text").css({
            "color" : "#FF5F15",
        });
        $(".wrap_section04 > .section04 > .bg_section04 > .map").eq(index).addClass("active");

        $(this).siblings().removeClass("active");
        $(this).siblings().children(".box_text").css({
            "color" : "#555",
        });
        $(".wrap_section04 > .section04 > .bg_section04 > .map").eq(index).siblings().removeClass("active");



    });

    
    // .wrap_sideindex

    $(window).scroll(function(){

        if($(this).scrollTop() == 0){
            $(".wrap_sideindex").css({
                "right" : "-111px",
                "opacity" : "0",
            });
        } else{
            $(".wrap_sideindex").css({
                "right" : "0",
                "opacity" : "1",
            });
        };

    });

    $.fn.scrollStopped = function(callback) {
        var that = this, $this = $(that);
        $this.scroll(function(ev) {
          clearTimeout($this.data('scrollTimeout'));
          $this.data('scrollTimeout', setTimeout(callback.bind(that), 250, ev));
        });
      };
       
    $(window).scrollStopped(function(ev){
        
            
    });
    

});