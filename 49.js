function multiply(a, b=2) {
    return a * b;
}


function rollADie(nos=6) {
    console.log(Math.random()*6)
    return Math.floor(Math.random() * nos) + 1
}