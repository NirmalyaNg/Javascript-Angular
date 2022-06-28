const postForm = document.getElementById("postForm");
const titleInput = document.getElementById("titleInput");
const bodyInput = document.getElementById("bodyInput");

postForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value;
  const body = bodyInput.value;

  fetch("https://angular-tutorial-2a446-default-rtdb.firebaseio.com/posts.json", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
    }),
  });
});

fetch("https://angular-tutorial-2a446-default-rtdb.firebaseio.com/posts.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
