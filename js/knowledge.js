$(function(){
   $('.spa1').click(function(){
       $(this).addClass('bl').siblings().removeClass('bl')
       $(this).parents('.content').find('.law').show().siblings('.education').hide()
   })

   $('.spa2').click(function(){
    $(this).addClass('bl').siblings().removeClass('bl')
    $(this).parents('.content').find('.education').show().siblings('.law').hide()
})



})