function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    if ( y == 0) {
        throw new Error('You cannot Divide by Zero!');
    }
    return x / y;
}

function avg(numbers){
    const total = numbers.reduce((sum, number) => sum + number, 0);
    return total / numbers.length;
}


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    avg
};
