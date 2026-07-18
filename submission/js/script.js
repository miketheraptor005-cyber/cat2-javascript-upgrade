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
// Chess Wishlist Feature

const wishlistInput = document.getElementById("wishlist-input");
const addButton = document.getElementById("add-wishlist");
const wishlistItems = document.getElementById("wishlist-items");


// Add new wishlist item

addButton.addEventListener("click", function(){

    const itemText = wishlistInput.value;


    if(itemText === ""){
        alert("Please enter a chess goal.");
        return;
    }


    // Create new list item
    const listItem = document.createElement("li");

    listItem.classList.add("wishlist-item");


    // Create text
    const text = document.createElement("span");

    text.textContent = itemText;


    // Create remove button
    const removeButton = document.createElement("button");

    removeButton.textContent = "Remove";

    removeButton.classList.add("remove-btn");


    // Remove item when clicked
    removeButton.addEventListener("click", function(){

        listItem.remove();

    });


    // Add elements together
    listItem.appendChild(text);

    listItem.appendChild(removeButton);


    // Add item to page
    wishlistItems.appendChild(listItem);


    // Clear input
    wishlistInput.value = "";

});