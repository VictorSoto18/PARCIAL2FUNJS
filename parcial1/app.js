// apuntar al div
const ball = document.querySelector('div');
const message = document.querySelector('h1');

const eightBall = () => {
    let randomNumber = Math.floor(Math.random() * 8);
    switch (randomNumber) {
        case 0:
            message.innerText = 'MILOOO'
            break;
        case 1:
            message.innerText = 'Sigue adelante'
            break;
        case 2:
            message.innerText = 'Brrrrrrrrrrr'
            break;
        case 3:
            message.innerText = 'Estas bien bro?'
            break;
        case 4:
            message.innerText = 'Noooooo'
            break;
        case 5:
            message.innerText = 'Mañana sabadrink'
            break;
        case 6:
            message.innerText = 'Bevierbes'
            break;
        case 7:
            message.innerText = 'Juevebes'
            break;
    }
}
ball.addEventListener('click', eightBall);