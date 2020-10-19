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