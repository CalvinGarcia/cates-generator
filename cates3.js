var heroes ;
var objectA;
var objectB;
var outcomes;

heroes = [ 'Doctor Strange ' ,
'Moon Knight ' , 
'Thanos ' ,
'Silver Surfer ' ,
'Venom ' ,
'Cosmic Ghost Rider ' ,
'Star Lord ' ,
'Thor ' ,	
'Loki ' , 
'Beta Ray Bill '
];

objectA = [ 
'the Ultimate Nullifier ',
'The Nega Bands ',
'Mjolnir ',
'All Black the Necro Sword ', 
'Jarnbjorn ',
'Mjolnir ',
'the Crimson Gem of Cyttorak ',  
'the Mandarin\'s Rings ',
'The Eye of Agamotto ',
'Captain America\'s Shield ', 

 ]; 

objectB = [
'the Pheonix force ',
'the M’Kraan Crystal ',
'The Watcher’s Eye ',
'the Infinity Gems ', 
'the Cosmic Cube ',
'the Destroyer Armor ',
'the Tactigon ',
'the Infinity Guantlet ',
'the Odin Sword ',
'the Power Cosmic ',
];

outcomes = [
'destroy the universe ', 
'pursue his dream of becoming a photographer for the Daily Bugle. ',
'become the leader of the Avengers. ', 
'to defeat the Avengers. ',
'to kill Thanos. ',
'ressurect the Universal Church of Truth. ', 
'become a herald of Galactus ',
'destroy the universe ', 
'and become a veterinarian ',
'and kill the X-Men ',
];



// let i = Math.round((Math.r
// var premise = heroes[i] + objandom() * 10));
// ects[i] + event[i]; 

// var test = document.getElementById('pitch-here');

// var blah = test.firstChild; 

// blah.textContent = premise;


var gen =document.getElementById('generate');

function changeText(){

	var pitch = document.getElementById('pitch-here');
	let i = Math.floor((Math.random() * 10));
	let x = Math.floor((Math.random() * 10));
	let y = Math.floor((Math.random() * 10));
	let z = Math.floor((Math.random() * 10));

var premise = heroes[i] + 'uses ' + objectA[x] + 'to obtain ' + objectB[y] + 'and ' + outcomes[z]; ;

var test = document.getElementById('pitch-here');

var blah = test.firstChild.nextSibling; 

blah.textContent = premise;


}

gen.addEventListener('click', changeText, false);




function randomNumber(){

	var numberBox = document.getElementById('number');

	var appendNumber = numberBox.firstChild ; 

	let i = Math.floor((Math.random() * 10));

	appendNumber.textContent = i ;
}

//  var numberButton = document.getElementById('rng'); 


// numberButton.addEventListener('click',randomNumber, false);








