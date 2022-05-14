
let numberedCards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const colorCodes = ['#000000', '#333333', '#FFFFFF', '#EFEFEF', '#72C3DC', '#2B8EAD', '#6F98A8', '#BFBFBF', '#2F454E'];

let shuffleCards = () => {
    let shuffledColorCodes = [...colorCodes];
    for (let i = numberedCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let tempCard = numberedCards[i];
        let tempColorCode = shuffledColorCodes[i];
        numberedCards[i] = numberedCards[j];
        shuffledColorCodes[i] = shuffledColorCodes[j];
        numberedCards[j] = tempCard;
        shuffledColorCodes[j] = tempColorCode;
    }
    displayOnGrid(shuffledColorCodes);
}

let sortCards = () => {
    numberedCards.sort((a, b) => a-b);
    displayOnGrid(colorCodes);
}

let displayOnGrid = (colorCodesArray) => {
    numberedCards.forEach((ele, index) => {
        let block = index + 1;
        let cardElement = document.getElementById('block' + block);
        cardElement.innerHTML = ele;
        cardElement.style.backgroundColor = colorCodesArray[index];
    });
}