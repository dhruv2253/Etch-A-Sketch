const container = document.querySelector('.container');
const clearButton = document.querySelector('.clear');
const sizeButton = document.querySelector('.size');
const rainbowButton = document.querySelector('.rainbow');
const greyButton = document.querySelector('.greyscale');
const blackButton = document.querySelector('.black');
const sizeForm = document.querySelector('#size-form');

// Functions 
function createBoxes(numBox){
    // Set row and column for grid
    container.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numBox}, 1fr)`;

    // Create all squares divs
    for(let i = 0;i < numBox*numBox;i++){
        const square = document.createElement('div');
        square.id = 'grid-square'
        container.appendChild(square);
    }

    // Make squares black when mouse enters square
    let gridSquares = container.querySelectorAll('div');
    gridSquares.forEach(square => square.addEventListener('mouseover', () =>
    square.style.backgroundColor = 'black'));
}

// Clear the grid
function clear() {
    let gridSquares = container.querySelectorAll('div');
    gridSquares.forEach(square => square.style.backgroundColor = 'white');
}


//create Grid
document.onload = createBoxes(16);



// Event listeners


// Button to change color to black event
blackButton.addEventListener('click', () => {
    let gridSquares = container.querySelectorAll('div');
   
   
    for (const square of gridSquares) {
        square.addEventListener('mouseover', () => {
            // Set square color to black and opacity to 100% when mouse enters the square
            square.style.backgroundColor = 'black';
            square.style.opacity = '100%';
        });
    }
    
});

// Button to change color to greyscale event
greyButton.addEventListener('click', () => {
    let gridSquares = container.querySelectorAll('div');
   
    
    for (const square of gridSquares) {
        //opacity variable
        let op = .1;
        square.addEventListener('mouseover', () => {
            // Set square color to black and add 10% to opacity of square each time mouse enters the square
            square.style.backgroundColor = 'black';
            square.style.opacity = `${op}`;
            // add .1 to opacity
            op += .1

        });
    }
});

// Button to change color to rainbow event
rainbowButton.addEventListener('click', () => {
    let gridSquares = container.querySelectorAll('div');
    // Clear board
    
    for (const square of gridSquares) {
        // Function to get random number between a range
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        // set the random number to rgb value
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`;

        square.addEventListener('mouseover', () => {
            // change square color to a random color
            square.style.backgroundColor = rgb;
            square.style.opacity = '100%'
        });
    }
});

// Change size of the grid based on user input
sizeForm.addEventListener('submit', (e) => {
    const size = document.querySelector('#size');
    e.preventDefault();
    clear();

    if (!parseInt(size.value)  || size.value>250){
        size.value = "Invalid Input";
        console.log(typeof size.value);
        size.addEventListener('focus', () => {
            size.value = ""
        })
    }
    createBoxes(size.value);
});

// Clear board when button is clicked
clearButton.addEventListener('click', clear);


// Mobile event listeners


// Button to change color to black event
blackButton.addEventListener('touchend', () => {
    let gridSquares = container.querySelectorAll('div');
    // Clear board
   
    for (const square of gridSquares) {
        square.addEventListener('touchmove', () => {
            // Set square color to black and opacity to 100% when mouse enters the square
            square.style.backgroundColor = 'black';
            square.style.opacity = '100%';
        });
    }
    
});

// Button to change color to greyscale event
greyButton.addEventListener('touchend', () => {
    let gridSquares = container.querySelectorAll('div');
    // Clear board
    
    for (const square of gridSquares) {
        //opacity variable
        let op = .1;
        square.addEventListener('touchmove', () => {
            // Set square color to black and add 10% to opacity of square each time mouse enters the square
            square.style.backgroundColor = 'black';
            square.style.opacity = `${op}`;
            // add .1 to opacity
            op += .1

        });
    }
});

// Button to change color to rainbow event
rainbowButton.addEventListener('touchend', () => {
    let gridSquares = container.querySelectorAll('div');
    // Clear board
    
    for (const square of gridSquares) {
        // Function to get random number between a range
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        // set the random number to rgb value
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`;

        square.addEventListener('touchmove', () => {
            // change square color to a random color
            square.style.backgroundColor = rgb;
            square.style.opacity = '100%'
        });
    }
});

// Change size of the grid based on user input
sizeForm.addEventListener('submit', (e) => {
    const size = document.querySelector('#size');
    e.preventDefault();
    clear();

    if (!parseInt(size.value)  || size.value>250){
        size.value = "Invalid Input";
        console.log(typeof size.value);
        size.addEventListener('focus', () => {
            size.value = ""
        })
    }
    createBoxes(size.value);
});

// Clear board when button is clicked
clearButton.addEventListener('touchend', clear); 
    





