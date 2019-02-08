$(document).ready(function(){

	$('#sum').on('click', function(){

		var numberOne = parseInt( $('#numberOne').val() );
		var numberTwo = parseInt( $('#numberTwo').val() );
		var sum;

/*		if ( isNan(numberOne) ){
			numberOne = 0;
		}

		if ( isNan(numberTwo) ) {
			numberTwo = 0;
		}
*/
		sum = numberOne + numberTwo;
		
		$('#sumResult').text(sum);

	});

});