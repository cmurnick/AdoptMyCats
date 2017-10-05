"use strict";

const cats = require('./cats');
//sumbit user input on click and enter key press

let catFinalNumber = $('catNumber').val();

$('#catNumber').keypress((event) => {	
	if (event.key === 'Enter') {
		console.log("it works");
		cats.catsLoad(catFinalNumber);
		console.log(cats.catsLoad(catFinalNumber));
}
});

$('#goCat').click(() => {
	console.log("this is shit");
});


module.exports = {};