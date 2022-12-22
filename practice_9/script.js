// 1.	Создайте страницу входа в панель управления сайтом (или используйте уже созданную форму для входа на сайт).
// Используя конструкцию if…else, напишите код, который будет спрашивать:
//  «Желаете пройти регистрацию на сайте?». Если пользователь вводит «Да», то показать:
//   «Круто!», в любом другом случае – отобразить: «Попробуй ещё раз».

// 2.	Напишите код, который будет спрашивать логин с помощью prompt. Если посетитель вводит «Админ», то prompt запрашивает пароль,
//  если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю»
//   (можно использовать свои формулировки).
// Пароль нужно проверить следующим образом:
// 	Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// 	Иначе – «Неверный пароль»,
// 	При отмене – «Отменено».
// Используйте вложенные блоки if. Обращайте внимание на стиль и читаемость кода. Передача пустого ввода в приглашение 
// prompt возвращает пустую строку. Нажатие клавиши Esc во время запроса возвращает null.

// 3.	Создайте кнопку «Нравится», которая будет менять цвет при нажатии на неё,
// а при повторном нажатии возвращаться к своему цвету.
     

// 4.	Дополнительно к этой кнопке (или к новой) добавьте возможность создавать 
// элементы следуя за курсором,
// при повторном нажатии «рисование» прекращается.
   
"use strict"

// Задание 1
// let answer = prompt("Желаете пройти регистрацию на сайте?");
// if (answer == "Да"){
//     alert("Круто");
// }
// alert("Попробуй еще раз");


// Задание 2

let answer = prompt("Введите ваш логин");
if (answer == "Админ"){
    password = prompt("Введите пароль");
    if (password == "Я главный"){
        alert("Здравствуйте!");
    }
    else if (password === null || password == ""){
        alert("Отменено");
    }
    else{
        alert("Неверный пароль")
    }
}
else if (answer === null || answer == ""){
    alert("Отменено");
}
else{
    alert("Я вас не знаю");
}


// задание 3
let button = document.querySelector('._button');
let like =document.querySelector('.fa-heart');
let count = document.querySelector('.counter');
button.addEventListener('click', () => {
    if (button.style.backgroundColor === 'white'){
        button.style.backgroundColor = 'red';
        button.style.color = 'white';
        like.style.marginRight ='15px';
        count.classList.add('span');
        count.textContent = '1';
        button.style.width = '60px'; 
    }
    else{
        button.style.backgroundColor = 'white';
        button.style.color = 'red';
        like.style.marginRight ='0px';
        button.style.width = '40px';
        count.innerHTML = null; 
    }
})

//задание 4


let container = document.querySelector('.container_create');
let btn = document.querySelector('.btn2');
btn.addEventListener("click", event => {
    if(btn.classList.contains("active")){
        while(container.lastElementChild){
            container.removeChild(container.lastElementChild);
        }
        btn.classList.remove("active");
    }
    else btn.classList.add("active");
});
let x = 0;
let y = 0;

container.addEventListener('mousemove', (e) => {
    
    let newHeart = document.createElement("img");
    newHeart.src = "heart.png";
    newHeart.style.width = "2rem";
    newHeart.style.height = "2rem";
    let localY = e.pageY - container.getBoundingClientRect().top;
    let localX = e.pageX -container.getBoundingClientRect().left;
    if(btn.classList.contains("active") && Math.abs(x - localX) > 1 && Math.abs(y - localY) > 1){ //расстояние между сердечками
        newHeart.classList.add("btn");
        newHeart.classList.add("created-heart");
        newHeart.style.top = `${localY}px`;
        newHeart.style.left = `${localX}px`;
        container.append(newHeart);
        x = localX;
        y = localY;
    }
  });



