
// takes first item of unordered list and gives it a name.  

// grabs the unordered list 
// var list = document.getElementsByTagName('ul')[0];

// // grabs the first child of the unordered list (an empty space) and then selects it's sibling which is the <li> element. 

// var hat = list.firstChild ; 
// var el = list.firstChild.nextSibling; 

// el.textContent = "hammer time";



// var hambone = document.getElementById('test');

// var words = document.createElement('p');

// hambone.appendChild('words');

// words.textContent = "some words are in here" ; 



//creating a text element 

// var hambone = document.createElement('p');

// var words = document.createTextNode('house of pain');

// hambone.appendChild(words);

// var hook = document.getElementById('test'); 

// hook.appendChild(hambone);

var gen = document.getElementById('generate');

// function changeText(){

// var pitch = document.getElementById('pitch-here');

// var some = pitch.firstChild.nextSibling; 

// some.textContent = "more to come";


// } 

// gen.addEventListener('click',function(){

// var pitch = document.getElementById('pitch-here');

// var some = pitch.firstChild.nextSibling; 

// some.textContent = "More to Come";


// });




function changeText(){

var pitch = document.getElementById('pitch-here');

var some = pitch.firstChild.nextSibling; 

some.textContent = "More to Come";




}

// gen.onclick = changeText;

gen.addEventListener('click',changeText,false);





