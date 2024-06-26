let currentIndex = 0;
let words = [];

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        words = data.words;
        displayWord(currentIndex);
    })
    .catch(error => console.error('Error fetching data:', error));

function displayWord(index) {
    const it = document.getElementById('it');
    const pt = document.getElementById('pt');
    const en = document.getElementById('en');
    const es = document.getElementById('es');

    const currentWord = words[index];
    es.textContent = `${currentWord.es}`;

    it.textContent = `${currentWord.it}`;
    pt.textContent = `${currentWord.pt}`;
    en.textContent = `${currentWord.en}`;

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
 
document.getElementById('next-btn').addEventListener('click', () => {
    shuffleArray(words); // Shuffle the words array
    currentIndex = 0; // Reset index to start from the beginning after shuffle
    displayWord(currentIndex);
});