$(function () {

	//遊び心
	console.log("\n　　　　. ＼：／\n　　  ・･･･☆･･･・    Welcome to\n　　. ⋀,,⋀. ∩.＼        TENTO-TECH\n　　(*・ω・)/　\n　　.(つ　 ﾉ \n　　.しーＪ\n\n");

	$('.menu_list > ul > li').on("click", function(){
		var link = $(this).attr('linkclass');
    	$('.top').addClass( 'remove_top' );
    	$('.' + link).addClass( 'show_section' );
	});

	$('.cancel').on("click", function(){
		var removelink = $(this).attr('remove');
    	$('.top').removeClass( 'remove_top' );
    	$('.' + removelink).removeClass( 'show_section' );
	});

	$('.about-text > .more').on("click", function(){
		if($(this).hasClass('moreview') == false ){
			$(this).addClass('moreview');
			$(this).siblings().addClass('removeview');
			$(this).css({cursor: 'default'});
		}
	});

	$('.close').on("click", function(e){
			var parentEl = $(this).closest('.box');
			parentEl.removeClass('moreview');
			parentEl.addClass('default');
			parentEl.siblings().removeClass('removeview');
			parentEl.css({cursor: 'pointer'});
			e.stopPropagation();
	});

	$(window).on("orientationchange resize", function() {
		if(Math.abs(window.orientation) === 90) {
    		alert("横画面で見るとレイアウトが崩れる可能性があります"); 
    	}
    });

	setTimeout(function(){
		$('.loading-content').addClass('stert');
		setTimeout(function(){
			$('.loading-content').addClass('end');
			setTimeout(function(){
				$('.loading-content').remove();
				$('.main-content').css({display:'block'});
				setTimeout(function(){
					$('.main-content').addClass('loaded');
				},100);
			},600);
		},5000);
	},500);
});
