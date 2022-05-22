import { makeComment } from "./utils/createElements.js";
const inputElement = document.getElementById("commentInput");
const formElement = document.getElementById("inputForm");
const ulElement = document.getElementById("commentsList");
const ppURL =
  "https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg";

if (
  formElement instanceof HTMLFormElement &&
  inputElement instanceof HTMLInputElement
) {
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const newMsg = inputElement.value;
    if (newMsg && ulElement) {
      ulElement.append(makeComment(ppURL, "tonytoscani", newMsg));
      inputElement.value = "";
    }
  });
}
