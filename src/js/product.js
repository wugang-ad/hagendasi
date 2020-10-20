$(()=>{
	$('header').load('../pages/public.min.html  .top');
	$('nav').load('public.min.html  .ulP');
	$('.ema').load('public.min.html  .emacon');
	$('footer').load('public.min.html  .foot');
	$('footer').load('public.min.html  .foot1');
})
$(function() {
	var reg = new RegExp("(^|&)name=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) {
		var imgU = unescape(r[2]);
		$('.porB').append (`<div class="porL">
		<div class="porI">
			<div class="zhezhao"></div>
			<div class="Pimg"><img src="../${imgU}" alt=""></div>
			<div class="check"><img src="../${imgU}" alt=""></div> 
		</div>
	</div>
	<div class="porR">
		<h3>花艺爱浓</h3>
		<h4>Blossom Of Love</h4>
		<p>盛开的红色花朵，酸甜的草莓口味，配上香醇奶油，这一刻“莓”好食光带着祝福与真心，赠与挚爱的人。</p>
		<hr>
		<p>口味：香草味；草莓</p>
		<p>价格：<span>¥ 298 </span></p>
		<p>规格：<input type="button" value="600克 2-4人左右"><input type="button" value="1.1千克 5-8人左右"><span></span><span></span><span></span><input type="button" value="1.8千克 8人以上"></p>   
		<p>数量：<span class ="spanJ">-</span><input type="text" value="2"class ="inputJA"><span class ="spanA">+</span></p>
		<p class="buyP"><input type="button" value="立即订购"><input type="button" value="加入购物车"></p>
		<p><a href=""></a><a href=""></a><a href=""></a><a href=""></a><a href=""></a><a href="" id="moreA"></a>更多<span>0</span></p>
		<p><img src="../img/icon-xi.jpg" alt="">收藏商品</p>
		<div class="more">
			<h6>分享到</h6>
			<ul>
				<li><a href="">QQ空间</a><a href="">新浪微博</a></li>
				<li><a href="">百度</a><a href="">人人网</a></li>
				<li><a href="">腾讯微博</a><a href="">开心网</a></li>
				<li><a href="">淘宝</a><a href="">豆瓣网</a></li>
				<li><a href="">腾讯朋友</a><a href="">照片</a></li>
				<li><a href="">好友网</a><a href="">腾讯新闻</a></li>
				<li><a href="">淘宝</a><a href="">百度贴吧</a></li>
				<li><a href="">小白</a><a href="">飞信</a></li>
			</ul>
			<h6><a href="">更多...</a></h6>
		</div>
	</div>`)
	var inputV =$('.inputJA').attr("value");
		$('.spanJ').click(function(){
			if(inputV <=1){
				$('.inputJA').attr('value','1');
			}else{
				inputV--;
				$('.inputJA').attr('value',inputV);
			}
		})
		$('.spanA').click(function(){
				inputV++;
				$('.inputJA').attr('value', inputV);
		})
		$('.buyP:last').click(function(){
				let storage = window.localStorage;
                let storage_str = storage.getItem('carts') ? storage.getItem('carts') : '';
				// let storage_obj = convertStrToObj(storage_str);
				let storage_obj = convertStrToObj(storage_str);
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
                if(imgU in storage_obj){
                    storage_obj[imgU].num =$('.inputJA').attr("value");
                }else{
                    storage_obj[imgU] = {
                        "name" : imgU,
                        "price" : 289,
                        "src" : imgU,
                        "num" : $('.inputJA').attr("value")
                    }
                }
                //创建storage
                storage.setItem('carts',JSON.stringify(storage_obj));

                //修改购物车按钮中的 商品数量
                // let num = parseInt(/(\d+)/.exec(that.buy.value)[1]);
                // that.buy.value = `购物车(${++ num})`;
		})
		function convertStrToObj(str){
			if(!str){
				return {};
			}else{
				return JSON.parse(str);
			}
		}
    }
})


$('#moreA').hover(
    function(){
        $('.more').css("display" ,"block");
    }
)
$('.more').hover(
    function(){
        $('.more').css("display" ,"block");
    }, function(){
        $('.more').css("display" ,"none");
    }
)

$(function(){
	$(".porI").mouseover(function(){
		// $(this).find("img").css("border-color","#FF0000").parent().siblings().find("img").css("border-color","#ccc");
		
		//attr设置或返回被选元素的属性值。
		
		// $("ol li").find("img").attr("src",$(this).find("img").attr("src"))
		$(".check").find("img").attr("src",$(".Pimg").find("img").attr("src"))				
	});
	//bind 为每个匹配元素的特定事件绑定事件处理函数。
	//width() 取得第一个匹配元素当前计算的宽度值（px）。
	$(".zhezhao").bind({
		mouseover:function(){
			$(".check").css("display","block");
			// $(".datu").css("display","block");
		},
		mouseout:function(){
            $(".check").css("display","none");
		},
		mousemove:function(e){
			var left=e.offsetX-$(".check").width()/2;
			var top=e.offsetY-$(".check").height()/2;
			
			if(left<0){
				left=0
			}
			if(left>$(".zhezhao").width()-$(".check").width()){
				left=$(".zhezhao").width()-$(".check").width();
				
			}
			if(top<0){
				top=0;	
			}	
			if(top>$(".zhezhao").height()-$(".check").height()){
				top=$(".zhezhao").height()-$(".check").height()	
			}	
			
			$(".check").css("top",top+"px");
			$(".check").css("left",left+"px")
			
			var preX=left/($(".zhezhao").width()-$(".check").width());
			var preY=top/($(".zhezhao").height()-$(".check").height());
			
			$(".check img").css("left",-preX*($(".check img").width()-$(".check").width())+"px");
			$(".check img").css("top",-preY*($(".check img").height()-$(".check").height())+"px");
		}	
	})		
})


