const Main = document.querySelector('.main');
const view0 = document.querySelector('.view0');
const view1 = document.querySelector('.view1');

//horizontal scroll effect
Main.addEventListener('wheel',(evt)=>{
    evt.preventDefault();
    Main.scrollLeft += evt.deltaY;

})

