document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector(".start button");
  const questSection = document.querySelector(".question");
  const nextSection = document.querySelector(".next");
  const nextBtn = nextSection.querySelector("button");

  let currentIndx = 0;
  let totalScore = 0;
  let selectedAnswer = null; // Track user's choice

  const storeQuiz = [
    {
      question: "What is Quantum Computing?",
      options: [
        "A classical computer",
        "A movie",
        "Computing using qubits",
        "A type of rocket",
      ],
      answer: "Computing using qubits",
    },
    {
      question: "What is Gravity?",
      options: [
        "A force",
        "A movie by Alfonso Cuarón",
        "Electromagnetism",
        "Fiction",
      ],
      answer: "A force",
    },
    {
      question: "What is Inception?",
      options: [
        "A dream within a dream movie",
        "Beginning of something",
        "Planting an idea",
        "All of the above",
      ],
      answer: "A dream within a dream movie",
    },
    {
      question: "What does E=mc² mean?",
      options: [
        "Energy equals mass times speed of light squared",
        "Einstein's favorite equation",
        "Mass-energy equivalence",
        "All of the above",
      ],
      answer: "Energy equals mass times speed of light squared",
    },
  ];

  startBtn.addEventListener("click", () => {
    document.querySelector(".start").classList.add("hidden");
    showQuestion();
  });

  function showQuestion() {
    selectedAnswer = null; // Reset selection
    questSection.classList.remove("hidden");
    nextSection.classList.add("hidden");

    questSection.innerHTML = `
      <div class="question-container">
        <h2>${storeQuiz[currentIndx].question}</h2>
        <ul class="options">
          ${storeQuiz[currentIndx].options
            .map((option) => `<li class="option">${option}</li>`)
            .join("")}
        </ul>
      </div>
    `;

    // Add click listeners to options
    document.querySelectorAll(".option").forEach((option) => {
      option.addEventListener("click", function () {
        // Remove previous selection
        document
          .querySelectorAll(".option")
          .forEach((opt) => opt.classList.remove("selected"));
        // Highlight selected
        this.classList.add("selected");
        selectedAnswer = this.textContent;
        nextSection.classList.remove("hidden"); // Show next button
      });
    });
  }

  // Single event listener on Next button (delegated)
  nextBtn.addEventListener("click", () => {
    if (!selectedAnswer) return; // Prevent proceeding without selection

    // Check answer
    if (selectedAnswer === storeQuiz[currentIndx].answer) {
      totalScore++;
    }

    currentIndx++;

    if (currentIndx < storeQuiz.length) {
      showQuestion();
    } else {
      // Quiz finished
      questSection.innerHTML = `
        <div class="result">
          <h2>Quiz Complete!</h2>
          <p>Your score: ${totalScore} out of ${storeQuiz.length}</p>
        </div>
      `;
      nextSection.classList.add("hidden");
    }
  });
});
