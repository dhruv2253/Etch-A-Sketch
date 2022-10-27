const container = document.querySelector('.container');
const clearButton = document.querySelector('.clear');
const sizeButton = document.querySelector('.size');
const rainbowButton = document.querySelector('.rainbow');
const greyButton = document.querySelector('.greyscale');
const blackButton = document.querySelector('.black');
function createBoxes(numBox){
    container.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numBox}, 1fr)`;
    for(let i = 0;i < numBox*numBox;i++){
        const square = document.createElement('div');
        square.id = 'grid-square'
        container.appendChild(square);
    }
    let gridSquares = container.querySelectorAll('div');
    gridSquares.forEach(square => square.addEventListener('mouseover', () =>
    square.style.backgroundColor = 'black'));
}

function clear() {
    let gridSquares = container.querySelectorAll('div');
    gridSquares.forEach(square => square.style.backgroundColor = 'white');
}

document.onload = createBoxes(16);




blackButton.addEventListener('click', () => {
    let gridSquares = container.querySelectorAll('div');
    clear();
    for (const square of gridSquares) {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    }
    
});

greyButton.addEventListener('click', () => {

});

rainbowButton.addEventListener('click', (e) => {
    let gridSquares = container.querySelectorAll('div');
        clear();
    for (const square of gridSquares) {
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = rgb;
        });
    }
    
});


sizeButton.addEventListener('click', (e) => {
    const prompt = window.prompt("Enter number of squares per side.");
    clearButton.addEventListener('click', clear);
    createBoxes(prompt);
})


clearButton.addEventListener('click', clear);

    
    





