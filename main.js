let x = 0
let storage = []
do{
    let firstWord_Question = window.prompt("Input First Word");

    let secondWord_Question = window.prompt("Input Second Word");

    let thirdWord_Question = window.prompt("Input Third Word");

    storage.push(firstWord_Question, secondWord_Question,thirdWord_Question)

    x+1



}
while(x =0)

document.getElementById('firstWord').innerHTML = storage[0];
document.getElementById('SecondWord').innerHTML = storage[1];
document.getElementById('ThirdWord').innerHTML = storage[2];