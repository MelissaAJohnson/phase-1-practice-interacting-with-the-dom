// variable to store intervalID
let nIntervId;

// Set the timer increment every second once page is loaded
document.addEventListener('DOMContentLoaded', () => {
    const node = document.getElementById('counter');
    let counter = 0;
    if (!nIntervId) {
        nIntervId = setInterval(() => {
            counter ++;
            console.log(counter);
            node.innerHTML = counter;
        }, 1000)
    }
})
