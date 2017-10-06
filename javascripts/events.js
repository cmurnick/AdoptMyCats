"use strict";

const cats = require('./cats');
const dom = require('./dom');




$('#catNumber').keypress((event) => {	
	let catFinalNumber = $('#catNumber').val();
	if (event.key === 'Enter') {
		console.log("it works");
		cats.catsLoad(catFinalNumber);
		console.log(catFinalNumber);
		$(".original").hide();
		$(".ridOf").removeClass("hidden");
	}

});


$('#goCat').click(() => {
	let catFinalNumber = $('#catNumber').val();
	cats.catsLoad(catFinalNumber);
	console.log(catFinalNumber);
	$(".original").hide();
	$(".ridOf").removeClass("hidden");
});



$('#gone').click((event) => {
	$(".disabled-kitty").parentsUntil('#diffCats').remove();
   	});



// Once I click on the 'Get Rid Of The Disabled Ones' button, any card on my page that has a p tag with the class disabled-kitty should be hidden.

//maybe use some of this for the add/remove things with class
// $("#reg").click(function () {
// if($("#frm01").hasClass('fram1-slide-on')){
//     $("#frm01").hide();
//     $("#frm01").removeClass('fram1-slide-on');
// }   else {
//     $("#frm01").show("slide", { direction: "down" }, 1000);
//     $("#frm01").addClass('fram1-slide-on');
// }

module.exports = {};