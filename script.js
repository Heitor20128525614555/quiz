// ==========================
// ELEMENTOS
// ==========================

const telaInicial = document.getElementById("tela-inicial");
const telaQuiz = document.getElementById("tela-quiz");
const telaFinal = document.getElementById("tela-final");

const btnComecar = document.getElementById("btnComecar");
const btnReiniciar = document.getElementById("btnReiniciar");

const pergunta = document.getElementById("pergunta");
const opcoes = document.querySelectorAll(".opcao");

const contador = document.getElementById("contador");
const progresso = document.getElementById("progresso");

const mensagem = document.getElementById("mensagem");
const pontos = document.getElementById("pontos");

const resultadoFinal = document.getElementById("resultadoFinal");
const acertosFinal = document.getElementById("acertosFinal");
const errosFinal = document.getElementById("errosFinal");


// ==========================
// CONTROLE
// ==========================

let indiceAtual = 0;
let pontuacao = 0;


// ==========================
// PERGUNTAS
// ==========================
 
const perguntas = [
 
 {
  pergunta: "Qual é a capital do Brasil?",
  opcoes: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
  correta: 0
 },
 
 {
  pergunta: "Quanto é 7 x 8?",
  opcoes: ["54", "56", "58", "64"],
  correta: 1
 },
 
 {
  pergunta: "Qual planeta é conhecido como Planeta Vermelho?",
  opcoes: ["Terra", "Marte", "Júpiter", "Saturno"],
  correta: 1
 },
 
 {
  pergunta: "Quem pintou a Mona Lisa?",
  opcoes: ["Pablo Picasso", "Leonardo da Vinci", "Michelangelo", "Van Gogh"],
  correta: 1
 },
 
 {
  pergunta: "Qual é o maior oceano do mundo?",
  opcoes: ["Atlântico", "Índico", "Pacífico", "Ártico"],
  correta: 2
 },
 
 // NOVAS PERGUNTAS
 
 {
  pergunta: "Qual é o maior planeta do Sistema Solar?",
  opcoes: ["Terra", "Júpiter", "Marte", "Mercúrio"],
  correta: 1
 },
 
 {
  pergunta: "Quantos continentes existem no mundo?",
  opcoes: ["5", "6", "7", "8"],
  correta: 2
 },
 
 {
  pergunta: "Qual animal é conhecido como Rei da Selva?",
  opcoes: ["Leão", "Tigre", "Elefante", "Urso"],
  correta: 0
 },
 
 {
  pergunta: "Qual é a fórmula da água?",
  opcoes: ["CO2", "H2O", "O2", "NaCl"],
  correta: 1
 },
 
 {
  pergunta: "Quem descobriu o Brasil em 1500?",
  opcoes: ["Cristóvão Colombo", "Pedro Álvares Cabral", "Dom Pedro I", "Vasco da Gama"],
  correta: 1
 },
 
 {
  pergunta: "Quantos lados tem um hexágono?",
  opcoes: ["4", "5", "6", "8"],
  correta: 2
 },
 
 {
  pergunta: "Qual é o maior animal do planeta?",
  opcoes: ["Elefante", "Baleia-azul", "Tubarão", "Girafa"],
  correta: 1
 },
 
 {
  pergunta: "Qual é a capital da Itália?",
  opcoes: ["Roma", "Paris", "Madrid", "Londres"],
  correta: 0
 },
 
 {
  pergunta: "Qual é o idioma mais falado no Brasil?",
  opcoes: ["Inglês", "Espanhol", "Português", "Francês"],
  correta: 2
 },
 
 {
  pergunta: "Quantos minutos tem uma hora?",
  opcoes: ["30", "45", "60", "100"],
  correta: 2
 },
 
 {
  pergunta: "Quantas copas do mundo o Brasil tem?",
  opcoes: ["7", "5", "2", "4"],
  correta: 1
 },
 
 {
  pergunta: "Quantos dissipulos Jesus tinha?",
  opcoes: ["10", "5", "12", "4"],
  correta: 2
 },
 
 {
  pergunta: "Qual é o ultimo livro da biblia?",
  opcoes: ["Mateus", "Gênesis", "Apocalipse", "João"],
  correta: 2
 },
 
 {
  pergunta: "Quem teve a visão do Apocalipse?",
  opcoes: ["João", "Pedro", "Mateus", "Tiago"],
  correta: 0
 },
 
 {
  pergunta: "Qual é o time considerado o melhor do mundo?",
  opcoes: ["Atletico de Madrid", "Baier de Munick", "Manchester City", "Real Madri"],
  correta: 3
 },
 
{
 pergunta: "Qual é o maior país do mundo em território?",
 opcoes: ["Brasil", "Rússia", "China", "Estados Unidos"],
 correta: 1
},

{
 pergunta: "Qual é o nome do processo que as plantas usam para produzir seu alimento?",
 opcoes: ["Respiração", "Fotossíntese", "Digestão", "Evaporação"],
 correta: 1
},

{
 pergunta: "Qual é a capital de Portugal?",
 opcoes: ["Lisboa", "Porto", "Madrid", "Coimbra"],
 correta: 0
},

{
 pergunta: "Quantos dias tem um ano comum?",
 opcoes: ["300", "365", "400", "366"],
 correta: 1
},

{
 pergunta: "Qual instrumento mede a temperatura?",
 opcoes: ["Bússola", "Termômetro", "Relógio", "Microscópio"],
 correta: 1
},

{
 pergunta: "Quem traiu Jesus?",
 opcoes: ["Pedro", "Judas", "João", "Mateus"],
 correta: 1
},

{
 pergunta: "Qual e o principal motivo das poluições?",
 opcoes: ["lixo e queimas", "os cfcs", "o sol", "detritos espaciais"],
 correta: 0
},

{
 pergunta: "Qual e a estrela mais velha do universo",
 opcoes: ["estrela de matusalen", "beteujuise", "estiferson218", "um quasar"],
 correta: 0
}
 
];


// ==========================
// MOSTRAR PERGUNTA
// ==========================

function mostrarPergunta() {
 
 pergunta.textContent =
  perguntas[indiceAtual].pergunta;
 
 
 contador.textContent =
  `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
 
 
 progresso.style.width =
  `${((indiceAtual + 1) / perguntas.length) * 100}%`;
 
 
 mensagem.textContent = "";
 
 
 opcoes.forEach((botao, index) => {
  
  botao.textContent =
   perguntas[indiceAtual].opcoes[index];
  
 });
 
}


// ==========================
// COMEÇAR QUIZ
// ==========================

btnComecar.addEventListener("click", () => {
 
 
 telaInicial.style.display = "none";
 
 telaQuiz.style.display = "block";
 
 mostrarPergunta();
 
 
});


// ==========================
// RESPONDER
// ==========================

opcoes.forEach((botao, index) => {
 
 
 botao.addEventListener("click", () => {
  
  
  if (index === perguntas[indiceAtual].correta) {
   
   
   pontuacao++;
   
   pontos.textContent = pontuacao;
   
   mensagem.textContent = "✅ Acertou!";
   
   
  } else {
   
   
   let resposta =
    perguntas[indiceAtual].opcoes[
     perguntas[indiceAtual].correta
    ];
   
   
   mensagem.textContent =
    `❌ Errou! Resposta: ${resposta}`;
   
   
  }
  
  
  // bloqueia os botões
  
  opcoes.forEach(btn => {
   btn.disabled = true;
  });
  
  
  setTimeout(() => {
   
   
   indiceAtual++;
   
   
   if (indiceAtual < perguntas.length) {
    
    
    mostrarPergunta();
    
    
    opcoes.forEach(btn => {
     btn.disabled = false;
    });
    
    
   } else {
    
    
    telaQuiz.style.display = "none";
    
    telaFinal.style.display = "block";
    
    
    resultadoFinal.textContent =
     `Você fez ${pontuacao} de ${perguntas.length} pontos!`;
    
    
    acertosFinal.textContent = pontuacao;
    
    
    errosFinal.textContent =
     perguntas.length - pontuacao;
    
    
   }
   
   
  }, 1000);
  
  
  
 });
 
 
});



// ==========================
// JOGAR NOVAMENTE
// ==========================

btnReiniciar.addEventListener("click", () => {
 
 
 indiceAtual = 0;
 
 pontuacao = 0;
 
 
 pontos.textContent = "0";
 
 mensagem.textContent = "";
 
 
 progresso.style.width = "0%";
 
 
 telaFinal.style.display = "none";
 
 telaInicial.style.display = "block";
 
 
});
