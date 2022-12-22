

"use strict"

function Accumulator(startingValue)
{
    this.value = startingValue;
    this.read = function(){
        let new_number = prompt("Введите новое число");
        this.value += Number(new_number);
        alert("Текущее значение суммы: " + accum.value +"\n");
    }
}


let accum = new Accumulator(10);
for (let i =0; i < 5; i++){
    accum.read();
}

var captcha = document.querySelector(".captcha");  
var btn = document.querySelector(".btn"); 


function randLetters() {
    let result = "";
    let chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let maxPosition = chars.length - 1;
        for(let i = 0; i < 7; i++) {
            let position = Math.floor ( Math.random() * maxPosition );
            result = result + chars.substring(position, position + 1);
        }
    return result;
}

function isEmpty(obj){
    return Object.keys(obj).length === 0;
}









var randStr = randLetters(); // сгенерированная строка
var num1 = Math.ceil(Math.random() * 10); 
var num2 = Math.ceil(Math.random() * 10);
var res = num1 + num2;
var input = document.querySelector("#answer");
btn.setAttribute('disabled', '');
captcha.innerHTML = `${randStr}`;

answer.onchange = function(){
    if (input.value == randStr){
        btn.removeAttribute('disabled');
    }
    else{
        captcha.innerHTML = `${num1} + ${num2} = `;
        if (Number(input.value) == res){
            btn.removeAttribute('disabled');
        }
        else{
            alert("Ошибка");
            btn.setAttribute('disabled', '');
        }
    }
}
btn.addEventListener("click",event=>
{
    alert("Отправлено");
})

// function truncate(str, maxlength)
// {
//     maxlength=Number(maxlength);
//     if (str.length > maxlength){
//         str = str.slice(0, maxlength-3) + "...";
//     }
//     return str;
// }


