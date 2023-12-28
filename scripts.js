function answer_interact(number) {
  let answer = document.getElementById(`hidden-answer-${number}`);
  let plus_icon = document.getElementById(`plus-icon-${number}`);
  let minus_icon = document.getElementById(`minus-icon-${number}`);
  if (answer.style.display === "none") {
    answer.style.display = "block";
    plus_icon.style.display = "none";
    minus_icon.style.display = "block";
  } else {
    answer.style.display = "none";
    plus_icon.style.display = "block";
    minus_icon.style.display = "none";
  }
}
