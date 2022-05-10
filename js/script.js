$(document).ready(function(){


    // .wrap_topbar
    let lastScrollTop = 0,
    delta = 15;
    // let lastTime = new Date().getTime;

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


        // let recentTime = new Date().getTime,
        // changeScroll = Math.abs(lastScrollTop - recentScrollTop),
        // changeTime = Math.abs(recentTime - lastTime);
        // let recentSpeed = changeScroll / changeTime;
        // console.log(recentTime);
        // console.log(recentSpeed);
        // if(recentSpeed > 0){
        //     $(".wrap_sideindex").css({
        //         "right" : "-111px",
        //         "opacity" : "0",
        //     });
        // } else{
        //     $(".wrap_sideindex").css({
        //         "right" : "0",
        //         "opacity" : "1",
        //     });
        // }

        // lastTime = recentTime;



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

    // $.fn.scrollStopped = function(callback) {
    //     var that = this, $this = $(that);
    //     $this.scroll(function(ev) {
    //       clearTimeout($this.data('scrollTimeout'));
    //       $this.data('scrollTimeout', setTimeout(callback.bind(that), 250, ev));
    //     });
    //   };
       
    // $(window).scrollStopped(function(ev){
        
            
    // });

    // var lastOffset = $(window).scrollTop();
    // var lastDate = new Date().getTime();
    // $(window).scroll(function(e) {
    //     var delayInMs = e.timeStamp - lastDate;
    //     var offset = e.target.scrollTop - lastOffset;
    //     var speedInpxPerMs = offset / delayInMs;
    //     console.log(speedInpxPerMs);
    //     lastDate = e.timeStamp;
    //     lastOffset = e.target.scrollTop;
    // });

    // if(speedInpxPerMs >= 0){
    //     $(".wrap_sideindex").css({
    //         "right" : "-111px",
    //         "opacity" : "0",
    //     });
    // } else{
    //     $(".wrap_sideindex").css({
    //         "right" : "0",
    //         "opacity" : "1",
    //     });
    // };
});