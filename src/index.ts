const inputElement = document.getElementById("commentInput");
const formElement = document.getElementById("inputForm");
const ulElement = document.getElementById("commentsList");
//submit form
if (formElement !== null) {
    formElement?.addEventListener("submit", (event) => {
        event.preventDefault();
        if (inputElement !== null) {
            const ppURL = "https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg";
            const newMsg = (inputElement as HTMLInputElement).value;
            if (newMsg === "") {
                return;
            }
            addComment(ppURL, "tonytoscani", newMsg);
        }
    })
}

const createNewElement = (tag: string, className: string, innerText: string) => {
    const newElement = document.createElement(tag);
    newElement.className = className;
    newElement.innerText = innerText;
    return newElement;
}

const addComment = (profilePicture: string, userName: string, comment: string) => {
    // li father
    const newLiElement = createNewElement("li", "comment", "");
    // profile pic
    const newImgElement = createNewElement("img", "profilePicture", "") as HTMLImageElement;
    newImgElement.src = profilePicture;
    newImgElement.alt = "profile Picture";
    // comment 
    const newCommentElement = createNewElement("div", "comonComment", "");
    //comment Header
    const newCommentHeaderElement = createNewElement("div", "commentHeader", "");
    const newCommentHeaderAndContentElement = document.createElement("div");
    const newCommentBodyElement = createNewElement("span", "", comment);
    const newCommentHeaderBoldElement = createNewElement("b", "", `${userName} `);
    newCommentHeaderAndContentElement.append(newCommentHeaderBoldElement, newCommentBodyElement);
    newCommentHeaderElement.append(newCommentHeaderAndContentElement);
    // extra info
    const newCommentInfoElement = createNewElement("div", "commentInfo", "");
    const newhourAgoElement = createNewElement("div", "infoSubtitle", "10 h");
    const newlikesInfoElement = createNewElement("b", "infoSubtitle", "like");;
    const newReplayInfoElement = createNewElement("b", "infoSubtitle", "Reply");;
    newCommentInfoElement.append(newhourAgoElement, newlikesInfoElement, newReplayInfoElement);
    newCommentHeaderElement.append(newCommentInfoElement)
    // heart in the end
    const newCommentSvgElement = createNewElement("img", "commentHeart", "") as HTMLImageElement;
    newCommentSvgElement.src = "../public/assets/heart-3511.svg"
    newCommentSvgElement.alt = "heart";
    newCommentSvgElement.addEventListener("click", () => {
        if (newlikesInfoElement.innerText === "like") {
            newlikesInfoElement.innerText = "1 like"
            newCommentSvgElement.src = "../public/assets/redHeart.svg"
        } else {
            newlikesInfoElement.innerText = "like"
            newCommentSvgElement.src = "../public/assets/heart-3511.svg";
        }
    })
    // li father
    newCommentElement.append(newImgElement, newCommentHeaderElement);
    newLiElement.append(newCommentElement, newCommentSvgElement);
    if (ulElement === null) {
        return
    }
    ulElement.append(newLiElement);
    (inputElement as HTMLInputElement).value = "";
}
