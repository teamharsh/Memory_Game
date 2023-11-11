const card_array = [
    {
        name: '1',
        img: 'images/1.jpg',
    },
    {
        name: '2',
        img: 'images/2.jpg',
    },
    {
        name: '3',
        img: 'images/3.jpg',
    },
    {
        name: '4',
        img: 'images/4.jpg',
    },
    {
        name: '5',
        img: 'images/5.jpg',
    },
    {
        name: '6',
        img: 'images/6.jpg',
    },
    {
        name: '1',
        img: 'images/1.jpg',
    },
    {
        name: '2',
        img: 'images/2.jpg',
    },
    {
        name: '3',
        img: 'images/3.jpg',
    },
    {
        name: '4',
        img: 'images/4.jpg',
    },
    {
        name: '5',
        img: 'images/5.jpg',
    },
    {
        name: '6',
        img: 'images/6.jpg',
    },
    
]

card_array.sort( () => 0.5 - Math.random());
//console.log(card_array);
const grid = document.querySelector('#grid');
const result = document.querySelector('#result');

let card_chosen = [];
let card_chosen_id = [];
const card_won = [];

function createBoard () {
    for (let i = 0; i < card_array.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src' , 'images/7.jpg');
        card.setAttribute('data-id' , i);
        card.addEventListener('click' , flip_card);
        grid.appendChild(card);
    }
}

function check_match() {
    //console.log('check for match');

    const cards = document.querySelectorAll('img');
    const option_one_id = card_chosen_id[0];
    const option_two_id = card_chosen_id[1];

    if(option_one_id == option_two_id){
        card[option_one_id].setAttribute('src' , 'image/7.jpg');
        card[option_two_id].setAttribute('src' , 'image/7.jpg');
        alert('You have clicked the same image');
    }

    else if( card_chosen[0] === card_chosen[1]){
        //alert('match');
        cards[option_one_id].setAttribute('src', 'images/8.jpg');
        cards[option_two_id].setAttribute('src', 'images/8.jpg');
        cards[option_one_id].removeEventListener('click', flip_card);
        cards[option_two_id].removeEventListener('click', flip_card);
        card_won.push(card_chosen);

    }

    else{
        cards[option_one_id].setAttribute('src' , 'images/7.jpg');
        cards[option_two_id].setAttribute('src' , 'images/7.jpg');
        //alert('try again');

    }
    card_chosen = [];
    card_chosen_id = [];
    result.textContent = card_won.length;

    if(card_won.length == card_array.length/2){
        result.textContent = 'Congraulations you found it all';
    }
}

function flip_card() {
    let card_id = this.getAttribute('data-id');
    card_chosen.push(card_array[card_id].name);
    card_chosen_id.push(card_id);

    //console.log('clicked' , card_id ,card_chosen , card_chosen_id);
    this.setAttribute ('src' , card_array[card_id].img);
    if(card_chosen.length === 2){
        setTimeout(check_match , 500);
    }
}

createBoard();














