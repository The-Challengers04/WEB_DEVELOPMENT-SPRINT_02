const divDescontosEmpresas = document.querySelector(".descontos__empresas");
Descontos_Empresa = [
    {
        imgSRC: "../img/img-restaurante.jpg",
        Titulo: "Restaurante",
        Texto: "Esta empresa oferece o desconto de 10% para PCD",
        altImg: "Imagem de um restaurante"
    },
    {
        imgSRC: "../img/img-shopping.jpg",
        Titulo: "Shopping",
        Texto: "Serviços de acessibilidades estão disponíveis nesse estabelecimento",
        altImg: "Imagem de um shopping"
    },
    {
        imgSRC: "../img/img-bk.jpg",
        Titulo: "Burger King",
        Texto: "Esta empresa oferece o desconto 15% no cardápio para PCD",
        altImg: "Imagem de um estabelecimento do Burger King"
    },
    {
        imgSRC: "../img/img-cinemark.jpg",
        Titulo: "Cinemark",
        Texto: "Esta marca oferece o desconto de 50% nos ingressos para PCD",
        altImg: "Image de uma sala de cinema do Cinemark"
    },
    {
        imgSRC: "../img/img-estadio.jpg",
        Titulo: "Estádio do Morumbi",
        Texto: "Este estabelecimento oferece o desconto de 30% nos ingressos para PCD",
        altImg: "Imagem do estádio Morumbi visto de cima"
    },
    {
        imgSRC: "../img/img-restaurante02.jpg",
        Titulo: "Restaurante",
        Texto: "Esta empresa oferece o desconto 20% no cardápio",
        altImg: "Imagem de um restaurante"
    },
    {
        imgSRC: "../img/img-bares.jpg",
        Titulo: "Bar do Bom",
        Texto: "Este estabelecimento oferece descontos de 10% para PCD",
        altImg: "Imagem de um bar"
    },
    {
        imgSRC: "../img/img-livraria.jpg",
        Titulo: "Livraria",
        Texto: "Esta instituição oferece descontos, recursos e serviços para PCD",
        altImg: "Imagem de uma livraria"
    },
    {
        imgSRC: "../img/img-roupas.jpg",
        Titulo: "Loja de Roupas",
        Texto: "Esta empresa oferece descontos e serviços para PCD",
        altImg: "Imagem de roupas em um varal"
    }];

function createCard(element){
    const div = document.createElement("div");
    div.className = "empresas";

    const img = document.createElement("img");
    img.src = element.imgSRC;
    img.alt = element.altImg;

    const h2 = document.createElement("h2");
    h2.innerHTML = element.Titulo;

    const p = document.createElement("p");
    p.innerHTML = element.Texto;

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    divDescontosEmpresas.appendChild(div);
}

Descontos_Empresa.forEach(element => {
    createCard(element);
});
