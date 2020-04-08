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
