const container = document.querySelector('.container');


const num = 16;
 for(let i = 0; i<Math.pow(num, 2); i++){
    const div = document.createElement('div');
     div.id = 'grid-square';
     container.appendChild(div);
     console.log(num);

     div.addEventListener('mouseenter', (e) =>
    e.target.style.backgroundColor = 'black');
 }
    
    





