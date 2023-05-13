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

// Buscar locais no mapa
function buscarPontos(){
    let dropwdown = document.getElementById('escolhas')

    let braile = (dropwdown.value == 'Deficiente Visual')
    let cadeira = (dropwdown.value == 'Deficiente Físico (cadeirantes)')
    let audicao = (dropwdown.value == 'Deficiente Auditivo')
    const maps = document.getElementById('Maps')
    let mapImg = document.getElementById('imgMap')
    mapImg.style.maxWidth = "80vw"
    mapImg.style.maxHeight = "60vh"

    if (cadeira){
        if(audicao){
            if(braile){
                //Cadeira Audicao Braile
                mapImg.src = "../img/imgCadeiraAudicaoBraile.jpg"
            }
            else{
                // Cadeira Audicao
                mapImg.src = "../img/imgCadeiraAudicao.jpg"
            }
        }
        else if (braile)
        {
            // Cadeira Braile
            mapImg.src = "../img/imgCadeiraBraile.jpg"
        }
        else{
            // Cadeira
            mapImg.src = "../img/imgCadeira.jpg"
        }
    }
    else if (audicao)
    {
        if (braile)
        {
            // Audicao Braile
            mapImg.src = "../img/imgAudicaoBraile.jpg"
        }
        else
        {
            // Audicao
            mapImg.src = "../img/imgAudicao.jpg"
        }
    }
    else if (braile)
    {
        // Braile
        mapImg.src = "../img/imgBraile.jpg"
    }
    else
    {
        // Mapa solo
        mapImg.src = "../img/imgMapa.jpg"
    }
}