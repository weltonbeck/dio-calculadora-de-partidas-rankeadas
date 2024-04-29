var prompt = require('prompt-sync')();

// variavel com os dados do jogador
const player = {
    win: 0,
    loose: 0,
}

// captura a entrada de valores e alimenta a variavel player
function inputValues() {
    const win = prompt("Qual a sua quantidade de vitórias? ");
    player['win'] = parseInt(win) || 0;
    const loose = prompt("Qual a sua quantidade de derrotas? ");
    player['loose'] = parseInt(loose) || 0;
}

// retorna o ranking baseado nas vitorias
function getRank(win) {
    let rank;

    switch (true) {
        case win <= 10:
            rank = "Ferro";
            break;
        case win <= 20:
            rank = "Bronze";
            break;
        case win <= 50:
            rank = "Prata";
            break;
        case win <= 80:
            rank = "Ouro";
            break;
        case win <= 90:
            rank = "Diamante";
            break;
        case win <= 100:
            rank = "Lendário";
            break;
        default:
            rank = "Imortal";
    }

    return rank;
}

// retorna o saldo de vitorias e derrotas
function getBalance(win, loose) {
    return win - loose;
}

// exibe na tela a msg
function outputMessage() {
    const balance = getBalance(player['win'], player['loose']);
    const rank = getRank(player['win']);
    console.log(`O Herói tem de saldo de ${balance} está no nível de ${rank}`);
}

function main(){
    console.log('Seja bem vindo a Calculadora de partidas Rankeadas');
    let process = true;
    while(process === true) {
        console.log('');
        inputValues();
        outputMessage();
        console.log('');
        const verifyProcess = prompt("Deseja calcular novamente? Digite sim ou não: ");
        if (verifyProcess.toLowerCase() !== 'sim') {
            process = false;
        }
    }
    console.log('');
    console.log('Até logo');
}

main();