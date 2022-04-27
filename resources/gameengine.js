function startRoll() {
    var yourNumber;
    var opponentNumber;

    let diceImgURL = './resources/img/dice.png';

    var canvas = document.querySelector(".canvas");
    // var canvas2 = document.querySelector(".canvas2");
    var context = canvas.getContext('2d');
    // var context2 = canvas2.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    var image = new Image();

    image.src = diceImgURL;
    image.crossOrigin = true;
    image.width = 99;
    image.height = 99;


    // positionX = [4, 103, 202, 301, 399, 498];

    yourNumber = Math.floor(Math.random() * 6) + 1;
    opponentNumber = Math.floor(Math.random() * 6) + 1;

    switch (yourNumber) {
        case 1:
            image.onload = function () {
                context.drawImage(image, 4, 4, image.width, image.height, 100, 27, image.width, image.height);
                console.log(yourNumber);
            }
            break;
        case 2:
            image.onload = function () {
                context.drawImage(image, 103, 4, image.width, image.height, 100, 27, image.width, image.height);
                console.log(yourNumber);
            }
            break;
        case 3:
            image.onload = function () {
                context.drawImage(image, 202, 4, image.width, image.height, 100, 27, image.width, image.height);
                console.log(yourNumber);
            }
            break;
        case 4:
            image.onload = function () {
                context.drawImage(image, 301, 4, image.width, image.height, 100, 27, image.width, image.height);
                console.log(yourNumber);
            }
            break;
        case 5:
            image.onload = function () {
                context.drawImage(image, 399, 4, image.width, image.height, 100, 27, image.width, image.height);
                console.log(yourNumber);
            }
            break;
        case 6:
            image.onload = function () {
                context.drawImage(image, 498, 4, image.width, image.height, 100, 27, image.width, image.height);
                console.log(yourNumber);
            }
            break;
    }
}