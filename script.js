const advice = document.querySelector(".advice")
const adviceID = document.querySelector(".advice-id")
const button = document.querySelector(".dice-light")

button.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => generateHtml(data.slip))
})

function generateHtml(data) {
    advice.innerHTML = data.advice
    adviceID.innerHTML = `ADVICE #${data.id}`
}