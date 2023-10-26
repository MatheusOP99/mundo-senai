const allQuestions = [
    {
        question: "O que significa a sigla 'HTML'?",
        answers: [
            "Hyper Text Markup Language",
            "High Technology Modern Language",
            "Hyper Transfer Markup Language",
            "Hyperlink and Text Markup Language"
        ],
        correct: 0,
        value: 1,
        answered: false
    },
    {
        question: "Qual linguagem de programação é amplamente usada para desenvolver aplicativos móveis para Android?",
        answers: ["Java", "Python", "Swift", "Kotlin"],
        correct: 0,
        value: 1,
        answered: false
    },
    {
        question: "O que é um sistema operacional de código aberto baseado no kernel Linux?",
        answers: ["Ubuntu", "Windows", "iOS", "Debian"],
        correct: 0,
        value: 1,
        answered: false
    },
    {
        question: "Qual destes é um motor de busca na web?",
        answers: ["Google Docs", "Microsoft Excel", "Google Search", "Yahoo Search"],
        correct: 2,
        value: 1,
        answered: false
    },
    {
        question: "Qual linguagem é usada para estilizar páginas da web?",
        answers: ["JavaScript", "CSS", "Python", "HTML5"],
        correct: 1,
        value: 1,
        answered: false
    },
    {
        question: "Qual empresa é conhecida por seu sistema operacional Windows?",
        answers: ["Apple", "Microsoft", "Google", "IBM"],
        correct: 1,
        value: 1,
        answered: false
    },
    {
        question: "O que significa 'URL'?",
        answers: [
            "Universal Resource Locator",
            "Unified Record Link",
            "Uniform Reference List",
            "Universal Registry Locator"
        ],
        correct: 0,
        value: 1,
        answered: false
    },
    {
        question: "Qual é a linguagem de programação usada para criar aplicativos iOS?",
        answers: ["Java", "Swift", "C++", "Objective-C"],
        correct: 1,
        value: 1,
        answered: false
    },
    {
        question: "Qual é o protocolo de transferência de hipertexto utilizado na World Wide Web?",
        answers: ["HTTP", "FTP", "SMTP", "HTTPS"],
        correct: 0,
        value: 1,
        answered: false
    },
    {
        question: "Qual destas empresas não é uma grande empresa de tecnologia?",
        answers: ["Apple", "Amazon", "Ford", "Intel"],
        correct: 2,
        value: 1,
        answered: false
    },
    {
        question: "O que significa a sigla 'CSS'?",
        answers: [
            "Cascading Style Sheets",
            "Computer System Syntax",
            "Code Style Selector",
            "Creative Style Solution"
        ],
        correct: 0,
        value: 1,
        answered: false
    },
    {
        question: "Qual linguagem de programação é conhecida por ser usada em desenvolvimento web back-end?",
        answers: ["Java", "Python", "Ruby", "HTML"],
        correct: 2,
        value: 1,
        answered: false
    },
    {
        question: "Quem é o fundador da Microsoft?",
        answers: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
        correct: 0,
        value: 1,
        answered: false
    },
    {
        question: "O que é um banco de dados relacional?",
        answers: [
            "Um banco de dados que não utiliza tabelas",
            "Um banco de dados que usa estruturas de árvore",
            "Um banco de dados que usa tabelas para organizar dados",
            "Um banco de dados que não armazena informações relacionadas"
        ],
        correct: 2,
        value: 1,
        answered: false
    },
    {
        question: "Qual é a linguagem de programação mais usada em desenvolvimento web front-end?",
        answers: ["Java", "C++", "JavaScript", "Python"],
        correct: 2,
        value: 1,
        answered: false
    },
    {
        question: "O que significa 'CPU'?",
        answers: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Power Unit",
            "Common Processing Unit"
        ],
        correct: 0,
        value: 1,
        answered: false
    },
    {
        question: "Qual é o protocolo usado para enviar e-mails?",
        answers: ["SMTP", "HTTP", "FTP", "HTML"],
        correct: 0,
        value: 1,
        answered: false
    },
    {
        question: "O que é um 'loop' em programação?",
        answers: [
            "Um erro de programação",
            "Uma estrutura condicional",
            "Um comando para repetir a execução de um bloco de código",
            "Uma variável que armazena dados temporários"
        ],
        correct: 2,
        value: 1,
        answered: false
    },
    {
        question: "Qual é o sistema operacional desenvolvido pela Apple para seus computadores?",
        answers: ["Windows", "iOS", "Linux", "macOS"],
        correct: 3,
        value: 1,
        answered: false
    },
    {
        question: "O que é a 'nuvem' em termos de computação?",
        answers: [
            "Um local físico onde os servidores são armazenados",
            "Um conceito de armazenamento de dados online acessível via internet",
            "Um tipo de programa antivírus",
            "Um dispositivo de entrada de computador"
        ],
        correct: 1,
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
        progressBar.style.backgroundColor = "#800080";
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