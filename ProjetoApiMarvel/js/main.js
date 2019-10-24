var animacao = anime({
    //targets são os alvos a serem modificados
    targets: 'div.caixas.primeira',
    //tranlate é para onde a div vai e o quanto ela vai 
    translateX:[
        {value:790,duration:1000}
    ],
    background: "#42f548",
    width: "650px",
    marginBottom: '15px',
    autoplay:false,
    delay: 1010
});
var animacao2 = anime({
    //targets são os alvos a serem modificados
    targets: 'div.caixas.segunda',
    //tranlate é para onde a div vai e o quanto ela vai 
    translateX:[
        {value:800,duration:1000}
    ],
    background: "#42f548",
    marginBottom: '15px',
    width: "650px",
    autoplay:false,
    delay: 1050
});

var animacao3 = anime({
    //targets são os alvos a serem modificados
    targets: 'div.caixas.terceira',
    //tranlate é para onde a div vai e o quanto ela vai 
    translateX:[
        {value:810,duration:1000}
    ],
    background: "#42f548",
    marginBottom: '15px',
    width: "650px",
    autoplay:false,
    delay:1080
});

var animacao4 = anime({
    //targets são os alvos a serem modificados
    targets: 'div.caixas.quarta',
    //tranlate é para onde a div vai e o quanto ela vai 
    translateX:[
        {value:820,duration:1000}
    ],
    background: "#42f548",
    marginBottom: '15px',
    width: "650px",
    autoplay:false,
    delay:1090
});

//const show = function(){
//    $(this).stop(true, true).animate({opacity : 0})
//  }.;



const $nome_personagem  = document.getElementById('txtPersonagem');
const $botao = document.getElementById('button-addon2').onclick =()=>chamaFuncs();
const $loader = document.getElementById('spinner');
const $div_nome = document.querySelector('.primeira');


 chamaFuncs = () => {
    animacao.play();
    animacao2.play();
    animacao3.play();
    animacao4.play();
    mostraDiv.play();

    conexao();
    $div_nome.innerHTML = "teste";
    
}

var mostraDiv =  anime({
    targets:'div#spinner',
    opacity : '1',
    autoplay:false,
    
    
});

var escondeDiv = anime({
    targets: 'div#spinner',
    autoplay:false,
    opacity : 0,
   
})





//essa linha chamara  uma função que ativara todas as animações


 setTimeout(function(){ escondeDiv.play()},1600);


const url = "http://gateway.marvel.com/v1/public/characters?ts=436481&apikey=0d592ddd9b3e9ae4e0dc921206c938fd&hash=a88693e1674452d87d5f88fdfb84e0d7&limit=100";

console.log(url);

const conexao = () =>{
    fetch(url).then(res =>res.json()).then(res=>mostraDados(res));
}

var mostraDados=(url)=>{
    let link = (url.data.results);
    mostratudo(link);
   
}
const mostratudo = (array)=>{
    let herois = filtra(array,$nome_personagem.value);
    console.log(herois[0].thumbnail.path);
    console.log(herois[0].name);
   
    
}

//função para filtrar o array 
const filtra = (array,nome)=>{
    return array.filter(herois => herois.name == nome);
}






