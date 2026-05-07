const cards = Array.from(document.querySelectorAll(".card"));
const previousButton = document.querySelector(".carousel.left");
const nextButton = document.querySelector(".carousel.right");
const cardsPerPage = 1;
let currentPage = 0;

const showPage = (page, cardsPerPage, cards, previousButton, nextButton) => {
    const start = page * cardsPerPage;
    const end = start + cardsPerPage;
    for (let i = 0; i < cards.length; i++) {
        if (i >= start && i < end) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
};

const getTotalPages = (cards, cardsPerPage) => {
    return Math.ceil(cards.length / cardsPerPage);
};

showPage(currentPage, cardsPerPage, cards, previousButton, nextButton);

previousButton.addEventListener("click", () => {
    if (currentPage > 0) currentPage--;
    else currentPage = Math.ceil(cards.length / cardsPerPage) - 1;
    showPage(currentPage, cardsPerPage, cards, previousButton, nextButton);
});

nextButton.addEventListener("click", () => {
    if (currentPage < getTotalPages(cards, cardsPerPage) - 1) currentPage++;
    else currentPage = 0;
    showPage(currentPage, cardsPerPage, cards, previousButton, nextButton);
});

function drawArrow(id, dir) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    if (dir === "left") {
        ctx.moveTo(38, 18);
        ctx.lineTo(20, 30);
        ctx.lineTo(38, 42);
    } else {
        ctx.moveTo(22, 18);
        ctx.lineTo(40, 30);
        ctx.lineTo(22, 42);
    }
    ctx.stroke();
}

drawArrow("canvasLeft", "left");
drawArrow("canvasRight", "right");    