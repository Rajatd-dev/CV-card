//This function is for uploading image //
function upload() {
    const fileUploadInput = document.querySelector('.file-uploader');
    const image = fileUploadInput.files[0];

    if (!image) {
        return alert('Please select an image first.');

    }
    if (image.type.includes('image')) {
        return alert('only images are allowed');
    }

    if (image.size > 10_000_000) {
        return alert('Maximum Upload size is 10MB!')
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(image);

    fileReader.onload = (fileReaderEvent) => {

        const profilePicture = document.querySelector('.profile-picture');

        profilePicture.style.backgroundImage = `url(${fileReaderEvent.target.result})`;
    };
    fileReader.readAsDataURL(image);
}




let userData = JSON.parse(localStorage.getItem("userData")) || [];
let cardContainer = document.getElementById("card-container");

// This function is to Load stored user cards //
function loadCards() {
let count = 0;
    let cardsHTML = '';
    userData.forEach((card, index) => {
        count++;
        cardsHTML += `
            <div class="card" style="transform: translateX(${count * 100}px);">
                <div class="inner-card">
                    <div class="front-card">
                        <img src="assests/Logo.png"/>
                        <span>Age: ${card.age}</span>
                        <span>Name: ${card.name}</span>
                        <span>Phone: ${card.phone}</span>
                        <span>Email: ${card.email}</span>
                    </div>

                    <div class="back-card">
                        <span>Summary: ${card.summary}</span>
                        <span>Skills: ${card.skills}</span>
                        <span>Language: ${card.language}</span>
                        <span>Experience: ${card.experience} years</span>
                        <button class="delete-btn" data-index="${index}">Delete</button>
                    </div>
                </div>
            </div>`;
    });
    cardContainer.innerHTML = cardsHTML;
}

loadCards(); // Load cards on page load

let count = userData.length; // Ensure new cards continue from the last index

document.getElementById("btn").addEventListener("click", function () {
    count++;
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.style.transform = `translateX(${count * 100}px)`;
    // new.card.style.tranform = `
    newCard.innerHTML = `<p>New Card ${count}</p>`;
    cardContainer.appendChild(newCard);
});



document.querySelector("button").addEventListener("click", function () {
    let userData = {
        name: document.querySelector("input[placeholder='Enter Your Name']").value,
        age: document.querySelector("input[placeholder='Enter Your Age']").value,
        email: document.querySelector("input[placeholder='Enter Your Email']").value,
        phone: document.querySelector("input[placeholder='Enter Your Phone Number']").value,
        summary: document.querySelector("input[placeholder='Tell us Something about you']").value,
        skills: document.querySelector("input[placeholder='Add your skills']").value,
        language: document.querySelector("input[placeholder='Language']").value,
        experience: document.querySelector("input[placeholder='Past Experience']").value,

    };
    let existingCards = JSON.parse(localStorage.getItem("userData")) || [];
    console.log("Retrieved from localStorage:", userData);
    if (!existingCards || !Array.isArray(existingCards)) {
        existingCards = [];
    }

    existingCards.push(userData);

    localStorage.setItem("userData", JSON.stringify(existingCards));
    console.log("Saving data to localStorage", existingCards);
    window.location.href = "./CV.html";
});

document.getElementById("card-container").addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("delete-btn")) {
        let cardIndex = event.target.getAttribute("data-index");

        let userData = JSON.parse(localStorage.getItem("userData"));
        userData.splice(cardIndex, 1);

        localStorage.setItem("userData", JSON.stringify(userData));

        window.location.reload();
    }
});

