import { createNewElement, likeCommentClicked } from "./helpers.js";

const createCommentText = (userName: string, comment: string) => {
  const commentHeaderElement = createNewElement("div", "commentHeader", "");
  const commentHeaderAndContentElement = document.createElement("div");
  const commentBodyElement = createNewElement("span", "", comment);
  const commentHeaderBoldElement = createNewElement("b", "", `${userName} `);
  commentHeaderAndContentElement.append(
    commentHeaderBoldElement,
    commentBodyElement
  );
  commentHeaderElement.append(commentHeaderAndContentElement);
  return commentHeaderElement;
};

const createCommentExraInfo = () => {
  const commentInfoElement = createNewElement("div", "commentInfo", "");
  const hourAgoElement = createNewElement("div", "infoSubtitle", "10 h");
  const likesInfoElement = createNewElement("b", "infoSubtitle", "like");
  const replayInfoElement = createNewElement("b", "infoSubtitle", "Reply");
  commentInfoElement.append(
    hourAgoElement,
    likesInfoElement,
    replayInfoElement
  );
  return { commentInfoElement, likesInfoElement };
};

const createCommentLike = (likesInfoElement: HTMLElement) => {
  const commentSvgElement = createNewElement("img", "commentHeart", "");
  if (commentSvgElement instanceof HTMLImageElement) {
    commentSvgElement.src = "../public/assets/heart.svg";
    commentSvgElement.alt = "heart";
    commentSvgElement.addEventListener("click", () => {
      likeCommentClicked(likesInfoElement, commentSvgElement);
    });
  }
  return commentSvgElement;
};

export const makeComment = (
  profilePicture: string,
  userName: string,
  comment: string
) => {
  const LIElement = createNewElement("li", "comment", "");
  const imgElement = createNewElement("img", "profilePicture", "");
  if (imgElement instanceof HTMLImageElement) {
    imgElement.src = profilePicture;
    imgElement.alt = "profile Picture";
  }
  const commentElement = createNewElement("div", "comonComment", "");
  const commentHeaderElement = createCommentText(userName, comment);
  const { commentInfoElement, likesInfoElement } = createCommentExraInfo();
  const commentLikeHeart = createCommentLike(likesInfoElement);
  commentHeaderElement.append(commentInfoElement);
  commentElement.append(imgElement, commentHeaderElement);
  LIElement.append(commentElement, commentLikeHeart);
  return LIElement;
};
