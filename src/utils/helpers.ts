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

export const likeCommentClicked = (
  likesInfoElement: HTMLElement,
  commentSvgElement: HTMLImageElement
) => {
  if (likesInfoElement.innerText === "like") {
    likesInfoElement.innerText = "1 like";
    commentSvgElement.src = "../public/assets/redHeart.svg";
  } else {
    likesInfoElement.innerText = "like";
    commentSvgElement.src = "../public/assets/heart.svg";
  }
};
