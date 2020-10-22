$(()=>{
	$('header').load('public.min.html  .top');
	$('nav').load('public.min.html  .ulP');
	$('.ema').load('public.min.html  .emacon');
	$('footer').load('public.min.html  .foot');
	$('footer').load('public.min.html  .foot1');
	$('.push').load('public.min.html .push1');
})
$(function(){
    let storage = window.localStorage;
    let storage_str = storage.getItem('carts');
    let storage_obj = convertStrToObj(storage_str);
    if(storage_str){
        $('.carP').append(`
        <ul class="ulB">
        <li>图片</li>
        <li>产品</li>
        <li>价格</li>
        <li>数量</li>
        <li>总价</li>
        <li class="delL">删除</li>
        </ul>
        `);
      
      var numB = 0;
      for(let key in storage_obj){   
        let good = storage_obj[key];
        numB+=parseInt(good.num);
        $('.carP').append(`
        <ul>
            <li><img src="../${good.src}" /></li>
            <li>${good.name}</li>
            <li>${good.price}</li>
            <li>${good.num}</li>
            <li class="total">${good.price * good.num}</li>
           </ul>
        `);
        }
        }else{
            $('.carP').append (`<ul  class="ulA">
                <li>购物车无商品，请先去选择商品</li>
            </ul>
            <a href="#">返回去购物</a>`)
        }
    $('.proNum').html(numB);
    $('.carP').on('click','.delL',function(){
        delete storage_obj[id];
        storage.setItem('carts',JSON.stringify(storage_obj));
        $(this).parent().remove();
    })
})
function convertStrToObj(str){
    if(!str){
        return {};
    }else{
        return JSON.parse(str);
    }
}
