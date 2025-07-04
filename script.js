const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está caminhando pelo parque e vê um rio poluído com plástico e lixo. Qual sua primeira reação?",
        alternativas: [
            {
                texto: "Fico triste, mas acho que não posso fazer nada sozinho.",
                afirmacao: "No início, sentiu-se impotente diante do problema ambiental."
            },
            {
                texto: "Penso em organizar uma ação para limpar o rio.",
                afirmacao: "Decidiu agir e mobilizar a comunidade para cuidar do meio ambiente."
            }
        ]
    },
    {
        enunciado: "Sua escola está planejando um projeto sobre sustentabilidade. Qual sua contribuição?",
        alternativas: [
            {
                texto: "Proponho a criação de uma horta comunitária usando compostagem.",
                afirmacao: "Inspirou a escola a adotar práticas sustentáveis com a horta."
            },
            {
                texto: "Sugiro palestras sobre consumo consciente.",
                afirmacao: "Conscientizou colegas sobre como reduzir desperdícios no dia a dia."
            }
        ]
    },
    {
        enunciado: "Seu bairro debate a instalação de painéis solares em espaços públicos. Como você participa?",
        alternativas: [
            {
                texto: "Defendo a ideia, mostrando que energia limpa reduz custos e poluição.",
                afirmacao: "Tornou-se um ativista por energias renováveis na comunidade."
            },
            {
                texto: "Questiono se o investimento vale a pena e proponho mais estudos.",
                afirmacao: "Promoveu debates técnicos para decisões mais informadas."
            }
        ]
    },
    {
        enunciado: "Um amigo diz que 'reciclar não faz diferença'. Como responde?",
        alternativas: [
            {
                texto: "Mostro dados de quanto lixo deixa de ir para aterros com a reciclagem.",
                afirmacao: "Usou fatos para combater desinformação ambiental."
            },
            {
                texto: "Levo ele a um centro de reciclagem para ver o processo na prática.",
                afirmacao: "Transformou ceticismo em ação concreta através da experiência."
            }
        ]
    },
    {
        enunciado: "Você vê uma loja vendendo produtos com embalagens plásticas desnecessárias. O que faz?",
        alternativas: [
            {
                texto: "Compro e reclamo depois nas redes sociais.",
                afirmacao: "Ainda não conseguiu aliar consumo à sua consciência ecológica."
            },
            {
                texto: "Falo com o gerente e sugiro alternativas sustentáveis.",
                afirmacao: "Virou um consumidor crítico e agente de mudança no comércio local."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2050...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
