let x = 0
let storage = []
let section1 = document.getElementById('section1');
let button = document.getElementById('swapBtn');
do{
    let firstWord_Question = window.prompt("Input First Word");
    let secondWord_Question = window.prompt("Input Second Word");
    let thirdWord_Question = window.prompt("Input Third Word");
    storage.push(firstWord_Question, secondWord_Question,thirdWord_Question)
    x+1
}while(x =0)

function swapLetters(oneWord){
    return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); 
}

let newArr = storage.map(swapLetters);

function toggleDisplay(){
    if(section1.style.display == 'block'){
        section1.style.display = 'none';
        section2.style.display = 'block';
    }
    else{
        section1.style.display = 'block';
        section2.style.display = 'none';
    }
}

document.getElementById('firstWord').innerHTML = storage[0];
document.getElementById('SecondWord').innerHTML = storage[1];
document.getElementById('ThirdWord').innerHTML = storage[2];

document.getElementById('firstWord1').innerHTML = newArr[0];
document.getElementById('SecondWord1').innerHTML = newArr[1];
document.getElementById('ThirdWord1').innerHTML = newArr[2];

section1.style.display = 'block';
button.style.display = 'block';

button.addEventListener("click", function() {
    toggleDisplay();
});
