const names = ["Charlie", "Samip", "Ali"];
const cards = [];
function writeCards (names, event) {
    for (let i = 0; i <names.length;) {
        
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        i++;
    } return cards;
}

function countDown (number) {
while (number >= 0) {
    console.log(number--)
}


}