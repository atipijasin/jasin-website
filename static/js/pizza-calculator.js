function getFormValues(formId, fields) {
    const values = {};
    for (const field of fields) {
        const value = parseFloat(document.getElementById(field).value);
        if (isNaN(value) || value <= 0) {
            document.getElementById(`error-message${formId}`).textContent = "Please enter valid numbers for all fields.";
            document.getElementById(`error-message${formId}`).style.color = "red"; // Make the error message red
            return null;
        }
        values[field] = value;
    }
    document.getElementById(`error-message${formId}`).textContent = "";
    return values;
}

function displayResult(resultId, result) {
    document.getElementById(resultId).textContent = result.toFixed(2);

    const parentElement = document.getElementById(resultId === "total-pizzas" ? "results1" : "results2");
    parentElement.style.display = "block";
}

document.getElementById("pizzas-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const values = getFormValues(1, ["flour", "hydration", "dough-weight"]);
    if (!values) return;
    const {flour, hydration, "dough-weight": doughWeight} = values;
    const totalPizzas = (flour * (1 + hydration / 100)) / doughWeight;
    displayResult("total-pizzas", totalPizzas);
});

document.getElementById("pizzas-form2").addEventListener("submit", function (e) {
    e.preventDefault();

    const values = getFormValues(2, ["desired-pizzas", "hydration2", "dough-weight2"]);
    if (!values) return;

    console.log(values);
    const {"desired-pizzas": desiredPizzas, hydration2, "dough-weight2": doughWeight2} = values;
    const totalFlourNeeded = (desiredPizzas * doughWeight2) / (1 + hydration2 / 100);
    document.getElementById("total-water-needed").textContent = (totalFlourNeeded*hydration2/100).toFixed(2);
    displayResult("total-flour-needed", totalFlourNeeded);
});