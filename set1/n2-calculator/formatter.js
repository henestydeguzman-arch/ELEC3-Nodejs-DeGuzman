
function formatResult(operation, numbers, result){
    const symbols = {
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '/',
        avg: 'avg'
    };

    if (operation === 'avg'){
        return `Average of ${numbers.join(", ")} = ${result}`;
    }

    return `${numbers.join(` ${symbols[operation]} `)} = ${result}`;
}

module.exports = formatResult;
