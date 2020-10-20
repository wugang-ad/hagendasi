$(function(){
    let storage = window.localStorage;
    let storage_str = storage.getItem('carts');
    if(storage_str){
        $('.carP').append(`
        <ul class="ulB">
        <li>图片</li>
        <li>产品</li>
        <li>价格</li>
        <li>数量</li>
        <li>总价</li>
        </ul>
        `);
      let storage_obj = convertStrToObj(storage_str);
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
})
function convertStrToObj(str){
    if(!str){
        return {};
    }else{
        return JSON.parse(str);
    }
}
$(function(){
    let storage = window.localStorage;
    let storage_str = storage.getItem('carts');
    if(storage_str){
      let storage_obj = convertStrToObj(storage_str);
      for(let key in storage_obj){   
        let good = storage_obj[key];
        $('.nav2').append(`
        <ul>
            <li><img src="${good.src}" />数量：${good.num}</li>
        </ul>
        `);
        }
        }else{
            $('.nav2').append (`
			<a href="#"></a>`)
        }
})
