const form = document.getElementById("form");
const submitButton = document.getElementById("submit-button");
const ratingList = document.getElementById("rating-list");
const ratingState = document.getElementById("article-rating-state");
const thankYouState = document.getElementById("thank-you-state");
const ratingSpan = document.getElementById("rating-span");
const ratingElements = document.querySelectorAll("li");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let rating;

ratingList.addEventListener("click", (e) => {
  if (e.target && e.target.tagName === "LI") {
    ratingElements.forEach((item) => {
      item.classList.remove("form__rating--selected");
    });
    e.target.classList.add("form__rating--selected");
    rating = e.target.textContent;
  }
});

submitButton.addEventListener("click", () => {
  if (rating !== undefined) {
    ratingState.classList.add("article--disabled");
    thankYouState.classList.remove("article--disabled");
    ratingSpan.textContent = `You selected ${rating} out of 5`;
  }
});
