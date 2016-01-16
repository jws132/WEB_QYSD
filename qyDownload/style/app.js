$(function(){
	$('#qyDownload').fullpage({
	'verticalCentered': false,
	'sectionsColor': ['#14a9e1','#0b9ed4','#0b9ed4','#0b9ed4','#0b9ed4'],
	'anchors': ['page1', 'page2', 'page3','page4','page5'],
	afterRender: function(){
        $('.inner .p1').each(function(){
			var $arr = $(this).attr('rel').split(',');
			$(this).animate({
					left: $arr[0] + 'px',
					top: $arr[1] + 'px'
					
			}, 500);
		}); 
	},
	afterLoad: function(anchorLink, index){
		if(index==1 || index==2 || index==3 || index==4 || index==5){
			$('.inner .p'+index).each(function(){
				var $arr = $(this).attr('rel').split(',');
				$(this).animate({
						left: $arr[0] + 'px',
						top: $arr[1] + 'px'
						
				}, 500);
			});
			if(index==2){
				$('.p2-home').animate({ bottom: '20px'});
				$('.p2-ren').animate({ right: '0px'},1000);
			}
			if(index==3){
				$('.section3 .p-icon').each(function(){
						var $arr = $(this).attr('rel').split(',');
						$(this).animate({
								left: $arr[0] + 'px',
								bottom: $arr[1] + 'px',
								opacity:1,
								
						}, 1000);
					});
		     	$('.p3-d').animate({ bottom: '0px'},300);
			    $('.p3-ren').animate({ right: '120px'},500);
			    $('.section4 .p-icon').animate({ opacity: '0'},500);
			}
			if(index==4){
				$('.p4-bg').animate({ opacity: '1'},500);  
                $('.p4-ren').animate({ opacity: '1'},500);  
				$('.p4-x').animate({ width: '512px'},500);  
				$('.section4 .p-icon').each(function(){
					$(this).animate({ opacity: '1'},500);  
				})		 
			}
			if(index==5){
			     $('.p5-y').animate({ width: '647px'},300);
				 $('.p5-icon-1').animate({bottom:'340px',left:'10px',opacity:'1'},1000);
				 $('.section4 .p-icon').animate({ opacity: '0'},500);
				 setTimeout(function () {
				      $('.section5 .p-yimg').each(function(){
					      $(this).animate({opacity:'1'}, 500);
					  });
				 },1000)
				  setTimeout(function () {
				      $('.p5-ren').animate({ opacity: '1'},500);  
				 },1000)
			}
		}

	},
	'onLeave': function(index, direction){
		if(index==1 || index==2 || index==3 || index==4 || index==5){
			$('.inner .p'+index).each(function(){
				var $arr = $(this).attr('rel').split(',');
				$(this).animate({
						left: $arr[2] + 'px',
						top: $arr[3] + 'px'
						
				}, 500);
			});
			if(index==2){
			    $('.p2-home').animate({ bottom: '-279px'});
			    $('.p2-ren').animate({ right: '-550px'},1000);
			}
			if(index==3){
				$('.section3 .p-icon').each(function(){
						var $arr = $(this).attr('rel').split(',');
						$(this).animate({
								left: $arr[2] + 'px',
								bottom: $arr[3] + 'px'
								
						}, 500);
					});
			    $('.p3-d').animate({ bottom: '-485px'},1000);
			    $('.p3-ren').animate({ right: '-550px'},500);
			}
			if(index==4){
                  $('.p4-bg').animate({ opacity: '0'},500);  
	              $('.p4-ren').animate({ opacity: '0'},500);  
				  $('.p4-x').animate({ width: '0px'},500); 
					$('.section4 .p-icon').each(function(){
						$(this).animate({ opacity: '1'},500);  
					})	
			}
            if(index==5){
			     $('.p5-y').animate({ width: '0px'},300);
				 $('.p5-icon-1').animate({bottom:'340px',left:'10px',opacity:'0'},1000);
                 $('.section5 .p-yimg').each(function(){
					$(this).animate({opacity:'0'}, 500);
				  });
				  $('.p5-ren').animate({ opacity: '0'},500);  
			}
		}	
		
	}

	});
});