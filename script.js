function parallax (element,distance,speed){
    const item=document.querySelector(element);
    item.style.transform=`translateY(${distance * speed}px)`;
}

window.addEventListener('scroll',function(){
    parallax('header',window.scrollY,1);
    parallax('section',window.scrollY,0.1);
    parallax('#music-note2',window.scrollY,0.2);
    parallax('#music-note1',window.scrollY,0.3);
    parallax('#music-note',window.scrollY,0.4);
})