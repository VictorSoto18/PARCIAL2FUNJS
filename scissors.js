const btnplay = document.getElementById('btnplay');
const divUser = document.getElementById('divUser');
const divMaq = document.getElementById('divMaq');
const message = document.getElementById('message');

const play = () => {
    const choiceUser = prompt('Elige: piedra, papel o tijeras').toLowerCase();
    const aleatorio = Math.floor(Math.random() * 3);
    const choices = ['piedra', 'papel', 'tijeras'];
    const choiceMaq = choices[aleatorio];

    // Muestra la elección del usuario
    divUser.innerHTML = `Tú elegiste: <img src="${choiceUser}.jpg" alt="${choiceUser}">`;
    // Muestra la elección de la máquina
    divMaq.innerHTML = `La máquina eligió: <img src="${choiceMaq}.jpg" alt="${choiceMaq}">`;

    // Comparaciones para determinar el ganador
    if (choiceUser === choiceMaq) {
        message.innerText = '¡Es un empate!';
    } else if (
        (choiceUser === 'piedra' && choiceMaq === 'tijeras') ||
        (choiceUser === 'papel' && choiceMaq === 'piedra') ||
        (choiceUser === 'tijeras' && choiceMaq === 'papel')
    ) {
        message.innerText = '¡Ganaste!';
    } else if (
        (choiceMaq === 'piedra' && choiceUser === 'tijeras') ||
        (choiceMaq === 'papel' && choiceUser === 'piedra') ||
        (choiceMaq === 'tijeras' && choiceUser === 'papel')
    ) {
        message.innerText = '¡Perdiste!';
    } else {
        message.innerText = 'Elección inválida, por favor elige piedra, papel o tijeras.';
    }
};

btnplay.addEventListener('click', play);
