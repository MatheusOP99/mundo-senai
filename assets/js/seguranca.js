const allQuestions = [
    {
        question: "O que é segurança do trabalho?",
        answers: [
            "Maximizar o risco de acidentes",
            "Minimizar a produtividade",
            "Maximizar o custo de seguros",
            "Minimizar os riscos de acidentes e doenças no ambiente de trabalho"
        ],
        correct: 3,
        value: 2
    },
    {
        question: "Qual é o objetivo principal da CIPA (Comissão Interna de Prevenção de Acidentes)?",
        answers: [
            "Maximizar os riscos de acidentes",
            "Minimizar o uso de EPIs",
            "Maximizar a produção",
            "Minimizar os acidentes de trabalho"
        ],
        correct: 3,
        value: 4
    },
    {
        question: "O que é um DDS (Diálogo Diário de Segurança)?",
        answers: [
            "Uma pausa para café",
            "Uma reunião social",
            "Uma ferramenta para discutir tópicos de segurança no trabalho",
            "Um documento fiscal"
        ],
        correct: 2,
        value: 6
    },
    {
        question: "O que é um EPI (Equipamento de Proteção Individual)?",
        answers: [
            "Um equipamento de produção", 
            "Uma ferramenta de gestão", 
            "Um dispositivo para identificação de funcionários", 
            "Um equipamento destinado a proteger a saúde e a integridade física do trabalhador"
        ],
        correct: 3,
        value: 8
    },
    {
        question: "O que é o PCMSO (Programa de Controle Médico de Saúde Ocupacional)?",
        answers: [
            "Uma competição esportiva", 
            "Uma festa de confraternização", 
            "Um programa para controle de medicamentos", 
            "Um programa de prevenção de doenças relacionadas ao trabalho"
        ],
        correct: 3,
        value: 10
    },
    {
        question: "Qual é o papel da NR-10 (Norma Regulamentadora 10) na segurança do trabalho?",
        answers: [
            "Maximizar os riscos elétricos",
            "Minimizar o uso de eletricidade",
            "Estabelecer os requisitos e condições mínimas para garantir a segurança dos trabalhadores que lidam com eletricidade",
            "Minimizar a eficiência energética"
        ],
        correct: 2,
        value: 12
    },
    {
        question: "O que é um PPRA (Programa de Prevenção de Riscos Ambientais)?",
        answers: [
            "Um plano de pagamento de benefícios aos trabalhadores", 
            "Um programa de recreação para os funcionários", 
            "Um programa para identificação e controle de riscos ambientais no local de trabalho", 
            "Um plano de demissão voluntária"
        ],
        correct: 2,
        value: 14
    },
    {
        question: "O que é um acidente de trabalho?",
        answers: [
            "Uma situação desagradável", 
            "Um evento social na empresa", 
            "Um incidente sem importância", 
            "Um evento inesperado que causa lesão ou morte ao trabalhador no exercício de suas atividades"
        ],
        correct: 3,
        value: 16
    },
    {
        question: "O que significa EPC (Equipamento de Proteção Coletiva)?",
        answers: [
            "Equipamento para combate a incêndio", 
            "Equipamento para produção em larga escala", 
            "Equipamento para controle de estoque", 
            "Equipamento destinado à proteção de todos os trabalhadores em um determinado local"
        ],
        correct: 3,
        value: 18
    },
    {
        question: "O que é um Programa de Gerenciamento de Riscos (PGR) na segurança do trabalho?",
        answers: [
            "Um programa para aumentar os riscos no ambiente de trabalho", 
            "Um programa para reduzir a produtividade", 
            "Um programa para prevenir acidentes e doenças ocupacionais", 
            "Um programa para aumentar a carga de trabalho"
        ],
        correct: 2,
        value: 20
    },
    {
        question: "o que e um CAT?",
        answers: [
            "Um documento para realização de limpeza em um local", 
            "Um programa para previnir o acidente do trabalho", 
            "É um documento para o trabalhador que sofreu acidente de trabalho ou suspeita-se que tenha adquirido uma doença de trabalho", 
            "Um gato"
        ],
        correct: 2,
        value: 22
    },
    {
        question: "O que é um APR (Análise Preliminar de Risco) na segurança do trabalho?",
        answers: [
            "Um documento fiscal", 
            "Um plano de benefícios aos trabalhadores", 
            "Um processo para avaliar os riscos e estabelecer medidas de controle antes de iniciar uma atividade", 
            "Um procedimento para avaliar a produtividade dos funcionários"
        ],
        correct: 2,
        value: 24
    },
    {
        question: "O que é o Código de Cores na segurança do trabalho?",
        answers: [
            "Uma coleção de códigos de barra",
            "Um sistema de cores usado para identificar e alertar sobre riscos e informações em locais de trabalho", 
            "Um sistema de cores para identificar departamentos na empresa", 
            "Um sistema de cores para pintar máquinas"
        ],
        correct: 1,
        value: 26
    },
    {
        question: "Qual é a principal função do PPRA (Programa de Prevenção de Riscos Ambientais)?",
        answers: [
            "Organizar festas de confraternização",
            "Controlar o estoque de materiais",
            "Identificar e controlar riscos ambientais no local de trabalho",
            "Maximizar os riscos de acidentes"
        ],
        correct: 2,
        value: 28
    },
    {
        question: "O que é um Mapa de Risco na segurança do trabalho?",
        answers: [
            "Um mapa para indicar os locais para trabalhar", 
            "Um mapa para mostrar o caminho até o local de trabalho", 
            "Um mapa que representa graficamente os riscos presentes no ambiente de trabalho", 
            "Um mapa de trânsito"
        ],
        correct: 2,
        value: 30
    },
    {
        question: "O que significa LTCAT (Laudo Técnico das Condições Ambientais de Trabalho)?",
        answers: [
            "Lançamento de Trabalhos de Conclusão de Curso", 
            "Laudo Técnico que avalia a exposição do trabalhador a agentes nocivos no ambiente de trabalho", 
            "Laudo Técnico que avalia o uso de computadores no trabalho", 
            "Licença Temporária para Conduzir Assuntos de Trabalho"
        ],
        correct: 1,
        value: 32
    },
    {
        question: "Qual é a importância de treinamentos de segurança no trabalho?",
        answers: [
            "Maximizar o risco de acidentes", 
            "Minimizar a produtividade dos trabalhadores", 
            "Maximizar os custos operacionais", 
            "Minimizar os riscos de acidentes e doenças ocupacionais"
        ],
        correct: 3,
        value: 34
    },
    {
        question: "O que é um DDS (Diálogo Diário de Segurança)?",
        answers: [
            "Uma pausa para café", 
            "Uma reunião social", 
            "Uma ferramenta para discutir tópicos de segurança no trabalho", 
            "Um documento fiscal"
        ],
        correct: 2,
        value: 36
    },
    {
        question: "O que é um PCMSO (Programa de Controle Médico de Saúde Ocupacional)?",
        answers: [
            "Uma competição esportiva", 
            "Uma festa de confraternização", 
            "Um programa para controle de medicamentos", 
            "Um programa de prevenção de doenças relacionadas ao trabalho"
        ],
        correct: 3,
        value: 38
    },
    {
        question: "O que é um Programa de Gerenciamento de Riscos (PGR) na segurança do trabalho?",
        answers: [
            "Um programa para aumentar os riscos no ambiente de trabalho", 
            "Um programa para reduzir a produtividade", 
            "Um programa para prevenir acidentes e doenças ocupacionais", 
            "Um programa para aumentar a carga de trabalho"
        ],
        correct: 2,
        value: 40
    }
];

// Função para embaralhar um array usando o algoritmo de Fisher-Yates
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Embaralhe o array de todas as perguntas
shuffleArray(allQuestions);

// Elementos do DOM
const questionText = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const finalScoreValue = document.getElementById("final-score-value");
const correctAnswersValue = document.getElementById("correct-answers-value");
const wrongAnswersValue = document.getElementById("wrong-answers-value");
const finalMessage = document.getElementById("final-message");
const timerDisplay = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const progressBarContainer = document.getElementById("progress-container");
const quizElements = document.getElementById("quiz-elements");
const vida1 = document.getElementById("hidden1");
const vida2 = document.getElementById("hidden2");
const vida3 = document.getElementById("hidden3");

// Variáveis de controle do jogo
let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let timeLeft = 10;
let timerId;
let questionStartTime;
let timeIsUp = false;
let lives = 3; // Defina o número inicial de vidas
let live = 0; // Variável para rastrear as vidas usadas

// Adicione essa linha no início do seu código JavaScript para definir a variável 'hearts'.
const hearts = document.querySelectorAll(".heart");

// Número total de perguntas que você deseja responder
const totalQuestionsToAnswer = 10;

// Função para diminuir uma vida e atualizar a exibição
function decreaseLife() {
    if (lives > 0) {
        lives--;
        const heartToRemove = hearts[lives];
        heartToRemove.style.display = "none";
    }

    if (lives === 0) {
        endQuiz(); // Chame a função endQuiz quando o número de vidas chegar a zero
    }
}

// Função para iniciar o temporizador
function startTimer() {
    if (currentQuestion < totalQuestionsToAnswer) {
        timeLeft = 10;
        questionStartTime = Date.now();
        updateTimerDisplay();

        timerId = setInterval(() => {
            const elapsedTime = Date.now() - questionStartTime;
            const remainingTime = 10 - Math.floor(elapsedTime / 1000);

            if (remainingTime <= 0) {
                clearInterval(timerId);
                timeLeft = 0;
                updateTimerDisplay();
                checkTimeIsUp();
                disableAnswerButtons();
                wrongAnswers++;
                updateProgressBar();
            } else {
                timeLeft = remainingTime;
                updateTimerDisplay();
                updateProgressBar();
            }
        }, 1000);
    }
}

// Atualizar a exibição do temporizador
function updateTimerDisplay() {
    timerDisplay.textContent = `Tempo Restante: ${timeLeft} segundos`;
}

// Exibir a pergunta atual
function showQuestion(question) {
    questionText.textContent = question.question;

    question.answers.forEach((answer, index) => {
        answerButtons[index].textContent = answer;
        answerButtons[index].style.backgroundColor = "#3498db";
    });

    enableAnswerButtons();

    startTimer();

    // Verifique se é a última pergunta e oculte o botão "Próximo"
    if (live !==3){
        if (currentQuestion === totalQuestionsToAnswer - 1) {
            nextButton.style.display = "none";
        } else {
            nextButton.style.display = "block";
        }
    }
}

// Habilitar botões de resposta
function enableAnswerButtons() {
    answerButtons.forEach(button => {
        button.style.pointerEvents = "auto";
    });
}

// Desabilitar botões de resposta
function disableAnswerButtons() {
    answerButtons.forEach(button => {
        button.style.pointerEvents = "none";
    });
}

// Função para atualizar a barra de progresso
function updateProgressBar() {
    const percentage = ((currentQuestion + 1) / totalQuestionsToAnswer) * 100;
    progressBar.style.width = `${percentage}%`;

    if (currentQuestion === totalQuestionsToAnswer - 1) {
        progressBar.style.backgroundColor = "puple";
    }
}

function checkAnswer(selectedAnswer, value) {
    const currentQuestionObj = allQuestions[currentQuestion];

    if (!currentQuestionObj.answered) {
        clearInterval(timerId);
        if (selectedAnswer === currentQuestionObj.correct) {
            score += value;
            answerButtons[selectedAnswer].style.backgroundColor = "#27ae60";
            correctAnswers++;
        }
        else {
            answerButtons[selectedAnswer].style.backgroundColor = "#e74c3c";
            answerButtons[currentQuestionObj.correct].style.backgroundColor = "#27ae60";
            wrongAnswers++;
            if (!timeIsUp) {
                decreaseLife();
            }
        }

        currentQuestionObj.answered = true;
        disableAnswerButtons();
        updateProgressBar();

        if (live !== 3) {
            if (currentQuestion === totalQuestionsToAnswer - 1) {
                endQuiz()
            }
            else {
                nextButton.style.display = "block";
            }
        }
    }
}

// Adicione esta função para exibir o botão "Próxima Pergunta"
function showNextQuestionButton() {
    nextButton.style.display = "block";
}

// Função para verificar se o tempo se esgotou
function checkTimeIsUp() {
    const currentQuestionObj = allQuestions[currentQuestion];

    if (!currentQuestionObj.answered) {
        answerButtons[currentQuestionObj.correct].style.backgroundColor = "#27ae60";
        disableAnswerButtons();
        showNextQuestionButton();

        if (!currentQuestionObj.timePenalty) {
            decreaseLife(); // Remova uma vida apenas se uma penalidade de tempo ainda não foi aplicada
            currentQuestionObj.timePenalty = true; // Marque que uma penalidade de tempo foi aplicada
        }
    }
}

// Avançar para a próxima pergunta
nextButton.addEventListener("click", () => {
    if (currentQuestion < totalQuestionsToAnswer - 1) {
        currentQuestion++;
        showQuestion(allQuestions[currentQuestion]);
        nextButton.style.display = "none";

        if (currentQuestion === totalQuestionsToAnswer - 1) {
            progressBar.style.backgroundColor = "purple";
        }
    }
    else {
        endQuiz();
    }
});

// Função para verificar se o tempo acabou
function checkTimeIsUp() {
    const currentQuestionObj = allQuestions[currentQuestion];

    if (!currentQuestionObj.answered && timeLeft === 0) {
        decreaseLife(); // Remova uma vida apenas quando o tempo se esgotar
        currentQuestionObj.answered = true;
        showNextQuestionButton();
    }
    
    if (live !== 3) {
        if (currentQuestion < totalQuestionsToAnswer - 1) {
            nextButton.style.display = "block";
            answerButtons[currentQuestionObj.correct].style.backgroundColor = "#27ae60";
            disableAnswerButtons();
            currentQuestionObj.timePenalty = true;
        }
        updateProgressBar();
    } else {
        endQuiz();
    }
}

// Função para exibir a mensagem com base na porcentagem de acertos
function getFinalMessage(correctPercentage) {
    if (correctPercentage === 0) {
        return "Por que você iniciou este quiz?";
    } else if (correctPercentage <= 20) {
        return "O caminho é longo!";
    } else if (correctPercentage <= 40) {
        return "Talvez você esteja no caminho!";
    } else if (correctPercentage <= 60) {
        return "Um pouco mais de esforço e você consegue!";
    } else if (correctPercentage <= 80) {
        return "Um futuro Técnico de Informática?";
    } else if (correctPercentage <= 99) {
        return "Diploma a caminho!";
    } else {
        return "Você é um Técnico de Informática!";
    }
}

// Função para exibir a pontuação final e a mensagem final
function endQuiz() {
    container.style.display = "none"
    quizInProgess = false;
    questionText.textContent = "Quiz concluído!";
    timerDisplay.style.display = "none"; // Ocultar o temporizador

    resultContainer.style.display = "block";
    progressBarContainer.style.display = "block"; // Manter a barra de progresso visível

    const correctPercentage = (correctAnswers / totalQuestionsToAnswer) * 100;

    finalScoreValue.textContent = `${correctPercentage.toFixed(2)}%`;
    correctAnswersValue.textContent = correctAnswers;
    wrongAnswersValue.textContent = wrongAnswers; // Exibir o número correto de respostas erradas

    finalMessage.textContent = getFinalMessage(correctPercentage);
    startQuizButton1.style.display = "block";
    // Ocultar o botão "Próxima Pergunta" na última pergunta
    if (currentQuestion === totalQuestionsToAnswer - 1) {
        nextButton.style.display = "none";
    }
}

// Variável de controle para verificar se o quiz está em andamento
let quizInProgess = false;

// Adicione esta função para iniciar o quiz
function startQuiz() {
    startQuizButton.style.display = "none"; // Oculta o botão "Iniciar Quiz"
    showQuestion(allQuestions[currentQuestion]);
    startTimer();
    nextButton.style.display = "none";
    resultContainer.style.display = "none";
    progressBarContainer.style.display = "block";
    updateProgressBar();
    correctAnswers = 0;
    wrongAnswers = 0;
    enableAnswerButtons(); // Habilita os botões de resposta
    quizInProgess = true; // Marque que o quiz está em andamento
}

// Função para habilitar os botões de resposta
function enableAnswerButtons() {
    answerButtons.forEach(button => {
        if (quizInProgess = true) {
            button.style.pointerEvents = "auto";
        } else {
            button.style.pointerEvents = "none"; // Impede que os botões sejam clicados antes de iniciar o quiz
        }
    });
}

// Lidar com cliques nos botões de resposta
answerButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (quizInProgess) { // Verifique se o quiz está em andamento antes de verificar a resposta
            checkAnswer(index, allQuestions[currentQuestion].value);
        }
    });
});

// Elemento do botão "Iniciar Quiz"
const startQuizButton = document.getElementById("start-quiz-button");
const startQuizButton1 = document.getElementById("start-quiz-button1");
const container = document.getElementById("container");
startQuizButton1.addEventListener("click", function() {
    
    location.reload();
});
// Adicione um manipulador de eventos para o botão "Iniciar Quiz"
startQuizButton.addEventListener("click", startQuiz);