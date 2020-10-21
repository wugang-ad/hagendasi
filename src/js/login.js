$(()=>{
	$('header').load('public.min.html  .top');
	$('nav').load('public.min.html  .ulP');
	$('.ema').load('public.min.html  .emacon');
	$('footer').load('public.min.html  .foot');
	$('footer').load('public.min.html  .foot1');
	$('.push').load('public.min.html .push1');
})
$('.logT').on('click','b',function(){
    $(this).siblings().removeClass('logT1').addClass('logT2');
    $(this).removeClass('logT2').addClass('logT1');
    $('.eml_2').css('display','none');
    $('.eml_1').css('display','flex');
    $('.eml_1').removeClass('eml_1').addClass('eml_2');
    $('.eml_3').removeClass('eml_2 ').addClass('eml_1');
    $('.eml_1').removeClass('eml_3');
    $('.eml_2').addClass('eml_3');
})
let arr = [false,false,false];
// let arr = [true,true,true];
$(".logL>p:eq(0)>input").blur(function(){
    let val = $(this).val();
    let str = /^\d{11}$/;
    console.log(str.test(val));
    if(!str.test(val)){
        $(".logL>p:eq(0)>span").text("手机输入有误！")
    }else{
        arr[1]= true;
    }
})
$(".logL>p:eq(1)>input").blur(function(){
    let val = $(this).val();
    let str = /^[0-9A-Z]{6,12}$/;
    console.log(str.test(val));
    if(!str.test(val)){
        $(".logL>p:eq(1)>span").text("密码需6到12位数字或字母！")
    }else{
        arr[0]= true;
    }
})
var verifyCode = new GVerify("v_container");
document.getElementById("code_input").onblur = function(){
  var res = verifyCode.validate(document.getElementById("code_input").value);
  if(!res){
    alert("验证错误");
    }else{
        arr[2]= true;
    }
}
$(".logB2").click(function(){
    if(arr.indexOf(false)==-1){
        let cookie_str = getCookie('users');
        let cookie_obj = convertStrToObj(cookie_str);
        //对象中检测uname是否存在
        if(uname in cookie_obj){
            //判断密码是否正确
            if(upwd === cookie_obj[uname]){
                alert('登录成功');
                location.href = 'product.html';
            }else{
                alert('密码错误');
            }
        }else{
            alert('用户名不存在');
        }
    }else{
        alert('请完善信息');
    }
})
$(".logB1").click(function(){
    if(arr.indexOf(false)==-1){
        let val = $('.logL>p:eq(0)>input').val();
       let cookie_str = getCookie('users');
       let cookie_obj = convertStrToObj(cookie_str);
       if(val in cookie_obj){
            alert('用户名已存在！'); 
            return;
       }else{
        //    cookie_obj[uname] = upwd;   
       }
       createCookie('users',JSON.stringify(cookie_obj),{expires : 1});
       alert('注册成功！');
    }else{
        alert('请完善信息！');
    }
})