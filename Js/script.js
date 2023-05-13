// barra de menu
function menuBars(){
    const ativarMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .menu');

    ativarMenu.addEventListener('click', ()=>{
        ativarMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    })
}
menuBars();