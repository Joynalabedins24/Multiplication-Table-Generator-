function generateTables() {
    const inputVal = document.getElementById("userInput").value;
    const container = document.getElementById("tablesContainer");
    const errorMsg = document.getElementById("error-msg");
    

    // to ensure that new tables are generated fresh each time the button is clicked
    container.innerHTML = "";
    errorMsg.innerText = "";


    // validation: Check if the input is empty or less than 1
    if (inputVal === "" || inputVal < 1) {
        errorMsg.innerText = "Please enter a valid number greater than 0.";
        return;
    }

    const limit = parseInt(inputVal);

    // outer loop: for each number from 1 to the input value
    for (let i = 1; i <= limit; i++) {
        

        // making card for each multiplication table
        let cardHtml = `
            <div class="table-card" style="animation-delay: ${i * 0.5}s">
                <div class="table-header">Multiplication Table of ${i}</div>
                <div class="table-body">
        `;

        // inner loop: to generate multiplication results of the input value from 1 to 10
        for (let j = 1; j <= 10; j++) {
            cardHtml += `
                <div class="table-row">
                    <span>${i} <span class="multiply">x</span> ${j}</span>
                    <span class="result">= ${i * j}</span>
                </div>
            `;
        }

        cardHtml += `
                </div>
            </div>
        `;

        // adding the new card to the grid container
        container.innerHTML += cardHtml;
    }
}