"use strict";

let cats = [];

const catsLoad = (catValue) => { 
$.ajax('https://random-dogs-api.herokuapp.com/cats/${catValue}').done((data) => {
	cats = data.cats;
	console.log(data);
	
}).fail((error) => {
	console.log(error);
});
};

const getCats = () => {
	return cats;
};

module.exports = {catsLoad};