const R = require('ramda');

function isEven(number) {
    const n = R.clone(number);
    n.even = n.value % 2 == 0;
    return n;
}

function positive(number) {
    const n = R.clone(number);
    n.positive = n.value > 0;
    return n;
}

function isOdd(number) {
    const n = R.clone(number);
    n.odd = n.value % 2 != 0;
    return n;
}

function negative(number) {
    const n = R.clone(number);
    n.negative = n.value < 0;
    return n;
}

function isZero(number) {
    const n = R.clone(number);
    n.zero = n.value == 0;
    return n;
}

function isPrime(num) {
    const n = R.clone(num);
    if (n.value != 1) {
        for (var i = 2; i < n.value; i++)
            if (n.value % i == 0) {
                n.prime = false;
                return n;
            }
        if (n.value !== 1) {
            n.prime = true;
            return n;
        }
        n.prime = true;
        return n;
    }
}

function mapToNumberObject(num) {
    return { value: num };
}

const arr = [-1, 50, 5, 10, -8, 20, 25, 0, 100, 14, -123];

// ExercÃ­cio 1: use map() para transformar 'arr' em objetos usando mapToNumberObject()
const arrObj = arr.map(mapToNumberObject);
//console.log(arrObj);


// ExercÃ­cio 2: seguindo o modelo das 2 primeiras funÃ§Ãµes implemente as outras 4 funÃ§Ãµes

for (let i = 0; i < arrObj.length; i++) {
    //console.log(isPrime(arrObj[i]));
}

// ExercÃ­cio 3: refatore todas as funÃ§Ãµes para a forma usando arrow function (=>)

const isEvenArrow = R.curry(number => {
    const n = R.clone(number);
    n.even = n.value % 2 == 0;
    return n;
});
//console.log(isEvenArrow(arrObj[3]));

const positiveArrow = R.curry(number => {
    const n = R.clone(number);
    n.positive = n.value > 0;
    return n;
});
//console.log(positiveArrow(arrObj[0]))

const isOddArrow = R.curry(number => {
    const n = R.clone(number);
    n.odd = n.value % 2 != 0;
    return n;
});
//console.log(isOddArrow(arrObj[1]))

const negativeArrow = R.curry(number => {
    const n = R.clone(number);
    n.negative = n.value < 0;
    return n;
});
//console.log(negativeArrow(arrObj[1]))

const isZeroArrow = R.curry(number => {
    const n = R.clone(number);
    n.zero = n.value == 0;
    return n;
});
//console.log(isZeroArrow(arrObj[1]))

const isPrimeArrow = R.curry(num => {
    const n = R.clone(num);
    if (n.value != 1) {
        for (var i = 2; i < n.value; i++)
            if (n.value % i == 0) {
                n.prime = false;
                return n;
            }
        if (n.value !== 1) {
            n.prime = true;
            return n;
        }
        n.prime = true;
        return n;
    }
});
//console.log(isPrimeArrow(arrObj[1]))

// ExercÃ­cio 4: use R.pipe para compor as funÃ§Ãµes: isEven, positive, isOdd, negative, 
// isZero, e isPrime. Teste a funÃ§Ã£o composta com um Ãºnico objeto.

const dados = arrObj.map(
    R.pipe(
        isEvenArrow(),
        positiveArrow(),
        isOddArrow(),
        negativeArrow(),
        isZeroArrow(),
        isPrimeArrow(),
    )
)

console.log(dados[0]);

// ExercÃ­cio 5: use a funÃ§Ã£o composta do Ex. 4 para transformar os nÃºmeros em 'arr'