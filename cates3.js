var heroes = [ 
'Doctor Strange ',
'Moon Knight ', 
'Thanos ',
'Silver Surfer ',
'Venom ',
'Cosmic Ghost Rider ',
'Star Lord ',
'Thor ',
'Loki ' 
];
var objectA = [ 
'the Ultimate Nullifier ',
'The Nega Bands ',
'Mjolnir ',

'All Black the Necro Sword ', 
'Jarnbjorn ',
'Mjolnir ',
'the Crimson Gem of Cyttorak ',  
'the Mandarin\'s Rings ',
'The Eye of Agamotto ',

 ]; 

var objectB = [

'the Pheonix force ',
'the M’Kraan Crystal ',
'The Watcher’s Eye ',
'the Infinity Gems ', 
'the Cosmic Cube ',
'the Destroyer Armor ',
'the Tactigon ',
'the Infinity Guantlet ',
'the Odin Sword '
];

outcomes = [
'destroy the universe ', 
'pursue his dream of becoming a photographer for the Daily Bugle. ',
'become the leader of the Avengers. ', 
'to defeat the Avengers. ',
'to defeat the Avengers. ',
'become the leader of the Avengers. ', 
'pursue his dream of becoming a photographer for the Daily Bugle. ',
'destroy the universe ', 
'and become a veterinarian '
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
	let x = Math.ceil((Math.random() * 10));

var premise = heroes[i] + 'uses ' + objectA[i] + 'to obtain ' + objectB[i] + 'and ' + outcomes[i]; ;

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

 var numberButton = document.getElementById('rng'); 


numberButton.addEventListener('click',randomNumber, false);








