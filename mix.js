let b1 = document.querySelector(".random");
let d1 = document.querySelector(".rez");

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}
function rando1(){
    let map = Math.floor(Math.random() * arr1.length);
    d1.innerHTML = "Кэп красной команды - " + getRandomInt(1,9) + "," + " Кэп синий команды - " + getRandomInt(1, 9) + "," + " Карта: " + (arr1[map]);
}
b1.onclick = rando1;

let arr1 =  [
"Актуон",
"Аквариум",
"Замки",
"Фернигад",
"Фортис",
"Джунглиус",
"Пробуждение",
"Юнона",
"Зелнес",
"Хестерн",
"Фрокус 2.0",
"Криментис",
]

  