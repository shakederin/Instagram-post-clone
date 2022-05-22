import { makeComment } from "./utils/createElements.js";
const inputElement = document.getElementById("commentInput");
const formElement = document.getElementById("inputForm");
const ulElement = document.getElementById("commentsList");
const ppURL =
  "https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg";

//submit form **************************** into function
if (
  formElement instanceof HTMLFormElement &&
  inputElement instanceof HTMLInputElement
) {
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const newMsg = inputElement.value;
    console.log(newMsg, ulElement);
    if (newMsg && ulElement) {
      ulElement.append(makeComment(ppURL, "tonytoscani", newMsg));
      inputElement.value = "";
    }
  });
}

// const createNewElement = (
//   tag: string,
//   className: string,
//   innerText: string
// ) => {
//   const newElement = document.createElement(tag);
//   if (className) {
//     newElement.className = className;
//   }
//   if (innerText) {
//     newElement.innerText = innerText;
//   }
//   return newElement;
// };

// const addComment = (
//   profilePicture: string,
//   userName: string,
//   comment: string
// ) => {
//   if (ulElement) {
//     const LIElement = createNewElement("li", "comment", "");

//     const imgElement = createNewElement("img", "profilePicture", "");
//     if (imgElement instanceof HTMLImageElement) {
//       imgElement.src = profilePicture;
//       imgElement.alt = "profile Picture";
//     }

//     const commentElement = createNewElement("div", "comonComment", "");

//     const commentHeaderElement = createCommentText(userName, comment);

//     const { commentInfoElement, likesInfoElement } = createCommentExraInfo();

//     const commentLikeHeart = createCommentLike(likesInfoElement);

//     commentHeaderElement.append(commentInfoElement);
//     commentElement.append(imgElement, commentHeaderElement);
//     LIElement.append(commentElement, commentLikeHeart);
//     ulElement.append(LIElement);
//     (inputElement as HTMLInputElement).value = "";
//   }
// };

// const likeCommentClicked = (
//   likesInfoElement: HTMLElement,
//   commentSvgElement: HTMLImageElement
// ) => {
//   if (likesInfoElement.innerText === "like") {
//     likesInfoElement.innerText = "1 like";
//     commentSvgElement.src = "../public/assets/redHeart.svg";
//   } else {
//     likesInfoElement.innerText = "like";
//     commentSvgElement.src = "../public/assets/heart.svg";
//   }
// };

// const createCommentText = (userName: string, comment: string) => {
//   const commentHeaderElement = createNewElement("div", "commentHeader", "");
//   const commentHeaderAndContentElement = document.createElement("div");
//   const commentBodyElement = createNewElement("span", "", comment);
//   const commentHeaderBoldElement = createNewElement("b", "", `${userName} `);
//   commentHeaderAndContentElement.append(
//     commentHeaderBoldElement,
//     commentBodyElement
//   );
//   commentHeaderElement.append(commentHeaderAndContentElement);
//   return commentHeaderElement;
// };

// const createCommentExraInfo = () => {
//   const commentInfoElement = createNewElement("div", "commentInfo", "");
//   const hourAgoElement = createNewElement("div", "infoSubtitle", "10 h");
//   const likesInfoElement = createNewElement("b", "infoSubtitle", "like");
//   const replayInfoElement = createNewElement("b", "infoSubtitle", "Reply");
//   commentInfoElement.append(
//     hourAgoElement,
//     likesInfoElement,
//     replayInfoElement
//   );
//   return { commentInfoElement, likesInfoElement };
// };

// const createCommentLike = (likesInfoElement: HTMLElement) => {
//   const commentSvgElement = createNewElement("img", "commentHeart", "");
//   if (commentSvgElement instanceof HTMLImageElement) {
//     commentSvgElement.src = "../public/assets/heart.svg";
//     commentSvgElement.alt = "heart";
//     commentSvgElement.addEventListener("click", () => {
//       likeCommentClicked(likesInfoElement, commentSvgElement);
//     });
//   }
//   return commentSvgElement;
// };
