var escondeOlho = anime({
   targets: 'div#eye',
    opacity:0,
    opacity:0,
    autoplay:false
});


var animacao = anime({
    //targets são os alvos a serem modificados
    targets: 'div.caixas.primeira',
    //tranlate é para onde a div vai e o quanto ela vai 
    translateX:[
        {value:-730,duration:4500}
    ],
    rotate:{
        value:360,
        duration:2000,
        easing: 'easeOutElastic'
    },
    width: "650px",
    marginBottom: '15px',
    autoplay:false,
    delay: 1500,
    opacity: 1,
    
});
var animacao2 = anime({
    //targets são os alvos a serem modificados
    targets: 'div.caixas.segunda',
    opacity: 1,
    //tranlate é para onde a div vai e o quanto ela vai 
    translateX:[
        {value:800,duration:4500}
    ],
   
    marginBottom: '10px',
    width: "650px",
    autoplay:false,
    delay: 2000,
    zIndex:'999',
    
    
    
   
});

var animacao3 = anime({
    //targets são os alvos a serem modificados
    targets: 'div.caixas.terceira',
    opacity: 1,
    //tranlate é para onde a div vai e o quanto ela vai 
    translateX:[
        {value:-730,duration:4500}
    ],
    
    marginBottom: '15px',
    width: "650px",
    autoplay:false,
    delay:2500,
    
});

var animacao4 = anime({
    //targets são os alvos a serem modificados
    targets: 'div.caixas.quarta',
    opacity: 1,
    //tranlate é para onde a div vai e o quanto ela vai 
    translateX:[
        {value:1020,duration:4500}
    ],
    rotate:'5turn',
    marginBottom: '15px',
    width: "230px",
    autoplay:false,
    delay:3000
});

//const show = function(){
//    $(this).stop(true, true).animate({opacity : 0})
//  }.;



const $nome_personagem  = document.getElementById('txtPersonagem');
const $botao = document.getElementById('button-addon2').onclick =()=>chamaFuncs();
const $loader = document.getElementById('spinner');
const $div_nome = document.querySelector('.primeira');
const $div_img = document.querySelector('.segunda');
const $div_desc = document.querySelector('.terceira');
const $div_qr = document.querySelector('.quarta');



 chamaFuncs = () => {
     alert("asdasd");
    animacao.play();
    animacao2.play();
    animacao3.play();
    animacao4.play();
    mostraDiv.play();
    escondeOlho.play();
    conexao();
    // $div_nome.innerHTML = $nome_personagem.value;
    console.log($nome_personagem.value)
   
    
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
   return herois;
    
}

//função para filtrar o array 
const filtra = (array,nome)=>{
    
    $filtrado = array.filter(herois => herois.name == nome);
    $imagem = $filtrado[0].thumbnail.path;
    console.log($filtrado[0]);
    $id = $filtrado[0].id;
    $nome = $filtrado[0].name;
    $descricao = $filtrado[0].description;
    
    $tests = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=https://www.marvel.com/comics/characters/1009149/abyss?…piRef&utm_source=0d592ddd9b3e9ae4e0dc921206c938fd"
    $div_nome.innerHTML = "<h1>" + $filtrado[0].name +  "</h1>"
    $div_img.innerHTML = "<img height='350px' width='650px' src=" + $imagem + "." + "jpg >" + "</img>";
    $div_desc.innerHTML = $descricao;
    $div_qr.innerHTML = "<img height='200px' width='229px' src= https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=https://www.marvel.com/comics/characters/" + $id + "/" + $nome+ "?…piRef&utm_source=0d592ddd9b3e9ae4e0dc921206c938fd>" + "</img>";
}







