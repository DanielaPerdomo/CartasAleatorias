/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

var generateRandomNumber = () => {
  var numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  var indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
var generateRandomSuit = () => {
  var suit = ["diamante", "picas", "corazon", "trebol"];
  var indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
