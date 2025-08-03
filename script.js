let attempts = [];

document.getElementById("num").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    Check();
  }
});

function Check() {
  const number = document.getElementById("num");
  const result = document.getElementById("result");
  const history = document.getElementById("history");
  const resetBtn = document.getElementById("resetBtn");

  const userGuess = parseInt(number.value);
  const actualNum = Math.floor(Math.random() * 9) + 1;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 9) {
    result.textContent = "⚠️ Enter a number between 1 and 9";
    result.classList.remove("text-green-600", "text-red-600");
    result.classList.add("text-orange-500");
    return;
  }

  attempts.push(userGuess);
  history.innerHTML = `📝 Correct Number is : ${attempts.join(', ')}`;

  if (userGuess === actualNum) {
    result.textContent = "🎉 Bingo! You nailed it!";
    result.classList.remove("text-red-600", "text-orange-500");
    result.classList.add("text-green-600");
    resetBtn.classList.remove("hidden");
  } else if (userGuess > actualNum) {
    result.textContent = `📉 Too High! It was ${actualNum}`;
    result.classList.remove("text-green-600", "text-orange-500");
    result.classList.add("text-red-600");
    resetBtn.classList.remove("hidden");
  } else {
    result.textContent = `📈 Too Low! It was ${actualNum}`;
    result.classList.remove("text-green-600", "text-orange-500");
    result.classList.add("text-red-600");
    resetBtn.classList.remove("hidden");
  }

  number.value = "";
}

function resetGame() {
  document.getElementById("num").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("result").classList.remove("text-red-600", "text-orange-500", "text-green-600");
  document.getElementById("history").textContent = "";
  document.getElementById("resetBtn").classList.add("hidden");
  attempts = [];
}
