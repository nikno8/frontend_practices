// задание 1

let links = document.querySelectorAll('a');

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue; // нет атрибута

  if (!href.includes('://')) continue; // нет протокола

  // if (href.startsWith('http://internal.com')) continue; // внутренняя

  link.style.color = 'orange';
}

// задание 2

let ul = document.createElement('ul');
document.body.append(ul);
while (true){
    let data = prompt("Введите текст для элемента списка", "");
    if (!data) { // проверка на esc
      break;
    }
    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}


// задание 3

function showNotification({className, html}){
    let notification = document.createElement('div');
    notification.className = "notification";
    if (className) {
      notification.classList.add(className);
    }


    notification.innerHTML = html;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);
}


// тестирование

let i = 1;
setInterval(() => {
    showNotification({
    html: 'notification ' + i++,
    className: "welcome"
    });
    }, 2000);


// let i = 1;
// showNotification({
//     html: 'notification ' + i++,
//     className: "welcome"
//     });

// задание 4

let btn = document.getElementById('center_button');
let neymar = document.getElementById('neymar');
let field = document.getElementById('field');
let container = document.getElementById('field_container');
btn.addEventListener("click", function(){
    neymar.style.left = Math.round(field.clientWidth / 2 - neymar.offsetWidth / 2) + 'px';
    neymar.style.top = Math.round(field.clientHeight / 2 - neymar.offsetHeight / 2) + 'px';
    field.style.left= Math.round(container.clientWidth / 2 - field.offsetWidth / 2) + 'px';
})


// задание 5

let panes = document.querySelectorAll('.pane');

for(let pane of panes) {
  pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>'); // перед первым потомком
  // кнопка становится первым потомком плитки (pane)
  pane.firstChild.onclick = () => pane.remove();
}


