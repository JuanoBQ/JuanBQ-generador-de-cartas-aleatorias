import "bootstrap";
import "./style.css";

{/* <i class="fa-solid fa-chess-king"></i>
<i class="fa-solid fa-chess-queen"></i> */}


let paloArray = ["♦", "♥", "♠", "♣"];
let numberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "As"]

let randomPalo = Math.floor(Math.random() * paloArray.length);
let randomNumber = Math.floor(Math.random() * numberArray.length);


let palo = document.getElementsByClassName("palo");
palo[0].innerHTML = paloArray[randomPalo];
palo[1].innerHTML = paloArray[randomPalo];

let numero = document.getElementsByClassName("numero");
numero[0].innerHTML = numberArray[randomNumber];


if (numberArray[randomNumber] === "K") numero[0].innerHTML = 'K<i class="fa-solid fa-chess-king"></i>';
if (numberArray[randomNumber] === "Q") numero[0].innerHTML = 'Q<i class="fa-solid fa-chess-queen"></i>';
if (paloArray[randomPalo] === "♥" || paloArray[randomPalo] === "♦") palo[0].style.color = "red";
else  palo[0].style.color = "black";
if (paloArray[randomPalo] === "♥" || paloArray[randomPalo] === "♦") palo[1].style.color = "red";
else palo[1].style.color = "black";
if (paloArray[randomPalo] === "♥" || paloArray[randomPalo] === "♦") numero[0].style.color = "red";
else numero[0].style.color = "black";


let refreshCard = document.getElementById("refresh")
refreshCard.addEventListener("click", function () {
  let randomPalo = Math.floor(Math.random() * paloArray.length);
  let randomNumber = Math.floor(Math.random() * numberArray.length);

  palo[0].innerHTML = paloArray[randomPalo];
  palo[1].innerHTML = paloArray[randomPalo];
  numero[0].innerHTML = numberArray[randomNumber];
  if (numberArray[randomNumber] === "K") numero[0].innerHTML = 'K<i class="fa-solid fa-chess-king"></i>';
  if (numberArray[randomNumber] === "Q") numero[0].innerHTML = 'Q<i class="fa-solid fa-chess-queen"></i>';
  if (paloArray[randomPalo] === "♥" || paloArray[randomPalo] === "♦") palo[0].style.color = "red";
  else  palo[0].style.color = "black";
  if (paloArray[randomPalo] === "♥" || paloArray[randomPalo] === "♦") palo[1].style.color = "red";
  else palo[1].style.color = "black";
  if (paloArray[randomPalo] === "♥" || paloArray[randomPalo] === "♦") numero[0].style.color = "red";
  else numero[0].style.color = "black";
})

