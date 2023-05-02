let serchBtn = document.querySelector('.serchBtn');
let cloneBtn = document.querySelector('.cloneBtn');
let serchBox = document.querySelector('.serchBox');
let menu = document.querySelector('.menu');
let group = document.querySelector('.group');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let alert1 = document.getElementById('alert1');
let alert2 = document.getElementById('alert2');
let spanRemove1 = document.getElementById('spanRemove1');
let spanRemove2 = document.getElementById('spanRemove2');
let spanRemove3 = document.getElementById('spanRemove3');
let header = document.getElementById('header');
let al = document.getElementById("al");
let oq = document.getElementById('oq');
let qora = document.getElementById("qora");
let qizil = document.getElementById("red");
let body = document.getElementById("body");
serchBtn.onclick = function(){
    serchBox.classList.add('active');
    cloneBtn.classList.add('active');
    serchBtn.classList.add('active');
}
cloneBtn.onclick = function(){
    serchBox.classList.remove('active');
    cloneBtn.classList.remove('active');
    serchBtn.classList.remove('active');
}
menu.onclick = function(){
    group.classList.toggle('active');
    console.log(1);
}
btn1.onclick = function(){
    alert1.classList.add('active-a');
    console.log(1);
}
spanRemove1.onclick = function(){
    alert1.classList.remove('active-a');
}
btn2.onclick = function(){
    alert2.classList.add('active-b');
    console.log(2);
}
spanRemove2.onclick = function(){
    alert2.classList.remove('active-b');
}
spanRemove3.onclick = function(){
    al.classList.add('c');
}
qora.onclick = function(){
    body.classList.add('rang');
    serchBox.classList.add('ra')
}
oq.onclick =function(){
    body.classList.remove('rang');
    serchBox.classList.remove('ra');
    body.classList.remove('rang-q');
}
qizil.onclick=function(){
    body.classList.add('rang-q');
}

window.addEventListener('scroll', () => {
    header.classList.toggle('active-scroll', window.scrollY > 10)
  })
