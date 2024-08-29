const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em sua visão, a IA é benéfica para a sociedade nos dias atuais?",
        alternativas: [
            {
                texto: "Sim,pois existem vários programas que facilitam os trabalhos profissionais e na escola também, além das outras diversas tecnologia avançadas que a IA nos proporcionou, como os carros autônomos, por exemplo",
                afirmação: "Obrigado!"
            }, 
            {
                texto: "Não, eu acredito que a IA tenha nos deixado cada vez menos indepentes e preguiçosos, tendo em vista que não precisamos mais nos esforçar e pensar para realizar atividades de grande desempenho, também nos deixando longe do contato e conversa com outras pessoas fisicamente",
                afirmação: "Obrigado!"
            }
        ]
    },
    {
        enunciado: "Você acredita que possui algum perigo ético relacionado às tecnologias?",
        alternativas: [
            {
                texto: "Sim, a invasão de privacidade e os golpes comprovam isso.",
                afirmação: "Obrigado!"
            },
            {
                texto: "Não, hoje em dia as tecnologias estão avançadas o suficiente para previnir tais questões.",
                afirmação: "Obrigado!"
            }
        ]
    },
    {
        enunciado: "Na sua opinião, a inteligência artificial é perigosa para nós humanos?",
        alternativas: [
            {
                texto: "Não, pois somos nós que controlamos as máquinas, elas não fazem nada sozinhas.",
                afirmação: "Obrigado!"
            },
            {
                texto: "Sim, acredito que as máquinas ainda vão dominar a humanidade.",
                afirmação: "Obrigado!"
            }
        ]
    },
    {
        enunciado: "Para você, a IA irá gerar mais ou menos empregos no futuro?",
        alternativas: [
            {
                texto: "Acredito que a área de TI irá crescer muito, gerando muito mais possibilidades de empregos e profissões,",
                afirmação: "Obrigado!"
            },
            {
                texto: "Acredito que as máquinas irão gerar muito desemprego futuramente, visando que substituirão muitos serviços realizados por nós.",
                afirmação: "Obrigado!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "Obrigado!";

function mostraPergunta() {
    if(atual >= perguntas.length){

        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afiramcoes + " ";
        atual++;
        mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Obrigado pela colaboração!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
    


































