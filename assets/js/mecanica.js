const allQuestions = [
    {
        question: "O que é o objetivo da manutenção preventiva de máquinas industriais?",
        answers: [
            "Aumentar o desgaste das peças.",
            "Corrigir problemas apenas quando surgirem.",
            "Evitar falhas e maximizar a vida útil das máquinas.",
            "Reduzir a produção."
        ],
        correct: 2,
        value: 2
    },
    {
        question: "O que é um rolamento em uma máquina industrial?",
        answers: [
            "Uma peça que permite a rotação suave de outras peças.",
            "Uma engrenagem que controla a velocidade da máquina.",
            "Um dispositivo para armazenar água em máquinas pesadas.",
            "Um mecanismo usado para gerar eletricidade em máquinas industriais."
        ],
        correct: 0,
        value: 4
    },
    {
        question: "O que é manutenção baseada em confiabilidade (RCM)?",
        answers: [
            "Uma abordagem para consertar máquinas apenas quando elas quebram.",
            "Um método para aumentar a velocidade das máquinas.",
            "Uma técnica para determinar a confiabilidade dos funcionários da manutenção.",
            "Uma metodologia para otimizar a manutenção com base na confiabilidade de cada componente."
        ],
        correct: 3,
        value: 6
    },
    {
        question: "Qual é o principal instrumento de medição usado na mecânica?",
        answers: [
            "Micrômetro",
            "Parquímetro",
            "Trena",
            "Régua"
        ],
        correct: 1,
        value: 8
    },
    {
        question: "Qual é o instrumento de medição mais preciso na manutenção?",
        answers: [
            "Parquímetro.",
            "Trena.",
            "Micrômetro.",
            "Régua."
        ],
        correct: 2,
        value: 10
    },
    {
        question: "Qual e o objeto usado para cortar elementos metalicos com alta temperatura?",
        answers: [
            "Oxicorte.",
            "Eletrodo.",
            "Esqueiro.",
            "gas."
        ],
        correct: 0,
        value: 12
    },
    {
        question: "Qual é o instrumento usado para acender o oxicorte?",
        answers: [
            "Fosforo.",
            "Esqueiro.",
            "Eletrodo.",
            "Faisca."
        ],
        correct: 1,
        value: 14
    },
    {
        question: "Qual e o instrumento usado para retirar rolamentos do eixo?",
        answers: [
            "Saca rolamentos.",
            "Retirar rolamentos.",
            "FMEA é uma técnica para criar desenhos de engenharia de máquinas.",
            "FMEA é um software de gestão de manutenção."
        ],
        correct: 0,
        value: 16
    },
    {
        question: "Qual é o significado de 'MTBF' na manutenção de máquinas?",
        answers: [
            "MTBF é a média de tempo que uma máquina funciona sem falhas e é relevante para prever desastres naturais.",
            "MTBF não é relevante na manutenção de máquinas.",
            "MTBF é a média de tempo entre as falhas de uma máquina e é útil para o planejamento de manutenção.",
            "MTBF é uma sigla para a temperatura máxima de funcionamento das máquinas."
        ],
        correct: 2,
        value: 18
    },
    {
        question: "O que é lubrificação na manutençã?",
        answers: [
            "Um processo de transformação de sólidos em líquidos para facilitar a manutenção.",
            "A aplicação de um fluido lubrificante para reduzir o atrito e o desgaste das peças móveis de uma máquina.",
            "Um processo de resfriamento de máquinas industriais.",
            "Um método para aumentar a resistência de peças de máquinas."
        ],
        correct: 1,
        value: 20
    },
    {
        question: "quais desses EPI não se aplica a manutenção mecânica de maquinas industriais?",
        answers: [
            "Protetor auricular.",
            "Luvas.",
            "Cremes.",
            "Avental."
        ],
        correct: 2,
        value: 22
    },
    {
        question: "Qual é a principal finalidade de um relógio comparador na metrologia e controle de qualidade?",
        answers: [
            "Medir a temperatura ambiente.",
            "Avaliar a concentração de substâncias em soluções.",
            "Realizar medições de pressão em máquinas industriais.",
            "Efetuar medições precisas de dimensões lineares com alta sensibilidade."
        ],
        correct: 3,
        value: 24
    },
    {
        question: "O que é manutenção corretiva?",
        answers: [
            "A manutenção realizada periodicamente para prevenir problemas futuros.",
            "A manutenção realizada apenas quando uma máquina quebra ou apresenta falhas.",
            "Um método para melhorar a aparência das máquinas.",
            "A manutenção realizada em um laboratório de pesquisa."
        ],
        correct: 1,
        value: 26
    },
    {
        question: "O que é um programa de TPM (Manutenção Produtiva Total) na indústria?",
        answers: [
            "Um programa para treinar os operadores de máquinas.",
            "Um programa de televisão sobre manutenção de máquinas.",
            "Um programa abrangente que visa melhorar a eficiência das máquinas, envolvendo todos os funcionários.",
            "Um programa para trazer músicos ao local de trabalho."
        ],
        correct: 2,
        value: 28
    },
    {
        question: "O que é análise de causa raiz na manutenção de máquinas?",
        answers: [
            "Uma técnica para desenhar plantas em máquinas.",
            "Uma técnica para identificar e abordar as causas fundamentais de problemas nas máquinas.",
            "Uma técnica para pintar máquinas de verde.",
            "Uma técnica para reparar peças quebradas."
        ],
        correct: 1,
        value: 30
    },
    // Perguntas adicionais:
    {
        question: "O que é lubrificação a seco em máquinas industriais?",
        answers: [
            "Aplicação de óleo e graxa nas peças.",
            "Lubrificação com vapor d'água.",
            "Lubrificação sem o uso de óleos ou graxas.",
            "Substituição de peças desgastadas."
        ],
        correct: 2,
        value: 32
    },
    {
        question: "O que é um acoplamento flexível em máquinas industriais?",
        answers: [
            "Um dispositivo de bloqueio de máquinas.",
            "Uma peça para conectar máquinas de forma rígida.",
            "Um componente usado para conectar e transmitir torque entre eixos desalinhados.",
            "Um mecanismo para gerar eletricidade nas máquinas."
        ],
        correct: 2,
        value: 34
    },
    {
        question: "Qual é a importância da análise de lubrificantes na manutenção de máquinas?",
        answers: [
            "Analisar a temperatura das máquinas.",
            "Monitorar o ruído das máquinas.",
            "Avaliar a qualidade do ar na indústria.",
            "Detectar desgaste e contaminação em lubrificantes para prevenir falhas nas máquinas."
        ],
        correct: 3,
        value: 36
    },
    {
        question: "qual a perte de um parquimetro usado para a medição externa?",
        answers: [
            "Bico.",
            "Orelha.",
            "Regua principal.",
            "Vareta de profundidade."
        ],
        correct: 0,
        value: 38
    },
    {
        question: "O que é balanceamento dinâmico de máquinas?",
        answers: [
            "Um processo para tornar máquinas mais ruidosas.",
            "Um método para aumentar a produção em máquinas.",
            "Uma técnica para equilibrar o peso de máquinas pesadas.",
            "Um procedimento para reduzir vibrações não desejadas em máquinas rotativas."
        ],
        correct: 3,
        value: 40
    },
    {
        question: "O que é um mancal em máquinas industriais?",
        answers: [
            "Um dispositivo de segurança.",
            "Uma peça para armazenar materiais na indústria.",
            "Um suporte ou rolamento que suporta um eixo rotativo em máquinas.",
            "Uma ferramenta de medição de temperatura."
        ],
        correct: 2,
        value: 42
    },
    {
        question: "O que é um sistema CNC em máquinas industriais?",
        answers: [
            "Uma técnica para colorir máquinas.",
            "Um método de resfriamento de máquinas.",
            "Um sistema de controle numérico por computador usado para automatizar máquinas.",
            "Um dispositivo de comunicação de rede para máquinas."
        ],
        correct: 2,
        value: 44
    },
    {
        question: "O que é um alinhamento de eixos em máquinas industriais?",
        answers: [
            "Um procedimento para conectar máquinas entre si.",
            "Uma técnica para criar padrões visuais em máquinas.",
            "Um processo para alinhar o eixo de uma máquina com precisão em relação a outra máquina.",
            "Um método para manter as máquinas funcionando 24 horas por dia."
        ],
        correct: 2,
        value: 46
    },
    {
        question: "O que é a análise de ultrassom na manutenção de máquinas?",
        answers: [
            "Uma técnica para limpar máquinas com ultrassom.",
            "Uma ferramenta para avaliar o nível de iluminação na indústria.",
            "Uma técnica que usa ultrassom para detectar falhas mecânicas e vazamentos em máquinas.",
            "Um método para medir a resistência de peças de máquinas."
        ],
        correct: 2,
        value: 48
    },
    {
        question: "qual a perte de um parquimetro usado para a medição interna?",
        answers: [
            "Bico.",
            "Orelha.",
            "Regua principal.",
            "Vareta de profundidade."
        ],
        correct: 1,
        value: 38
    },
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
        return "Um futuro Técnico de Mecanica?";
    } else if (correctPercentage <= 99) {
        return "Diploma a caminho!";
    } else {
        return "Você é um Técnico de Mecanica!";
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