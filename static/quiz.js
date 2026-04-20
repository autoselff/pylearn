let currentIndex = 0;
let score = 0;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
    const currentWord = VOCAB_DATA[currentIndex];
    const questionEl = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');
    const counter = document.getElementById('counter');

    feedback.innerText = '';
    nextBtn.style.display = 'none';
    optionsContainer.innerHTML = '';
    counter.innerText = `Question ${currentIndex + 1} of ${VOCAB_DATA.length}`;
    questionEl.innerText = currentWord.front;

    let options = [currentWord.back];

    let otherWords = VOCAB_DATA
        .filter(w => w.back !== currentWord.back)
        .map(w => w.back);

    shuffle(otherWords);
    options.push(...otherWords.slice(0, 3));
    shuffle(options);

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'posts-button';
        btn.style.width = '100%';
        btn.style.textAlign = 'center';
        btn.style.padding = '15px';
        btn.innerText = opt;

        btn.onclick = () => checkAnswer(opt, currentWord.back, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selected, correct, clickedBtn) {
    const buttons = document.querySelectorAll('#options-container button');
    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');

    buttons.forEach(btn => btn.disabled = true);

    if (selected === correct) {
        clickedBtn.style.background = '#28a745';
        clickedBtn.style.color = 'white';
        feedback.innerText = 'Correct!';
        feedback.style.color = '#28a745';
        score++;
    } else {
        clickedBtn.style.background = '#dc3545';
        clickedBtn.style.color = 'white';
        feedback.innerText = `Wrong. Correct answer: ${correct}`;
        feedback.style.color = '#dc3545';
    }

    if (currentIndex < VOCAB_DATA.length - 1) {
        nextBtn.style.display = 'block';
    } else {
        setTimeout(() => {
            alert(`Quiz finished! Your score: ${score}/${VOCAB_DATA.length}`);
            window.location.href = "/";
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('next-btn').onclick = () => {
        currentIndex++;
        loadQuestion();
    };
    loadQuestion();
});
