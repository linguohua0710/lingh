/**
 * Created by admin on 2017/5/20.
 */
$(document).ready(function(){

    $(".avatar a:first").mouseenter(function(){
        $(".avatar span:first").slideUp(1000)
    })
    $(".avatar a:first").mouseleave(function(){
        $(".avatar span:first").slideDown(1000)
    })
})



