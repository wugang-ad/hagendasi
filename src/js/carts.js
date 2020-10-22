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
        if(!storage.getItem('carts') == '{}'){
             $('.carP').append(`
            <ul class="ulB">
            <li>图片</li>
            <li>产品</li>
            <li>价格</li>
            <li>数量</li>
            <li>总价</li>
            <li>删除</li>
            </ul>
            `);
        }   
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
                <li class="delL">删除</li>
               </ul>
            `);
            $('.carP ul').on('click','.delL',function(){
                var src = $(this).parent().children().first().find('img').attr('src').substring(3);
                // alert(src);
                // console.log(numB);
                $(this).parent().remove();
                delete storage_obj[src];
                storage.setItem('carts',JSON.stringify(storage_obj));
                var numB =0;
                for(let key in storage_obj){   
                    let good = storage_obj[key];
                    numB+=parseInt(good.num);
                }
                $('.proNum').html(numB);
                console.log(storage.getItem('carts'));
                if(storage.getItem('carts') == '{}'){
                        $('.carP').html(`
                        <p><span><img src="../img/carticon.png" alt=""><b>外送产品</b><i class="proNum">0</i>  </span><span><img src="../img/carticon.png" alt=""><b>礼券</b><i>0</i> </span></p>
                        <ul  class="ulA">
                            <li>购物车无商品，请先去选择商品</li>
                        </ul>
                        <a href="#">返回去购物</a>`)
                }
            })
        }
    }else{
        $('.carP').append (`<ul  class="ulA">
            <li>购物车无商品，请先去选择商品</li>
            </ul>
            <a href="#">返回去购物</a>`)
    }
    $('.proNum').html(numB);
    
})
function convertStrToObj(str){
    if(!str){
        return {};
    }else{
        return JSON.parse(str);
    }
}
