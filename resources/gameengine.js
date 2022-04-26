let diceImgURL = './resources/img/dice.png';

var canvas = document.querySelector(".canvas")

var context = canvas.getContext('2d');

var image = new Image();

canvas.width = 600;
canvas.height = 109;
image.src = diceImgURL;
image.crossOrigin = true;
image.width = 99;
image.height = 99;

positionX = [4, 103, 202, 301, 399, 498];

positionX.forEach(
    image.onload = function (e) {
        context.drawImage(image, e, 4, image.width, image.height, 0, 0, image.width, image.height)
        console.log(e)
    }
);


function startRoll() {
    var yourNumber;
    var opponentNumber;

    yourNumber = Math.floor(Math.random() * 12) + 1;
    opponentNumber = Math.floor(Math.random() * 12) + 1;
    document.querySelector(".dice1").innerHTML = "<p> " + yourNumber + " </p>";
    document.querySelector(".dice2").innerHTML = "<p> " + opponentNumber + " </p>";


}