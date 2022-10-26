const container = document.querySelector('.container');
const clearButton = document.querySelector('.clear');
const sizeButton = document.querySelector('.size');

function createBoxes(numBox){
    container.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numBox}, 1fr)`;
    for(let i = 0;i < numBox*numBox;i++){
        const square = document.createElement('div');
        square.id = 'grid-square'
        container.appendChild(square);
    }
    let gridSquares = container.querySelectorAll('div');
    gridSquares.forEach(square => square.addEventListener('mouseover', (e) =>
    e.target.style.backgroundColor = 'black'))
}

function clear() {
    let gridSquares = container.querySelectorAll('div');
    gridSquares.forEach(square => square.style.backgroundColor = 'white');
}

document.onload = createBoxes(16);







sizeButton.addEventListener('click', (e) => {
    const prompt = window.prompt("Enter number of squares per side.");
    clearButton.addEventListener('click', clear);
    createBoxes(prompt);
})


clearButton.addEventListener('click', clear);

    
    





