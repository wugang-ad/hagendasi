$(function(){	
    let storage = window.localStorage;
    let storage_str = storage.getItem('carts') ? storage.getItem('carts') : '';
	let storage_obj = convertStrToObj1(storage_str);
	if(storage_str){
		for(let key in storage_obj){   
			let good = storage_obj1[key];
			$('.nav2').append(`
			<ul>
				<li><img src="${good.src}" />数量：${good.num}</li>
			</ul>
		 	`);
		}
	}else{
		$('.nav2').append (`
		 <a href="#">没有产品</a>`)
    }
    function convertStrToObj1(str){
            if(!str){
                return {};
            }else{
                return JSON.parse(str);
            }
        }
})

        