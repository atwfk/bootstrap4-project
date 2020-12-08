$(function(){
    var winH   = $(window).height(),
        upperH = $(".upper-bar").innerHeight(),
        navH   = $("nav").innerHeight();
    $(".slider, .carousel-item").height(winH - (upperH + navH))   
    $(".featured-work ul li").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
        if($(this).data("class") === "all") {
            $(".shuffle-images .col-sm").css({"opacity":"1"});
        }
        else {
            $(".shuffle-images .col-sm").css({"opacity":"0.3"});
            $($(this).data("class")).parent().css({"opacity":"1"});
        }
    }); 
});