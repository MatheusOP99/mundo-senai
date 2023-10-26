const allQuestions = [
    {
        question: "O que é um computador?",
        answers: ["Uma máquina que processa informações", "Um dispositivo que armazena dados", "Um aparelho que gera imagens", "Um objeto que conecta pessoas"],
        correct: 0,
        value: 1,
        answered: false
    },
    {
        question: "Qual é o componente principal de um computador?",
        answers: ["A memória", "O disco rígido", "A placa-mãe", "O processador"],
        correct: 3,
        value: 1,
        answered: false
    },
    {
        question: "Qual é o tipo de software que controla o hardware do computador?",
        answers: ["Utilitário", "Aplicativo", "Driver", "Sistema operacional"],
        correct: 3,
        value: 1,
        answered: false
    },
    {
        question: "Qual é o tipo de software que executa tarefas específicas?",
        answers: ["Sistema operacional", "Aplicativo", "Driver", "Utilitário"],
        correct: 1,
        value: 1,
        answered: false
    },
    {
        question: "Qual é o tipo de software que ajuda os usuários a solucionar problemas?",
        answers: ["Driver", "Aplicativo", "Sistema operacional", "Utilitário"],
        correct: 3,
        value: 1,
        answered: false
    },
    {
        question: "Qual é o dispositivo de entrada que permite aos usuários digitar texto?",
        answers: ["Impressora", "Monitor", "Mouse", "Teclado"],
        correct: 3,
        value: 1,
        answered: false
    },
    {
        question: "Qual é o dispositivo de saída que permite aos usuários visualizar imagens?",
        answers: ["Impressora", "Monitor", "Mouse", "Teclado"],
        correct: 1,
        value: 1,
        answered: false
    },
    {
        question: "Qual é o dispositivo de armazenamento que permite aos usuários salvar dados?",
        answers: ["Teclado", "Mouse", "Disco rígido", "Monitor"],
        correct: 2,
        value: 1,
        answered: false
    },
    {
        question: "Qual é o tipo de rede que permite que os computadores compartilhem recursos, como arquivos e impressoras?",
        answers: ["WAN", "VPN", "Internet", "LAN"],
        correct: 3,
        value: 1,
        answered: false
    },
    {
        question: "Qual é o tipo de rede que conecta computadores em todo o mundo?",
        answers: ["WAN", "Internet", "VPN", "LAN"],
        correct: 1,
        value: 1,
        answered: false
    },
    {
        question: "Qual é o nome do mecanismo de busca mais usado no mundo?",
        answers: ["Bing", "DuckDuckGo","Google" , "Yahoo" ],
        correct: 2,
        value: 1,
        answered: false
    },
    {
        question: "Qual é o nome do tipo de arquivo que contém apenas texto sem formatação?",
        answers: ["TXT", "PDF", "DOC", "EXE" ],
        correct: 3,
        value: 1,
        answered: false
    },
    {
        question: "Qual é o formato de arquivo de imagem amplamente utilizado que suporta compressão sem perdas?",
        answers: ["GIF", "JPEG", "PSD", "PNG"],
        correct: 1,
        value: 1,
        answered: false
    },
    {
        question: "Qual é o formato de arquivo de vídeo amplamente aceito que mantém alta qualidade com tamanhos de arquivo menores?",
        answers: ["MKV", "AVI", "MP4", "MOV"],
        correct: 2,
        value: 1,
        answered: false
    },
    {
        question: "O que acontece quando um computador é ligado sem um sistema operacional?",
        answers: ["Ele não funciona normalmente", "Ele executa aplicativos automaticamente", "Ele não precisa de sistema operacional", "Ele não pode ser ligado"],
        correct: 3,
        value: 1,
        answered: false
    },
    {
        question: "O que acontece quando um arquivo é excluído da área de trabalho?",
        answers: ["Nada acontece", "O arquivo é apagado permanentemente","O arquivo é movido para a lixeira", "O arquivo é duplicado" ],
        correct: 2,
        value: 1,
        answered: false
    },
    {
        question: "Qual componente de hardware é fundamental para jogos em um computador?",
        answers: ["Impressora", "Placa de vídeo", "Monitor", "Mouse"],
        correct: 1,
        value: 1,
        answered: false
    },
    {
        question: "O que é RAM em um computador?",
        answers: ["Um tipo de armazenamento permanente", "Uma tela de computador", "Memória de acesso aleatório", "Um tipo de mouse"],
        correct: 2,
        value: 1,
        answered: false
    },
    {
        question: "O que é um firewall em um computador?",
        answers: ["Um dispositivo de saída", "Um tipo de impressora", "Um dispositivo de armazenamento", "Um software de segurança"],
        correct: 3,
        value: 1,
        answered: false
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
        progressBar.style.backgroundColor = "#puple";
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