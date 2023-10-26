const allQuestions = [
    {
        question: "O que é o principal objetivo da logística?",
        answers: [
            "Maximizar o estoque",
            "Minimizar o custo total",
            "Aumentar o tempo de entrega",
            "Aumentar o desperdício de recursos"
        ],
        correct: 1,
        value: 2
    },
    {
        question: "Qual desses não é um modo de transporte comum na logística?",
        answers: [
            "Ferrovia", 
            "Navegação", 
            "Bicicleta", 
            "Rodoviário"
        ],
        correct: 2,
        value: 4
    },
    {
        question: "O que é a gestão de estoques na logística?",
        answers: ["Maximizar o risco de obsolescência", "Minimizar o custo total", "Maximizar o tempo de entrega", "Minimizar o lucro líquido"],
        correct: 1,
        value: 6
    },
    {
        question: "Qual termo descreve o processo de mover mercadorias do fabricante para o consumidor final?",
        answers: ["Logística reversa", "Logística de suprimento", "Logística de distribuição", "Logística de armazenamento"],
        correct: 2,
        value: 8
    },
    {
        question: "Qual desses não é um modal de transporte?",
        answers: ["Aéreo", "ferroviário", "dutoviário", "Agroviário"],
        correct: 3,
        value: 10
    },
    {
        question: "Qual é a tecnologia que desempenha um papel crucial na otimização de rotas de transporte na logística?",
        answers: ["Inteligência Artificial", "E-mail", "Veículo", "Telefone"],
        correct: 0,
        value: 12
    },
    {
        question: "Qual termo descreve a prática de realizar entregas no mesmo dia em que os pedidos são feitos?",
        answers: ["Entrega just-in-time", "Entrega cross-docking", "Entrega expressa", "Entrega em lote"],
        correct: 2,
        value: 14
    },
    {
        question: "O que é logística?",
        answers: ["é o processo de execução eficiente de transporte e armazenamento de matéria prima ou mercadorias", "é o processo de execução ineficiente de transporte e armazenamento de matéria prima ou mercadorias", "é o processo do armazenamento de matéria prima ou mercadorias", "é o processo de execução eficiente de transporte"],
        correct: 2,
        value: 16
    },
    {
        question: "Qual é o objetivo principal da logística de distribuição?",
        answers: ["Maximizar os custos de armazenamento", "Minimizar o risco de obsolescência", "Maximizar o tempo de entrega", "Minimizar o custo total"],
        correct: 3,
        value: 18
    },
    {
        question: "O que significa 'KPI' na logística?",
        answers: ["Key Performance Indicator", "Key Programming Interface", "Knowledge Presentation Index", "Keyword Position Identifier"],
        correct: 0,
        value: 20
    },

    {
        question: "O que é um centro de distribuição na logística?",
        answers: ["Um local para descarte de produtos", "Um local de produção", "Um ponto de armazenamento e distribuição de produtos", "Um terminal de transporte"],
        correct: 2,
        value: 22
    },
    {
        question: "Qual é a principal vantagem de usar a ferrovia como meio de transporte na logística?",
        answers: ["Velocidade rápida", "Alto custo de operação", "Baixo impacto ambiental", "Alta flexibilidade"],
        correct: 2,
        value: 24
    },
    {
        question: "O que é uma cadeia de suprimentos na logística?",
        answers: ["Um tipo de transporte rodoviário", "Um sistema de armazenamento de produtos", "O fluxo de materiais, informações e dinheiro envolvendo a produção e distribuição de um produto", "Um centro de embalagem"],
        correct: 2,
        value: 26
    },
    {
        question: "Qual é a principal função de um WMS (Warehouse Management System) na logística?",
        answers: ["Gerenciar recursos humanos", "Rastrear entregas", "Gerenciar operações de armazém", "Monitorar vendas online"],
        correct: 2,
        value: 28
    },
    {
        question: "O que é a logística reversa?",
        answers: [
            "O processo de enviar produtos para um destino final", "O transporte de produtos para o armazém", "O fluxo de produtos do consumidor de volta ao fabricante ou vendedor", "O transporte de produtos para uma loja física"],
        correct: 2,
        value: 30
    },
    {
        question: "Qual é o objetivo da otimização de rotas na logística?",
        answers: ["Maximizar o número de entregas", "Minimizar o uso de tecnologia", "Reduzir custos e melhorar a eficiência na entrega de mercadorias", "Aumentar o estoque de segurança"],
        correct: 2,
        value: 32
    },
    {
        question: "O que é o picking na logística?",
        answers: [
            "Uma técnica de embalagem de produtos", 
            "Um processo de seleção de produtos em um centro de distribuição para atender pedidos", 
            "Uma técnica de transporte de produtos", 
            "Uma técnica de controle de qualidade"],
        correct: 1,
        value: 34
    },
    {
        question: "Qual é a importância da gestão de demanda na logística?",
        answers: ["Minimizar os custos de armazenagem", 
        "Maximizar a produção", 
        "Antecipar as necessidades dos clientes para manter os produtos em estoque", 
        "Minimizar o uso de fornecedores externos"],
        correct: 2,
        value: 36
    },
    {
        question: "O que é o JIT (Just-in-Time) na logística?",
        answers: [
            "Uma técnica de armazenamento a longo prazo", 
            "Uma técnica de gestão de armazéns", 
            "Um sistema que visa entregar produtos no momento exato em que são necessários", 
            "Um sistema de comunicação interna"],
        correct: 2,
        value: 38
    },
    {
        question: "O que é o Lead Time na logística?",
        answers: [
            "O tempo que um caminhão leva para chegar ao destino", 
            "O tempo de produção de um item em uma fábrica", 
            "O tempo decorrido entre o pedido de um produto e a entrega", 
            "O tempo gasto no armazenamento de produtos"],
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
        return "Um futuro Técnico de Logística?";
    } else if (correctPercentage <= 99) {
        return "Diploma a caminho!";
    } else {
        return "Você é um Técnico de Logística!";
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