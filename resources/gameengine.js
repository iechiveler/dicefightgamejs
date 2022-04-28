function startRoll() {
    var yourNumber;
    var opponentNumber;
    let diceImgURL = './resources/img/dice.png';
    var canvas = document.querySelector(".canvas");
    var canvas2 = document.querySelector(".canvas2");
    var context = canvas.getContext('2d');
    var context2 = canvas2.getContext('2d');
    var image = new Image();
    let pos1 = 4;
    let pos2 = 103;
    let pos3 = 202;
    let pos4 = 301;
    let pos5 = 399;
    let pos6 = 498;
    var status = document.querySelector(".status");

    yourNumber = Math.floor(Math.random() * 6) + 1;
    opponentNumber = Math.floor(Math.random() * 6) + 1;

    console.log(yourNumber);
    console.log(opponentNumber);

    function diceImgReturn(yourNumber, opponentNumber) {
        yN: switch (yourNumber) {
            case 1:
                 context.drawImage(image, pos1, 4, image.width, image.height, 100, 27, image.width, image.height);
                 break;
            case 2:
                 context.drawImage(image, pos2, 4, image.width, image.height, 100, 27, image.width, image.height);
                 break;
            case 3:
                 context.drawImage(image, pos3, 4, image.width, image.height, 100, 27, image.width, image.height);
                 break;
            case 4:
                 context.drawImage(image, pos4, 4, image.width, image.height, 100, 27, image.width, image.height);
                 break;
            case 5:
                 context.drawImage(image, pos5, 4, image.width, image.height, 100, 27, image.width, image.height);
                 break;
            case 6:
                 context.drawImage(image, pos6, 4, image.width, image.height, 100, 27, image.width, image.height);
                 break;
        }
        oN: switch (opponentNumber) {
            case 1:
                 context2.drawImage(image, pos1, 4, image.width, image.height, 100, 27, image.width, image.height);
                 break;
            case 2:
                 context2.drawImage(image, pos2, 4, image.width, image.height, 100, 27, image.width, image.height);
                 break;
            case 3:
                 context2.drawImage(image, pos3, 4, image.width, image.height, 100, 27, image.width, image.height);
                 break;
            case 4:
                 context2.drawImage(image, pos4, 4, image.width, image.height, 100, 27, image.width, image.height);
                 break;
            case 5:
                 context2.drawImage(image, pos5, 4, image.width, image.height, 100, 27, image.width, image.height);
                 break;
            case 6:
                 context2.drawImage(image, pos6, 4, image.width, image.height, 100, 27, image.width, image.height);
                 break;
        }
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    image.src = diceImgURL;
    image.crossOrigin = true;
    image.width = 99;
    image.height = 99;

    

    var position = diceImgReturn(yourNumber, opponentNumber);
    
    if (yourNumber > opponentNumber) {
        status.innerHTML = '<p>Hai vinto!</p>'
    } else if (yourNumber == opponentNumber){
        status.innerHTML = '<p>Pareggio!</p>'
    } else if (opponentNumber > yourNumber) {
        status.innerHTML = '<p>Hai perso!</p>'
    }

    image.onload = function () {
        position;
    }

};
