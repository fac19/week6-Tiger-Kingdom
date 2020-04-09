const articles = document.querySelectorAll(`article`);

articles.forEach(article => {
  article.addEventListener('click', (event)=>{
    if (event.target.tagName === "BUTTON" || event.target.tagName === "I") {
        //console.log(article.dataset.index); 
      fetch('/', {
        method: 'delete',
        headers: {'content-type': 'application/json'},
        body: article.dataset.index
      })
      .then(location.reload());
    }
})

})

const logOut = document.getElementById("logOut");
logOut.addEventListener("click", event => {
    event.preventDefault();
    fetch( "/logout", { method: 'POST' } )
    .then( () => console.log("Logged out"))
    .catch( err => console.log("Problem logging out:", err));
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

