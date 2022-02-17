//memória potente

//variáveis dos botões do menu
var hb; //altura do botão
var lb; //largura do botão
var yb1; //posição do botão Iniciar
var yb2; //posição do botão Instruções
var yb3; //posição do botão Créditos
var xb; //posição x do botão 
var pb; // para o arredondamento das pontas do botão; entra como um quinto parâmetro

//variáveis do botão voltar
var xbvoltar; 
var ybvoltar;
var hbvoltar;
var lbvoltar;

//variáveis da cartav
var cartavirada; 
var imgfundocarta; 
var imgcartas = [];
var matrizimgcartas = [];
var matrizcartasviradas = [];
var lc = 90 //largura da carta
var hc = 90 //altura da carta
var xprimeiracarta = 25;
var yprimeiracarta = 20;



var tela = 0; //indica qual das telas do jogo será mostrada

var menu1 = 50;
var menu2 = 85;
var menu3 = 145;
var h = 400;  //height = altura da tela do jogo
var w = 400; //widht = largura da tela do jogo


//variáveis que serão carregadas
var fontLilita;
var imgmenu;
var imgfundo;
var imgcreditos;
var imginstrucoes;
var imgalice;

//para carregar arquivos
function preload(){
  fontLilita = loadFont("fonts/LilitaOne-Regular.ttf")
  imgmenu = loadImage("images/menu.jpeg")
  imgfundo = loadImage("images/fundo.jpeg")
  imgcreditos = loadImage("images/creditos.jpeg")
  imginstrucoes = loadImage("images/instrucoes.jpeg")
  imgalice = loadImage("images/alice.jpeg")
  imgfundocarta = loadImage("images/fundocarta.jpeg")

  //carregando as cartas
  for(i=1; i<=8; i++){
      tempImg = loadImage("images/cards/"+i+".jpeg")
      imgcartas.push(tempImg)
      tempImg = loadImage("images/cards/"+i+".1.jpeg")
      imgcartas.push(tempImg);
  }
  cont=0;
  //linhas e colunas da matriz de cartas 
  for (l=0; l<4; l++){
      tempImgLinha = [];
      tempVcartavirada = [];
      for (c=0; c<4; c++){
          tempImgLinha[c] = imgcartas[cont];
          tempVcartavirada[c] = false; //o tabuleiro deve começar com as cartas desviradas
          cont++; 
      }
      matrizcartasviradas[l] = tempVcartavirada;
      matrizimgcartas[l] = tempImgLinha; 
  }

  console.log(matrizcartasviradas);
}

//ajustes na tela inicial do jogo
function setup() {
  createCanvas(400, 400);
  cartavirada = true; //não tá virada
  xb = 100;
  yb1 = 160;
  yb2 = 230;
  yb3 = 300;
  ybvoltar = 350;
  xbvoltar = 300;
  hbvoltar = 40;
  lbvoltar = 70;
  lb= 200;
  hb = 60;
  pb = 12;
  
  console.log(imgcartas.length);
}

//para converter a posicao do mouse para posicao na matriz
function mouseparamatriz(mx,my){
    mx = mx - xprimeiracarta;
    my = my - yprimeiracarta;
    let posicaocoluna = parseInt(mx/lc)
    let posicaolinha = parseInt(my/hc)
    console.log(posicaolinha+" "+posicaocoluna);
    posLC = [];
    posLC[0] = posicaolinha
    posLC[1] = posicaocoluna
    return posLC;
}

  
function mostraCartas(){ 
    let yposicarta = yprimeiracarta;
    for (l=0; l<4; l++){
        let xposicarta = xprimeiracarta
        for(c=0; c<4; c++){
            if(matrizcartasviradas[l][c]){
                image(matrizimgcartas[l][c],xposicarta,yposicarta);
            } 
            else{
                image(imgfundocarta,xposicarta,yposicarta,80,80)
            }
            xposicarta = xposicarta + lc
        }
        yposicarta = yposicarta + hc
    }
}


function telaJogo(){
    background(imgfundo);  
    mouseparamatriz(mouseX,mouseY);
    if(cartavirada)
        image(imgcartas[0],25,20,80,80)
    else
        image(imgfundocarta,25,20,80,80)
    mostraCartas();
}


function telaInstrucoes(){
    background(imginstrucoes);
    fill(0);
    textSize(28);

}   


function telaCreditos(){
    background(imgcreditos);
    image(imgalice,15, 130, 135,153); //os números indicam a posicao da imagem e as dimensoes dela
    textFont(fontLilita)

    fill(213,0,0);
    textSize(32);
    text("Alice Victorino", 160, 155);

    fill(0);
    textSize(20);
    text("Programadora", 160, 180);

    fill(0);
    textSize(20);
    text("Estudante do Bacharelado em Ciência e Tecnologia na Universidade Federal do Rio Grande do Norte", 160, 205, 240);
        

}


function botaoVoltar(){
    //regulando o que acontece com o botão voltar
    if (mouseY > ybvoltar && mouseY < ybvoltar + hbvoltar && mouseX > xbvoltar && mouseX < xbvoltar +lbvoltar){
        fill(10,100,255,100) //cor do botão quando mouse passa em cima
        if(mouseIsPressed){
            tela = 0;
        }
    }
    else{
        fill(70,130,255) //cor do botão sem mouse em cima
    }
    rect(xbvoltar+20,ybvoltar+15,lbvoltar-10,hbvoltar-10,pb);
    textSize(15);
    fill(0); //cor do nome 'voltar'
    text("voltar", xbvoltar+30, ybvoltar+35);  
}


//estrutura do menu (botões e etc)
function draw() {
    if (tela == 0){
      background(imgmenu);
      textSize(28);
      textFont(fontLilita);
      

      //animação
      fill(70,130,255);
      if (mouseY > yb1 && mouseY < yb1 + hb && mouseX > xb && mouseX < xb +lb){
          fill(10,100,255,100);
      }
      rect(xb,yb1,lb,hb,pb);
      
      fill(0);
      text("iniciar",xb+60,yb1+40);
      fill(70,130,255);


      if (mouseY > yb2 && mouseY < yb2 + hb && mouseX > xb && mouseX < xb + lb){
          fill(10,100,255,100);
      }
      rect(xb,yb2,lb,hb,pb);
      
      fill(0);
      text("instruções",xb+38,yb2+40);
      fill(70,130,255); 


      if (mouseY > yb3 && mouseY < yb3 + hb && mouseX > xb && mouseX < xb + lb){
      fill(10,100,255,100);
      }
      rect(xb,yb3,lb,hb,pb);

      fill (0);
      text("créditos",xb+50,yb3+40);
      fill(70,130,255);
     }

    //tela de jogar
    if (tela == 1){
      
    telaJogo();

        
    botaoVoltar();
    }

    //tela de instruções
    if (tela == 2){
        telaInstrucoes();
        botaoVoltar();
        
    }


    //tela de créditos
    if (tela === 3){
        telaCreditos();
        botaoVoltar();   
    }
}

//tudo que for relativo ao clique ficará concentrado no mouseClicked
function mouseClicked(){
    if (tela == 0){ 
        if (mouseY > yb1 && mouseY < yb1 + hb && mouseX > xb && mouseX < xb +lb){
         console.log("Botão Iniciar");
         tela = 1;
        }

        if (mouseY > yb2 && mouseY < yb2 + hb && mouseX > xb && mouseX < xb + lb){
         console.log("Botão Instruções");
         tela =  2;
        }
        
         if (mouseY > yb3 && mouseY < yb3 + hb && mouseX > xb && mouseX < xb + lb){
         console.log("Botão Créditos");
         tela = 3;
        }
        else { 
            if (tela == 1){
                cartavirada = ! cartavirada
                linhacoluna = mouseparamatriz(mouseX,mouseY);
                console.log(linhacoluna);
                matrizcartasviradas[linhacoluna[0]][linhacoluna[1]];
            }
        }
    }
}

function keyPressed(){
    if(tela === 1 || tela === 2 || tela === 3){
        if( keyCode === ESCAPE ){
            tela = 0;
        }
    }
}



