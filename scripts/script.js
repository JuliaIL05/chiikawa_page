    const cards = Array.from(document.querySelectorAll(".card"));
    const previousButton = document.querySelector(".carousel.left");
    const nextButton = document.querySelector(".carousel.right");
    const cardsPerPage = 8;
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