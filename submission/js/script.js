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

// Load wishlist from localStorage
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Display wishlist
function displayWishlist(){

    wishlistItems.innerHTML = "";

    wishlist.forEach(function(item, index){

        const listItem = document.createElement("li");
        listItem.classList.add("wishlist-item");

        const text = document.createElement("span");
        text.textContent = item;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        removeButton.addEventListener("click", function(){

            // Remove item from array
            wishlist.splice(index, 1);

            // Update localStorage
            localStorage.setItem("wishlist", JSON.stringify(wishlist));

            // Refresh the list
            displayWishlist();

        });

        listItem.appendChild(text);
        listItem.appendChild(removeButton);

        wishlistItems.appendChild(listItem);

    });

}

// Add new wishlist item
addButton.addEventListener("click", function(){

    const itemText = wishlistInput.value.trim();

    if(itemText === ""){
        alert("Please enter a chess goal.");
        return;
    }

    // Add to array
    wishlist.push(itemText);

    // Save to localStorage
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    // Refresh list
    displayWishlist();

    // Clear input
    wishlistInput.value = "";

});

// Show saved wishlist when page loads
displayWishlist();
// Form Validation

const notesForm = document.getElementById("notes-form");
const openingInput = document.getElementById("opening");
const ratingInput = document.getElementById("rating");
const notesInput = document.getElementById("notes");
const formMessage = document.getElementById("form-message");

notesForm.addEventListener("submit", function(event){

    // Prevent page refresh
    event.preventDefault();

    // Read input values
    const opening = openingInput.value.trim();
    const rating = ratingInput.value.trim();
    const notes = notesInput.value.trim();

    // Validation
    if(opening === "" || rating === "" || notes === ""){

        formMessage.textContent = "❌ Please fill in all fields before saving.";
        formMessage.style.color = "red";
        return;
    }

    if(rating < 100 || rating > 3500){

        formMessage.textContent = "❌ Please enter a valid chess rating (100–3500).";
        formMessage.style.color = "red";
        return;
    }

    // Success message
    formMessage.textContent =
        `✅ Notes saved! Opening: ${opening}, Rating: ${rating}`;

    formMessage.style.color = "green";

    // Clear the form
    notesForm.reset();

});
