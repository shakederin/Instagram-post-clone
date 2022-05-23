export const likeCommentClicked = (
  likesCount: HTMLElement,
  commentSvgElement: HTMLImageElement
) => {
  if (likesCount.innerText === "like") {
    likesCount.innerText = "1 like";
    commentSvgElement.src = "../public/assets/red-heart.svg";
  } else {
    likesCount.innerText = "like";
    commentSvgElement.src = "../public/assets/heart.svg";
  }
};
