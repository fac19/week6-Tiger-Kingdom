const articles = document.querySelectorAll(`article`);

articles.forEach((article) => {
  article.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON" || event.target.tagName === "I") {
      //console.log(article.dataset.index);
      fetch("/", {
        method: "delete",
        headers: { "content-type": "application/json" },
        body: article.dataset.index,
      }).then(location.reload());
    }
  });
});

// deleteButtons.forEach(deleteButton => {
//   deleteButton.addEventListener("click", event => {
//     const indexToDelete = Array.from(deleteButtons).indexOf(deleteButton);

//     fetch("/", {
//       method: "delete",
//       headers: { "Content-Type": "application/json" },
//       body: indexToDelete
//     }).then(location.reload());
//   });
// });

// form validation

// const signup_form = document.querySelector('#signupForm');
// const signup_input = document.querySelectorAll('.signup_inputs');
// console.log(signup_input)

// signup_form.setAttribute("novalidate", "");

// signup_form.addEventListener("submit", (event) => {

//   const allInputsValid = event.target.checkValidity();
//   if (!allInputsValid) {
//     event.preventDefault();
//   }
// });

let images = document.querySelectorAll("img");

images.forEach((img) => {
  img.onerror = function () {
    this.src =
      "https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png"; // place your error.png image instead
  };
});
