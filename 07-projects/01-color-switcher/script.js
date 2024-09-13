const body = document.querySelector('body');
const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const box3 = document.querySelector('#box3');
const box4 = document.querySelector('#box4');
const btns = document.querySelectorAll('.box');


btns.forEach(btn => {
    console.log(btn);
    btn.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);
        if (e.target.id === "box1") {
            body.style.backgroundColor = 'gray'
        }  
        
        if (e.target.id === "box2") {
            body.style.backgroundColor = 'aqua'
        }  

        if (e.target.id === "box3") {
            body.style.backgroundColor = 'blue'
        } 

        if (e.target.id === "box4") {
            body.style.backgroundColor = 'brown'
        } 
    })
});