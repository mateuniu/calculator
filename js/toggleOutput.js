function showOutput() {
  outputSection.classList.add("output-section--show");
}
function closeOutput() {
  outputSection.classList.remove("output-section--show");
}

submitBtn.addEventListener("click", showOutput);
closeOutputBtn.addEventListener("click", closeOutput);