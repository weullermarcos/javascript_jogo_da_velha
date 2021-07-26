
//Dados iniciais:

let square = {
    a1: 'x', a2: '', a3: '',
    b1: '', b2: 'x', b3: '',
    c1: '', c2: '', c3: 'o',
};

let player  = '';
let warning = '';
let playing = false;

//inicia resetando o jogo
reset();

//Eventos:

//criado evento de click para resetar o jogo
document.querySelector('.reset').addEventListener('click', reset);

//adicionando evento de click aos itens
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick);
});

//Funções:

function itemClick(event){

    let item = event.target.getAttribute('data-item');
    // console.log('clicou em ', item);

    //se o item não estiver preenchido recebe o player
    if(playing && square[item] === ''){
        square[item] = player;
        renderSquare(); //renderiza a tela
        togglePlayer(); //troca o jogador que está jogando
    }

}

function reset(){

    warning = '';

    //escolhendo o usuário que começa jogando, de forma aleatória
    let random = Math.floor(Math.random() * 2);
    player = (random === 0 ) ? 'x' : 'o';

    //zerando as posições do jogo
    for(let i in square){
        square[i] = '';
    }

    playing = true;

    renderSquare();
    renderInfo();

}

function togglePlayer(){

    player = (player === 'x') ? 'o' : 'x';
    renderInfo();
}

function renderSquare(){

    for(let i in square){

        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = square[i];
    }

    checkGame();

}

function renderInfo(){

    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}

function checkGame(){

    if(checkWinnerFor('x')){
        warning = 'O "x" venceu';
        playing = false;
    }
    else if(checkWinnerFor('o')){
        warning = 'O "o" venceu';
        playing = false;
    }
    else if (isFull()){
        warning = 'Deu empate';
        playing = false;
    }
}

function checkWinnerFor(player){

    let pos = [
        'a1,a2,a3', 'b1,b2,b3', 'c1,c2,c3', //vitorias na horizontal
        'a1,b1,c1', 'a2,b2,c2', 'a3,b3,c3', //vitorias na vertical
        'a1,b2,c3', 'a3,b2,c1' //vitorias na diagonal
    ];

    for(let w in pos){

        let pArray = pos[w].split(',');
        let hasWon = pArray.every(option => square[option] === player);

        if(hasWon){
            return true;
        }
    }
    return false;
}

function isFull(){

    for(let i in square){
        if(square[i] === ''){
            return false;
        }
    }

    return  true;
}

