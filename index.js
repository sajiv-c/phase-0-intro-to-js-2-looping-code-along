// Code your solutions in this file
function writeCards(names, event) {
    const newNames = [];
    for (let i = 0; i < names.length; i++) {
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newNames;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n--);
    }
}