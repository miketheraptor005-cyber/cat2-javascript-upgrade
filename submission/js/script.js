const chessResources = [

    {
        name: "Chess.com Training",
        description: "Play games, solve puzzles, and improve your chess skills.",
        price: "Free and Premium Options"
    },

    {
        name: "Opening Practice",
        description: "Learn famous openings like the Italian Game and Sicilian Defense.",
        price: "Daily Practice"
    },

    {
        name: "Chess Puzzle Training",
        description: "Solve tactical puzzles to improve calculation and decision making.",
        price: "20 Puzzles Daily"
    },

    {
        name: "Endgame Lessons",
        description: "Study king and pawn endings, rook endings, and winning techniques.",
        price: "Beginner Level"
    }

];
const resourceContainer = document.getElementById("resource-list");

chessResources.forEach(function(resource){

    const card = document.createElement("div");

    card.classList.add("card");


    card.innerHTML = `

        <h3>${resource.name}</h3>

        <p>${resource.description}</p>

        <strong>${resource.price}</strong>

    `;


    resourceContainer.appendChild(card);

});