function askName() {
    let box1 = document.getElementById("box1");
    box1.classList.add('change1');
    let userName = prompt("Как вас зовут?");
    document.getElementById('box1').textContent = 'Привет ' + userName + ' !!!';
}
function askAge() {
    let box2 = document.getElementById("box2");
    box2.classList.add('change2');
    let age = parseInt(prompt("Сколько вам лет?"));
    let check = (age >= 18) ? true : false;
    switch (check) {
        case (false): {
            document.getElementById('box2').textContent = 'Еще маловат ^_^';
            break;
        }
        case (true): {
            document.getElementById('box2').textContent = 'Можно не спрашивать разрешения у родителей ;)';
            break;
        }
        
        default: {
            document.getElementById('box2').textContent = 'Что то пошло не так...';
            break;
        }
    }
}
function clickButton(){    
    let boxBtn = document.getElementById("boxButton");
    boxBtn.classList.toggle('checkButtonChange');
}
function activeButton(){
    let btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener('click', clickButton);
}
