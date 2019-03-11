$(document).ready(function(){
	$('#colorsSelector .colorItem').on('click', function(){
		var imgPath = $(this).attr('data-img-path');
		$('#imgHolder img').attr('src', imgPath);
	});
});
