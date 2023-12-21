const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const plusMinusToggle = question.querySelector(".plus-minus-toggle");

    if (answer.style.display === "block") {
      answer.style.display = "none";
      plusMinusToggle.classList.remove("rotate");
    } else {
      answer.style.display = "block";
      plusMinusToggle.classList.add("rotate");
    }
  });
});
