import { createNewElement } from "./create-element.js";
import { likeComment } from "./helpers.js";

const createCommentText = (userName: string, comment: string) => {
  const commentHeaderElement = createNewElement({
    tag: "div",
    className: "commentText",
  });
  const commentHeaderAndContentElement = createNewElement({
    tag: "div",
    className: "commentContentContainer",
  });
  const commentBodyElement = createNewElement({
    tag: "span",
    className: "commentContent",
    innerText: comment,
  });
  const commenterName = createNewElement({
    tag: "div",
    className: "boldText",
    innerText: `${userName}`,
  });
  commentHeaderAndContentElement.append(commenterName, commentBodyElement);
  commentHeaderElement.append(commentHeaderAndContentElement);
  return commentHeaderElement;
};

const createCommentExraInfo = () => {
  const commentInfoElement = createNewElement({
    tag: "div",
    className: "commentInfo",
  });
  const hourAgoElement = createNewElement({
    tag: "div",
    className: "infoSubtitle",
    innerText: "0 m",
  });
  const likesCount = createNewElement({
    tag: "div",
    className: "infoSubtitle",
    innerText: "like",
  });
  const replyElement = createNewElement({
    tag: "div",
    className: "infoSubtitle",
    innerText: "Reply",
  });
  commentInfoElement.append(hourAgoElement, likesCount, replyElement);
  return { commentInfoElement, likesCount };
};

const createCommentLikeButton = (likesCount: HTMLElement) => {
  const commentSvgElement = createNewElement({
    tag: "img",
    className: "commentHeart",
  });
  if (commentSvgElement instanceof HTMLImageElement) {
    commentSvgElement.src = "../public/assets/heart.svg";
    commentSvgElement.alt = "heart";
    commentSvgElement.addEventListener("click", () => {
      likeComment(likesCount, commentSvgElement);
    });
  }
  return commentSvgElement;
};

export const createComment = (
  profilePicture: string,
  userName: string,
  comment: string
) => {
  const liElement = createNewElement({ tag: "li", className: "comment" });
  const imgElement = createNewElement({
    tag: "img",
    className: "profilePicture",
  });
  if (imgElement instanceof HTMLImageElement) {
    imgElement.src = profilePicture;
    imgElement.alt = "profile Picture";
  }
  const commentElement = createNewElement({
    tag: "div",
    className: "comonComment",
  });
  const commentHeaderElement = createCommentText(userName, comment);
  const { commentInfoElement, likesCount } = createCommentExraInfo();
  const commentLikeHeart = createCommentLikeButton(likesCount);
  commentHeaderElement.append(commentInfoElement);
  commentElement.append(imgElement, commentHeaderElement);
  liElement.append(commentElement, commentLikeHeart);
  return liElement;
};
