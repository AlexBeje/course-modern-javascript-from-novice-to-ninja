const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");

form.addEventListener("submit", (e) => {
  // the default action is to refresh the page.
  e.preventDefault();

  let score = 0;
  // get the value of the form input named 'q1'
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check for answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  console.log("😉", score);
});
