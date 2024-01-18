const btn=document.getElementsByClassName('button')[0];
const list=document.getElementsByClassName('list')[0];
btn.addEventListener('click',()=>{
    list.classList.toggle('active');
});







let scrollcontainer=document.querySelector('.slider1');
let backbtn = document.getElementById('backbtn');
let nextbtn = document.getElementById('nextbtn');


nextbtn.addEventListener('click', ()=>{
    scrollcontainer.scrollLeft += 300;
});
backbtn.addEventListener('click', ()=>{
    scrollcontainer.scrollLeft -= 300;
});
let scrollcontainer1=document.querySelector('.slider2');
let backbtn1 = document.getElementById('backbtn1');
let nextbtn1 = document.getElementById('nextbtn1');


nextbtn1.addEventListener('click', ()=>{
    scrollcontainer1.scrollLeft += 300;
});
backbtn1.addEventListener('click', ()=>{
    scrollcontainer1.scrollLeft -= 300;
});
let scrollcontainer2=document.querySelector('.slider3');
let backbtn2 = document.getElementById('backbtn2');
let nextbtn2 = document.getElementById('nextbtn2');


nextbtn2.addEventListener('click', ()=>{
    scrollcontainer2.scrollLeft += 300;
});
backbtn2.addEventListener('click', ()=>{
    scrollcontainer2.scrollLeft -= 300;
});
