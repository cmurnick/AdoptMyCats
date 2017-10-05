"use strict";

const dom = require('./dom');

let cats = [];

const catsLoad = (catValue) => { 
$.ajax({url:`https://random-dogs-api.herokuapp.com/cats/${catValue}`}).done((data) => {
	cats = data.cats;
	dom.createDomString(cats);
	
}).fail((error) => {
	console.log(error);
});
};



module.exports = {catsLoad};