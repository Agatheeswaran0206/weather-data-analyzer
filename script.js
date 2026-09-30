function analyzeWeather() {

    let temperature =
        Number(document.getElementById("temperature").value);

    let result = document.getElementById("result");

    if (temperature === 0 && document.getElementById("temperature").value === "") {
        result.textContent = "Please enter temperature";
        return;
    }

    if (temperature >= 35) {
        result.textContent = "🔥 Weather is Hot";
    }
    else if (temperature >= 25) {
        result.textContent = "☀️ Weather is Warm";
    }
    else if (temperature >= 15) {
        result.textContent = "🌤️ Weather is Pleasant";
    }
    else {
        result.textContent = "❄️ Weather is Cold";
    }
}
