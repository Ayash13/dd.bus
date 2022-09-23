let stars = document.getElementById('stars');
let meteorid = document.getElementById('meteorid');
let rocket = document.getElementById('rocket');
let satu = document.getElementById('satu');
let text = document.getElementById('text');
let button = document.getElementById('button');
let music = document.getElementById('music');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    rocket.style.top = value * -0.5 + 'px';
    satu.style.bottom = value * -0.5 + 'px';
    text.style.marginBottom = value * 1 + 'px';
    button.style.marginBottom = value * 1 + 'px';
    music.style.marginBottom = value * 1 + 'px';
});
