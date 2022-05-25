import { createComment } from "./create-comment.js";

const profilePicture =
  "https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg";

export const createNewElement = (
  tag: string,
  className: string,
  innerText: string
) => {
  const newElement = document.createElement(tag);
  if (className) {
    newElement.className = className;
  }
  if (innerText) {
    newElement.innerText = innerText;
  }
  return newElement;
};

export const likeComment = (
  likesInfoElement: HTMLElement,
  commentSvgElement: HTMLImageElement
) => {
  if (likesInfoElement.innerText === "like") {
    likesInfoElement.innerText = "1 like";
    commentSvgElement.src = "./assets/red-heart.svg";
  } else {
    likesInfoElement.innerText = "like";
    commentSvgElement.src = "./assets/heart.svg";
  }
};

export const addEventListenerWhenPageLoaded = () => {
  window.addEventListener("load", () => {
    const inputElement = document.getElementById("commentInput");
    const formElement = document.getElementById("inputForm");
    const ulElement = document.getElementById("commentsList");
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
};
