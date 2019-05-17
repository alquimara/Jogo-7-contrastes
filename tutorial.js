
let proximo = document.getElementsByTagName("button")[0];
let imagem = document.getElementById("imagem");
let titulo1 = document.getElementById("titulo1");
let conteudo = document.getElementsByTagName("h3")[0];


let count = 0;

proximo.addEventListener('click', function(){
    let titulos = [
        "circulo cromático",
        "de matiz",
        "claro-escuro",
        "quente-frio",
        "complementares",
        "simutâneo",
        "de saturação",
        "de extensão"
    ]


    let conteudos = [
        "circulo cromático círculo cromático é composto pelas as cores primárias, secundárias e terciárias.As cores primárias são cores puras, que não foram criadas pela a combinação de outras cores. As cores secundárias são cores criadas pela a combinação das cores primárias. As cores terciárias são cores criadas pela a combinação das cores secundárias.",
        "É obtido quando você combina cores puras e luminosas claramente distintas. Quanto mais viva as cores forem, mais forte será o seu contraste, sendo as cores  primárias consideradas o mais forte contraste.",
        "É obtido quando se opõem cores claras e escuras. O contraste mais nítido é o preto e branco.",
        "É obtido quando se opõem cores quentes e fria. Contraste visual de temperatura de cor, em que é possível uma cor quente parecer fria e vice versa.",
        "É obtido quando se opõem cores oposta do círculo cromático. Quando misturada eles tendem a se neutralizar.",
        "É obtido pela a influência que cada cor exerce em outra, pela a justaposição. Para cada cor o olho gera simultaneamente a cor complementar.",
        "É obtido quando se opõem cores saturadas e dessaturada.",
        "É obtido de acordo com a área que as cores ocupam, referente sua intensidade. De forma que existe uma cor predominante sobre a outra. Uma cor mais intensa ocupa menos espaço que uma menos intensa."
    ]
  
    let srcResponse = document.getElementById("imagem").getAttribute("src");

    let aux = srcResponse.split("/")[1].substring(0, 3);
    let a = aux.split("_")[0];
    let position = (parseInt(a)+1);
    let value = aux.split("_")[1];
        
   if(position<=8){
    let src1 = "imgExemplos/" + position + "_" + "e" +".jpg"
    console.log(src1);
  
    imagem.setAttribute('src', src1);

    
    titulo1.innerHTML = "contraste " + titulos[a];
    titulo2.innerHTML = "contraste " + titulos[a];
    titulo3.innerHTML = "contraste " + titulos[a];
    conteudo.innerHTML= conteudos[a];
    console.log(titulo1);
   }
   if(position > 8){
    proximo.onclick(window.location.href="index.html");
   }

   
})