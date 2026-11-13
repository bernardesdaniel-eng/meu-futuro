// Dados de cada etapa da carreira militar
const etapas = {
    quartel: {
        patenteHud: "PATENTE: RECRUTA / SOLDADO",
        tempoHud: "ETAPA 1: INGRESSO",
        titulo: "O Primeiro Passo: Entrar no Quartel",
        descricao: "A base de toda a jornada. É o momento de cruzar os portões do quartel, aprender a disciplina militar, superar limites físicos e mentais, e conquistar o direito de vestir a farda com orgulho.",
        progresso: "33%",
        corCapacete: "#143314", // Verde escuro padrão
        velocidadeMarcha: "0.5s",
        divisaSvg: "" // Sem divisas de comando ainda
    },
    sargento: {
        patenteHud: "PATENTE: SARGENTO",
        tempoHud: "ETAPA 2: DAQUI A 10 ANOS",
        titulo: "Liderança na Tropa: Sargento (10 Anos)",
        descricao: "Com uma década de experiência, estudo e dedicação, alcanço a graduação de Sargento. Agora sou o elo fundamental entre o comando e a tropa, instruindo novos soldados e liderando missões em campo.",
        progresso: "66%",
        corCapacete: "#1f521f", // Verde mais destacado
        velocidadeMarcha: "0.42s", // Marcha mais firme e rápida
        // Desenha divisas de Sargento no ombro
        divisaSvg: `
            <polyline points="54,72 60,67 66,72" fill="none" stroke="#00ff41" stroke-width="2"/>
            <polyline points="54,77 60,72 66,77" fill="none" stroke="#00ff41" stroke-width="2"/>
            <polyline points="54,82 60,77 66,82" fill="none" stroke="#00ff41" stroke-width="2"/>
        `
    },
    tenente: {
        patenteHud: "PATENTE: OFICIAL TENENTE",
        tempoHud: "ETAPA 3: DAQUI A 15 ANOS",
        titulo: "Oficialato e Comando: Tenente (15 Anos)",
        descricao: "Quinze anos de perseverança culminam no oficialato como Tenente. Assumo o comando de pelotões, planejamento estratégico e tomada de decisões de alto nível, honrando cada etapa vencida até aqui.",
        progresso: "100%",
        corCapacete: "#006622", // Verde oficial
        velocidadeMarcha: "0.38s",
        // Desenha estrelas de Tenente no ombro
        divisaSvg: `
            <circle cx="60" cy="70" r="3" fill="#00ff41"/>
            <circle cx="60" cy="80" r="3" fill="#00ff41"/>
        `
    }
};

// Selecionando elementos do HTML
const botoes = document.querySelectorAll('.btn-etapa');
const patenteHud = document.getElementById('patente-atual');
const tempoHud = document.getElementById('tempo-atual');
const tituloEtapa = document.getElementById('titulo-etapa');
const descricaoEtapa = document.getElementById('descricao-etapa');
const barraProgresso = document.getElementById('barra-progresso');

// Elementos do Soldado SVG
const capacete = document.getElementById('capacete');
const patenteVisual = document.getElementById('patente-visual');
const soldadoContainer = document.getElementById('soldado-container');
const pernaFrente = document.getElementById('perna-frente');
const pernaTras = document.getElementById('perna-tras');
const bracoFrente = document.getElementById('braco-frente');

// Função para atualizar a tela conforme o botão clicado
function atualizarEtapa(chave) {
    const dados = etapas[chave];

    // Atualiza textos
    patenteHud.textContent = dados.patenteHud;
    tempoHud.textContent = dados.tempoHud;
    tituloEtapa.textContent = dados.titulo;
    descricaoEtapa.textContent = dados.descricao;
    barraProgresso.style.width = dados.progresso;

    // Atualiza visual do soldado (capacete e divisas)
    capacete.setAttribute('fill', dados.corCapacete);
    patenteVisual.innerHTML = dados.divisaSvg;

    // Ajusta o ritmo da marcha
    soldadoContainer.style.animationDuration = dados.velocidadeMarcha;
    pernaFrente.style.animationDuration = dados.velocidadeMarcha;
    pernaTras.style.animationDuration = dados.velocidadeMarcha;
    bracoFrente.style.animationDuration = dados.velocidadeMarcha;
}

// Adiciona evento de clique em cada botão
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remove a classe 'ativo' de todos os botões
        botoes.forEach(b => b.classList.remove('ativo'));
        
        // Adiciona 'ativo' no botão clicado
        botao.classList.add('ativo');

        // Pega o nome da etapa e atualiza o site
        const etapaSelecionada = botao.getAttribute('data-etapa');
        atualizarEtapa(etapaSelecionada);
    });
});