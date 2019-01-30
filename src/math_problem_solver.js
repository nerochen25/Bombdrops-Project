function mathProblemSolver(str) {
    let mathElements = str.split(' ');
    let int1 = parseInt(mathElements[0]);
    let int2 = parseInt(mathElements[2]);
    if (mathElements[1] === '+') {
        return int1 + int2;
    }

    if (mathElements[1] === '-') {
        return int1 - int2;
    }

    if (mathElements[1] === '𝐱') {
        return int1 * int2;
    }

    if (mathElements[1] === '/') {
        return parseInt(int1 / int2);
    }
}

export default mathProblemSolver;