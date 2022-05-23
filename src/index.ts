import { createComment } from "./utils/createComment.js";

const inputElement = document.getElementById("commentInput");
const formElement = document.getElementById("inputForm");
const ulElement = document.getElementById("commentsList");
const profilePicture =
  "https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg";

window.addEventListener("load", () => {
  if (
    formElement instanceof HTMLFormElement &&
    inputElement instanceof HTMLInputElement
  ) {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const newComment = inputElement.value;
      if (newComment && ulElement) {
        ulElement.append(
          createComment(profilePicture, "tonytoscani", newComment)
        );
        formElement.reset();
      }
    });
  }
});
