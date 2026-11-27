// Henesty G. De Guzman
// IV BSIT - A
// N2: Modular Calculator
// Date: November 18, 2026

const operations = require('./operations');
const formatResult = require('./formatter');
const os = require('os');

const operation = process.argv[2];
const numbers = process.argv.slice(3).map(Number);

if (!operation) {
    console.log("Error: Please provide an operation.");
    process.exit(1);
}

if (numbers.length < 2 || numbers.some(number => !Number.isFinite(number))) {
    console.log("Error: Please provide at least two valid numbers.");
    process.exit(1);
}

if (!operations[operation]) {
    console.log("Error: Unknown operation!");
    process.exit(1);
}

try {
    let result;

    if (operation === "avg") {
        result = operations.avg(numbers);
    } else {
        result = numbers.reduce((total, number, index) => {
            if (index === 0) {
                return number;
            }

            if (operation === "add") {
                return operations.add(total, number);
            }

            if (operation === "subtract") {
                return operations.subtract(total, number);
            }

            if (operation === "multiply") {
                return operations.multiply(total, number);
            }

            if (operation === "divide") {
                return operations.divide(total, number);
            }
        });
    }

    console.log(formatResult(operation, numbers, result));
    console.log(`Operating System: ${os.platform()}`);

} catch (error) {
    console.log("Error:", error.message);
    process.exitCode = 1;
}
