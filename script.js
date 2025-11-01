function login() {
    const name = document.getElementById("name").value.trim();
    const gender = document.getElementById("gender").value;
    if (!name || !gender) {
        alert("Please enter your name and select gender!");
        return;
    }
    localStorage.setItem("username", name);
    localStorage.setItem("gender", gender);
    window.location.href = "calculator.html";
}

window.onload = () => {
    const welcome = document.getElementById("welcome");
    if (welcome) {
        const name = localStorage.getItem("username");
        welcome.textContent = `👋 Welcome ${name}, let's calculate your BMI`;
    }
};

function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("result");

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.textContent = "⚠️ Please enter valid values.";
        return;
    }

    const bmi = weight / ((height / 100) ** 2);
    let message;
    if (bmi < 18.5) message = "Underweight 🥛 — Eat protein-rich foods!";
    else if (bmi < 25) message = "Healthy 🌟 — Keep it up!";
    else if (bmi < 30) message = "Overweight 🏃 — Add more workouts!";
    else message = "Obese ⚠️ — Consult a fitness coach.";

    result.textContent = `Your BMI: ${bmi.toFixed(1)} • ${message}`;
}