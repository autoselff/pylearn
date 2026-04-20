let currentIndex = 0;

function updateCard() {
    const card = document.getElementById('flashcard');
    const front = document.getElementById('front-text');
    const back = document.getElementById('back-text');
    const counter = document.getElementById('counter');

    card.classList.remove('flipped');

    setTimeout(() => {
        front.innerText = VOCAB_DATA[currentIndex].front;
        back.innerText = VOCAB_DATA[currentIndex].back;
        counter.innerText = `Word ${currentIndex + 1} from ${VOCAB_DATA.length}`;
    }, 150);
}

document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('flashcard');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < VOCAB_DATA.length - 1) {
            currentIndex++;
            updateCard();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCard();
        }
    });

    updateCard();
});
