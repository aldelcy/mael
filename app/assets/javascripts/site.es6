var pageReady = function(){

	var fabrics = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
	var path = '/assets/products/fabrics/';
	var i = 0;
	do{	
		var item = '<div class="product_thumbnail_border"> <div class="product_thumbnail">'+
					'<img scr"'+path+fabrics[i]+'.jpg">'+
					'</div></div>';

		// $('.product_panel').append(item);
		// console.log(fabrics[i]+'.jpg');
		i+=1;
	}while(i < fabrics.length);


	$('.new_contactrequest').on("submit", function (data) {
		$('.js-theForm').hide();
		$('.js-form').addClass('white');
		
		var submitted = `Submitted to Newsletter<br><br>`;
		var checkmark = `<img src="/assets/checkmark2.gif" width="100px"><br><br>`;
		var social_media = `<a href="https://www.facebook.com/MaelCreations/"><div class="social_icon"><img src="/assets/facebook.png"></div></a>`+
 						   `<a href="https://www.instagram.com/MaelCreations/"><div class="social_icon"><img src="/assets/instagram.png"></div></a>`+
 						   `<br>`+
 						   `<div class="findus">find us on social media</div>`;

		setInterval(function(){ $('.js-form').html(submitted + checkmark + social_media); }, 1000);
	});	
};

$(document).ready(pageReady);
$(document).on('page:load', pageReady);