let player1 = prompt("Qual o nome do jogador 1?");
let player2 = prompt("Qual nome do jogador 2?");
let placarPlayer1 = 0;
let placarPlayer2 = 0; 

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    let players = document.getElementById("players");
    players.innerHTML += `<h2>Placar</h2><h3>${player1}: ${placarPlayer1} </h3><h3>${player2}: ${placarPlayer2} </h3>`;

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        
        setTimeout(() => {
            if (playerTime == 0) {
                alert(`O jogo acabou, ${player1} venceu!`)
                placarPlayer1 ++;
                atualizaPlacar();

            } else {
                alert(`O jogo acabou, ${player2} venceu!`)
                placarPlayer2 ++;
                atualizaPlacar();
            }
        }, 10);

    };
    updateSquare(position);

}

function atualizaPlacar(){
    players.innerHTML = `<h2>Placar</h2><h3>${player1}: ${placarPlayer1} </h3><h3>${player2}: ${placarPlayer2} </h3>`;
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;

}

function resetGame() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbols != '') {
            square.innerHTML = `<div class=''></div>`;

        }
    })

    resetBoard();

}