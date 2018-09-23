$(document).ready(function(){
	$('.cardcalc input, select').change(function(){
		$rozmir = $('input#exampleRadios1').val();
		$number = $('input#number').val();
		$paper = $('select#cardpaper').val();
		$color = $('select#colorcard').val();
		$lamination = $('select#laminationcard').val();
		$radius = $('input#radius').val();
		$color_format = $('select#colorcard option:selected').attr('data-color');
		$final_number = $number / $rozmir
		$final_price = parseInt($paper) + parseInt($color) + parseInt($lamination) + parseInt($radius);
		$price = $final_number * $final_price
		$('span#price').text(Math.ceil($price));
		
		if ($color_format == 1) {
			$('.cardimg > img').hide();
			$('#card1').show();
		}
		if ($color_format == 11) {
			$('.cardimg > img').hide();
			$('#card2').show();
		}
		if ($color_format == 4) {
			$('.cardimg > img').hide();
			$('#card3').show();
		}
		if ($color_format == 44) {
			$('.cardimg > img').hide();
			$('#card4').show();
		}
		if ($color_format == 41) {
			$('.cardimg > img').hide();
			$('#card5').show();
		}
	});
});
