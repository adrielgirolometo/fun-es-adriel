const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-principal");
const caixaAlternativasa = document.querySelector(".caixa-principal");
const caixaResultado = document.querySelector(".caixa-principal");
const textoResultado = document.querySelector(".texto-principal");




const perguntas = [
    {
        enunciado: "nos tempos de hoje, qual corte se encaixa melhor em você",
        alternativas: [
            {
                texto: "Tradicional",
                afirmacao: "Pela praticidade, cortes mais simples são geralmente mais faceis de se usar no dia a dia",
            },
            {
                texto: "Sofisticado",
                afirmacao: "tendençia de moda, algumas pessoas são influenciadas pot tendençias atuais e querer experimentar estilos que estão em alta",
            }
        ]
    },
    {
        enunciado: " quando você corta seu cabelo, custuma se espelhar em outras pessoas ",
        alternativas: [
            {
                texto: "sim,busco referençias  ",
                afirmacao: "você costuma se espelhar em outras pessoas e assim busca inspirações para realizar seus cortes "
            },
            {
                texto: "não, prefiro manter meu próprio estilo,sem referençias "
                afirmacao: "você e uma pessoa que prefere manter seu próprio estilo sem buscvar referençias em outras pessoas, isso garante a sua",
            }
        ]
    },
    {
        enunciado: "qual tipo de cuidado ",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
    {
        enunciado: " Pergunta?",
        alternativas: [
            {
                texto: " Texto/resposta ",
                afirmacao: "Afirmação",
            },
            {
                texto: " Texto/resposta ",
                afirmacao: " Afirmação ",
            }
        ]
    },
];


