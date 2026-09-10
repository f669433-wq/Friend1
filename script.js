const best = document.getElementById('b1');
const sis = document.getElementById('b2');
const cut = document.getElementById('b3');
const storm = document.getElementById('b4');

const crash = new Audio("sounds/crash.mp3");
const kick = new Audio('sounds/kick-bass.mp3')
const tom1 = new Audio('sounds/tom-1.mp3')
const tom2 = new Audio('sounds/tom-2.mp3')
const tom3 = new Audio('sounds/tom-3.mp3')
const tom4 = new Audio('sounds/tom-4.mp3')





best.addEventListener('mouseover',(event)=>{
  best.textContent += '😃'
      crash.play();
})
best.addEventListener('mouseout',(event)=>{
  best.textContent = 'Bestie'
  
})

sis.addEventListener('mouseover',(event)=>{
  sis.textContent += '🤗'
  tom4.play();
})
sis.addEventListener('mouseout',(event)=>{
  sis.textContent = 'Sister'
})

cut.addEventListener('mouseover',(event)=>{
  cut.textContent += '😊'
  tom1.play()
})
cut.addEventListener('mouseout',(event)=>{
  cut.textContent = 'Cutiee'
})

storm.addEventListener('mouseover',(event)=>{
  storm.textContent += '😶‍🌫️'
  tom2.play()
})
storm.addEventListener('mouseout',(event)=>{
  storm.textContent = 'Stormy'
})

imageArray = [
    'p1.png',
    'p2.png',
    'p3.png',
    'p4.png',
  ];





