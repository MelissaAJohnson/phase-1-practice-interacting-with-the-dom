// initalize variables
let nIntervId;
let counter = 0;
const node = document.getElementById('counter');
const pauseButton = document.getElementById('pause');
const incrementButton = document.getElementById('plus');
const decrementButton = document.getElementById('minus');

// Set the timer increment every second once page is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (!nIntervId) {
        nIntervId = setInterval(() => {
            counter ++;
            node.innerHTML = counter;

            pauseButton.addEventListener("click", pauseCounter);
            
        }, 1000)
    }

    // Pause counter
    function pauseCounter() {
        clearInterval(nIntervId);
        pauseButton.innerHTML = "resume";

        incrementButton.addEventListener("click", function(){incrementCounter(counter)});

        decrementButton.addEventListener("click", function(){decrementCounter(counter)});
    }
})

// Increment counter
function incrementCounter(start) {
    counter = start + 1;
    node.innerHTML = counter;
}

// Decrement counter
function decrementCounter(start) {
    counter = start - 1;
    node.innerHTML = counter;
}