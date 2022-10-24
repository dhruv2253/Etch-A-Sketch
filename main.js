const container = document.querySelector('.container');
const clearButton = document.querySelector('.clear');


function createBoxes(numBox){
    container.style.gridTemplateColumns = `repeat(${numBox}, 1fr)`;
    for(let i = 0;i < numBox*numBox;i++){
        const square = document.createElement('div');
        square.id = 'grid-square'
        container.appendChild(square);
        square.addEventListener('mouseenter', (e) =>
        e.target.style.backgroundColor = 'black');
        
        clearButton.addEventListener('click', (e) =>
        square.style.backgroundColor = 'white');
        
        console.log(numBox);
    }
}

createBoxes(16);





    
    





