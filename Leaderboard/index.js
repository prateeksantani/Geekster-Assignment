const form = document.querySelector(".options");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const first = e.target.children[0].value;
    const last = e.target.children[1].value;
    const fullname = first + " " + last;
    const country = e.target.children[2].value;
    const score = e.target.children[3].value;

    addPlayer(fullname, country, score);
});

const displayResult = document.querySelector(".display-result");

const addPlayer = (fullname, country, score) => {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "wheat";
    newDiv.style.height = "40px";
    newDiv.style.width = "5cl00px";
    newDiv.innerHTML =
        `
    <span class="player-name">${fullname}</span>
    <span class="date">${generateDateAndTime()}</span>
    <span class="country">${country}</span>
    <span class="score">${score}</span>
    <button class="delete">delete</button>
    <button class="increase">+5</button>
    <button class="decrease">-5</button>
    `;

    displayResult.appendChild(newDiv);

    const increaseButton = newDiv.querySelector(".increase");
    const decreaseButton = newDiv.querySelector(".decrease");
    const scoreElement = newDiv.querySelector(".score");

    // Add +5
    increaseButton.addEventListener("click", () => {
        let currentScore = parseInt(scoreElement.textContent);
        currentScore += 5;
        scoreElement.textContent = currentScore;
    });

    // Subtract -5
    decreaseButton.addEventListener("click", () => {
        let currentScore = parseInt(scoreElement.textContent);
        currentScore -= 5;
        scoreElement.textContent = currentScore;
    });

    // Delete
    const deleteButton = newDiv.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        newDiv.remove();
    });
}

const generateDateAndTime = () => {
    let dateObject = new Date();
    let month = dateObject.toLocaleDateString("default", { month: "long" });
    let date = dateObject.getDate();
    let year = dateObject.getFullYear(); // corrected syntax
    let time = dateObject.toLocaleTimeString().slice(0, 8);

    let generateResult = `${month} ${date}, ${year} ${time}`;

    return generateResult;
};
