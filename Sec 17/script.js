var random_number1 = Math.floor((Math.random() * 6) + 1);
console.log(random_number1);



var img1 = document.querySelector(".img1");
img1.setAttribute("src", "./images/dice"+ random_number1 +".png");



var random_number2 = Math.floor((Math.random() * 6) + 1);
console.log(random_number2);



var img2 = document.querySelector(".img2");
img2.setAttribute("src", "./images/dice"+ random_number2 +".png")

if (random_number1 === random_number2) {
    document.querySelector("h1").innerHTML = "Deu empate!"
}
else if (random_number1 > random_number2) {
    document.querySelector("h1").innerHTML = "Player 1 ganhou!"
}
else {
    document.querySelector("h1").innerHTML = "Player 2 ganhou!"
}