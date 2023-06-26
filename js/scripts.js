function ciaoATutti() {
    console.log('ciaoATutti', this, typeof this);
}
ciaoATutti();
//Otterremo Window
setTimeout(ciaoATutti, 3000);
//Otterremo Window


const divRed = document.querySelector(".red");
divRed.addEventListener('click',
    function () {
        console.log('Event listener', this);
    }
);
//Otterremo <div class="red">Ciao</div>


function somma() {
    1 + 2;
}

console.log('function somma()', somma());


function sommaConReturn() {
    return 1 + 2;
}

() => 1 + 2;

console.log('function sommaConReturn()', sommaConReturn());

function sommaElaborata(numeroUno, numeroDue) {
    const somma = numeroUno + numeroDue;

    return somma;
}

const sommaConArrow = (numeroUno, numeroDue) => {
    const somma = numeroUno + numeroDue;

    return somma;
}

console.log('sommaConArrow', sommaConArrow(5, 6));


setTimeout(function () {
    console.log('Sono dentro la funzione anonima del setTimeout');
    console.log('function anonima', this);
}, 3000);

setTimeout(() => {
    console.log('Sono dentro la arrow function anonima del setTimeout');
    console.log('ARROW function anonima', this);
}, 4000);

const divBlue = document.querySelector(".blue");
divBlue.addEventListener('click',
    (event) => {
        console.log('ARROW Event listener NON funziona', this);
        console.log('ARROW Event listener FUNZIONA', event.target);
    }
);



const myFunction3 = () => 'pippo';
console.log(myFunction3()); 