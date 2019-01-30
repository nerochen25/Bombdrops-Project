const symbols = ['+', '-', '𝐱', '/']

function mathProblemGenerator(min , max) {

    let int1 = Math.ceil(Math.random() * (max-min) + min) ;
    let int2 = Math.ceil(Math.random() * (max-min) + min) ;
    let symbol = symbols[Math.floor(Math.random()*symbols.length)];
    let divider = Math.ceil(Math.random() * 10) + 1

    if (symbol === '/') {
        int1 = int2 * divider  ;
        return `${int1} ${symbol} ${int2}`
    }
    
    if (symbol === '-' && int1 < int2) {
        return `${int2} ${symbol} ${int1}`
    }

    if (symbol === '𝐱' && int1 > 10 && int2 > 10) {
        int1 = int1 - 10
    }

    return `${int1} ${symbol} ${int2}`
} 

export default mathProblemGenerator;




