document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonAdd").addEventListener("click", function (textbox1, textbox2) {
        var firstNumber = document.getElementById("textbox1").value;
        var secondNumber = document.getElementById("textbox2").value;

        var answer = Number(firstNumber) + Number(secondNumber);

        document.getElementById("answer_box").innerHTML = Number(answer);
    });
});

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonSubtract").addEventListener("click", function (textbox1, textbox2) {
        var firstNumber = document.getElementById("textbox1").value;
        var secondNumber = document.getElementById("textbox2").value;

        var answer = Number(firstNumber) - Number(secondNumber);

        document.getElementById("answer_box").innerHTML = Number(answer);
    });
});

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonMultiply").addEventListener("click", function (textbox1, textbox2) {
        var firstNumber = document.getElementById("textbox1").value;
        var secondNumber = document.getElementById("textbox2").value;

        var answer = Number(firstNumber) * Number(secondNumber);

        document.getElementById("answer_box").innerHTML = Number(answer);
    });
});

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonDivide").addEventListener("click", function (textbox1, textbox2) {
        var firstNumber = document.getElementById("textbox1").value;
        var secondNumber = document.getElementById("textbox2").value;

        var answer = Number(firstNumber) / Number(secondNumber);

        

        if (secondNumber == 0){
            document.getElementById("warning").innerHTML = "YOU CAN NOT DIVIDE BY ZERO"

        }
        else{

            document.getElementById("answer_box").innerHTML = Number(answer);

        }
    });
});
