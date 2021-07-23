
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

//Funções:

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

function renderSquare(){

    for(let i in square){

        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = square[i];

    }
}

function renderInfo(){

    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}
