
$('nav').on('mouseenter','.nav2',function(){
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
            $('.nav2').append(`
			<a href="#">您的购物车还没有产品</a>`)
    }
})
$('nav').on('mouseleave','.nav2',function(){
	$('.nav2').html(`<b>全部产品</b>`);
})

        