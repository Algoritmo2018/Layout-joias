//Voltar ao topo

const btn = document.getElementById("btnTop")

btn.addEventListener("click", function(){
    window.scrollTo(0,0)
})




//Animação

const elementos=document.querySelectorAll('[data-anima]');
const animacaoClass='animacao';


function animaScroll(){
    const topoPaginaNaJanela=window.pageYOffset+((window.innerHeight*3)/4);// 3/4 da janela
    elementos.forEach(function(elemento){
        if(topoPaginaNaJanela > elemento.offsetTop){
            elemento.classList.add(animacaoClass);
        }
        else{
            elemento.classList.remove(animacaoClass);
        }
    });
}

if(elementos.length){
    window.addEventListener('scroll',function(){
        animaScroll();
    })
}
