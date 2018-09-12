(function($){
		"use strict";
		
		/*=======================================
		SOCIAL PANEL
		=======================================*/
		$('.click-social').click(function(){
			var jQuerystyle_switcher = $('.social-icons-panel');
				if(jQuerystyle_switcher.css('width')=== '0px'){
					$('.social-icons-panel').animate({
						width:91
					},'slow', function(){
						$('.themeshark_socials').fadeIn(3000);
					});
					$('.social-icons-panel').show('slow');
			
					$('.social-input').removeClass('click-social').addClass('active-social-input');

				}else{
					$('.social-input').removeClass('active-social-input').addClass('click-social');
					$('.themeshark_socials').fadeOut('fast', function(){
						$('.social-icons-panel').animate({
							width:0
						},'slow');
					});
					
				}
			
		});

		
		/*=======================================*/
		
		$.each($.browser,function(){
			if($.browser.mobile){
				$('#tubular-container').css({'display':'none'});
				
			}
		});
		
		/*=======================================
		 PULSATE SETINGS
		=======================================*/
		$('.theme-shark-icon').pulsate({
		  color: '#ffffff', 
		  reach: 5,                              
		  speed: 700,                            
		  pause: 0,                               
		  glow: false,                            
		  repeat: false,                           
		  onHover: true                         
		});
		
		/*=======================================
		ANIMATE ICONS BOX
		=======================================*/
		$('.search-theme-shark-icon').data('state', 1);
		$('.search-theme-shark-icon').click(function() {
		
			$(this).data('state', 1 - $(this).data('state') );
			if($(this).data('state') == 0){
				$('.icon-search').fadeOut('slow', function(){
					$(this).removeClass('icon-search').addClass('active');
					$('.active').fadeIn('slow');
				});

				$('.back-theme-shark-icon').animate({
					opacity: 0,
					left: 100
					},{
					duration:400,
					easing:'easeOutQuad', 
					
					complete:function(){
						
						$(this).hide(500);
					}
				  }
					
					);
				  
				$('.home-theme-shark-icon').animate({
					opacity: 0,
					right: 100
				  },{
					duration:400,
					easing:'easeOutQuad', 
					
					complete:function(){
						
						$(this).hide(500);
					}
				  }
				  );
				  
				
				$('.share-theme-shark-icon').animate({
					opacity: 0,
					top: 350
				},{
					duration:400,
					easing:'easeOutQuad', 
					
					complete:function(){
						
						$(this).hide(500);
						
					}
				  }
				
				);
				
				$('#search-header').fadeIn('slow').animate({
							bottom: 122,
							opacity: 1},{
								duration:800,
								easing:'easeOutQuad', 
								complete:function(){
									
									$(this).show(500);
									
								}
							}
				);
		}else {
			$('.active').fadeOut('slow', function(){
					$(this).removeClass('active').addClass('icon-search');
					$('.icon-search').fadeIn('slow');
				});
				
				
			$('.back-theme-shark-icon').show().animate({
					opacity: 1,
					left: 307
					},{
					duration:400,
					easing:'easeOutQuad'
				  }
					
					);
				  
				$('.home-theme-shark-icon').show().animate({
					opacity: 1,
					right: 271
				  },{
					duration:400,
					easing:'easeOutQuad'
				  }
				  );
				  
				
				$('.share-theme-shark-icon').show().animate({
					opacity: 1,
					top: 109
				},{
					duration:400,
					easing:'easeOutQuad'
				  }
				
				);
				
				$('#search-header').fadeIn('slow').animate({
					bottom: 0,
					opacity: 0},{
						duration:800,
						easing:'easeOutQuad', 
						complete:function(){
							$(this).hide();
						}
					}
				);
			
		}
		}
		);

		/*=======================================
		SOCIAl ANIMATE
		=======================================*/	
		$('.share-theme-shark-icon').data('state-click', 1);
		$('.share-theme-shark-icon').click(function(){
			$(this).data('state-click', 1 - $(this).data('state-click') );
			
			if($(this).data('state-click') == 0){
				$('.icon-share').fadeOut('slow', function(){
					$(this).removeClass('icon-share').addClass('active-share');
					$('.active-share').fadeIn('slow');
				});
				$('#animateTest').animate({
					marginTop: 0,
					opacity: 1,
					display:'block'
				});
				
			}else{
				$('.active-share').fadeOut('slow', function(){
				$(this).removeClass('active-share').addClass('icon-share');
				$('.icon-share ').fadeIn('slow');
				});
				
				$('#animateTest').animate({
					marginTop: -22,
					opacity: 0,
					display:'none'
				});
			}

		});
		
			
})(jQuery);