const symbols = ['+', '-', '*', '/']

function toSymbol(str) {
    return Symbol(str)
}

function toInteger(str) {
    return parseInt(str)
}

function mathProblemGenerator(min , max) 
{
    const int1 = Math.ceil(Math.random() * (max-min) + min) ;
    const int2 = Math.ceil(Math.random() * (max-min) + min) ;
    const symbol = symbols[Math.floor(Math.random()*symbols.length)];
    
    if (symbol === '/') {
        int1 = int2 * (Math.random() * (max-min) + min)
    }
    
    if (symbol === '-' && int1 < int2) {
        return `${int2} ${symbol} ${int1}`
    }

    if (symbol === '*' && int1 > 10 && int2 > 10) {
        int1 = int1 - 10
    }

    return `${int1} ${symbol} ${int2}`
} 

export default mathProblemGenerator;




