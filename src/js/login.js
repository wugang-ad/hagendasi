$('.logT2').on('click',function(){
    $(this).siblings().removeClass('logT1').addClass('logT2');
    $(this).removeClass('logT2').addClass('logT1');
    // $(this).parent().siblings().hasClass('eml_2').css('display','none');
    // $(this).parent().siblings().hasClass('eml_1').css('display','block');

    $('.eml_1').css('display','flex');
    $('.eml_2').css('display','none');
    // $(this).parent().siblings().hasClass('eml_1').removeClass('eml_1').addClass('eml_2');
})