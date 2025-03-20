
function createCard(name, phone, email, summary, skills, language) {
    const card = document.createElement("div");
    card.classList.add("card");

    const innerCard = document.createElement("div");
    innerCard.classList.add("inner-card");

    // Front of the card
    const frontCard = document.createElement("div");
    frontCard.classList.add("front-card");
    frontCard.innerHTML = `
        <img src="https://via.placeholder.com/80" alt="Profile">
        <span>${name}</span>
        <span>${phone}</span>
        <span>${email}</span>
    `;

    // Back of the card
    const backCard = document.createElement("div");
    backCard.classList.add("back-card");
    backCard.innerHTML = `
        <span><strong>Summary:</strong> ${summary}</span>
        <span><strong>Skills:</strong> ${skills}</span>
        <span><strong>Language:</strong> ${language}</span>
    `;

    // Append front and back to inner card
    innerCard.appendChild(frontCard);
    innerCard.appendChild(backCard);

    // Append inner card to the main card
    card.appendChild(innerCard);

    return card;
}

// Add Card Button Event Listener
document.getElementById("add-card-btn").addEventListener("click", () => {
    // Get input values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const summary = document.getElementById("summary").value;
    const skills = document.getElementById("skills").value;
    const language = document.getElementById("language").value;

    // Validate inputs
    if (!name || !phone || !email || !summary || !skills || !language) {
        alert("Please fill all fields!");
        return;
    }

    // Create a new card
    const newCard = createCard(name, phone, email, summary, skills, language);

    // Add the card to the container
    document.getElementById("card-container").appendChild(newCard);

    // Clear the form
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("summary").value = "";
    document.getElementById("skills").value = "";
    document.getElementById("language").value = "";
});