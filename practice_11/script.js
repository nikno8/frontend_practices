'use strict'

//задание 1



let array = []; // создание пустого массива

const containerArray = document.querySelector(".container__array"); // контейнер
const addButton = document.querySelector(".add__button"); // кнопка добавления
const shiftButton = document.querySelector(".shift__button"); // кнопка удаления первого элемента
const replaceButton = document.querySelector(".replace__button"); // кнопка замены замены элементов массива

var count = array.length;

addButton.addEventListener("click", event => {
    let block = document.createElement("div");
    block.classList.add("element");
    let title = document.createElement("h2");
    title.classList.add("title");
    title.innerHTML = "element " + count;
    array.push(title.innerHTML);
    block.append(title);
    containerArray.append(block);
    count++;
});

shiftButton.addEventListener("click", event => {
    while(containerArray.lastElementChild){
        containerArray.removeChild(containerArray.lastElementChild);
    }
    array.shift();
    for (let el of array){
        let block = document.createElement("div");
        block.classList.add("element");
        let title = document.createElement("h2");
        title.classList.add("title");
        title.innerHTML = el;
        block.append(title);
        containerArray.append(block);
    }
});

replaceButton.addEventListener("click", event => {
    while(containerArray.lastElementChild){
        containerArray.removeChild(containerArray.lastElementChild);
    }
    let index_first = Math.floor(Math.random() * array.length);
    let index_second = Math.floor(Math.random() * array.length);
    [array[index_first], array[index_second]] = [array[index_second], array[index_first]] // деструктурирующее присваивание
    for (let el of array){
        let block = document.createElement("div");
        block.classList.add("element");
        let title = document.createElement("h2");
        title.classList.add("title");
        title.innerHTML = el;
        block.append(title);
        containerArray.append(block);
    }
});

// задание 2



let arr = [1, 7, 2, 1, 6, 3, 8, 11, 5, 13];
var a = 3;
var b =10;
console.log(arr);
let newArr = arr.filter(item => (item >= a && item <= b));
console.log(newArr);






//задание 3


const sortButton = document.querySelector(".sort__button");
let list = document.querySelectorAll(".sorting_array");
let sort_array = new Array();
for(let elem of list){
    sort_array.push(Number(elem.innerHTML));
}



function compare(a, b){

    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}


sortButton.addEventListener("click", event => {
    sort_array.sort(compare);
    for(let i = 0; i < sort_array.length; i++){
        list[i].innerHTML = sort_array[i];
    }
});




//задание 4-5
const notification = document.querySelector(".img__notification");
const listNotification = document.querySelector(".text__notification");
let counter = document.querySelector(".counter");

function counterN(){
    counter.style.opacity = 1;
    counter.innerHTML++;
    let notif = document.createElement("li");
    notif.innerHTML = "notification "+ counter.innerHTML;
    listNotification.append(notif);
}

let timerId = setTimeout(
    function tick(){
        counterN();
        timerId = setTimeout(tick, 3000);
    }, 3000);

notification.addEventListener("click", event => {
    if(listNotification.classList.contains("active")){
        clearTimeout(timerId);
        listNotification.classList.remove("active");
        while(listNotification.lastElementChild){
            listNotification.removeChild(listNotification.lastElementChild);
        }
        counter.innerHTML = 0;
        counter.style.opacity = 0;
        timerId = setTimeout( // идентификатор таймера
            function tick(){
                counterN();
                timerId = setTimeout(tick, 3000);
            }, 10000);
    }
    else{
        listNotification.classList.add("active");
    }
});