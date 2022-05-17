const inputElement = document.getElementById("commentInput");
const formElement = document.getElementById("inputForm");
const ulElement = document.getElementById("commentsList");
//submit form
if (formElement) {
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
    if (ulElement) {
        // li father
        const LIElement = createNewElement("li", "comment", "");
        // profile pic
        const imgElement = createNewElement("img", "profilePicture", "") as HTMLImageElement;
        imgElement.src = profilePicture;
        imgElement.alt = "profile Picture";
        // comment 
        const commentElement = createNewElement("div", "comonComment", "");
        //comment Header
        const commentHeaderElement = createNewElement("div", "commentHeader", "");
        const commentHeaderAndContentElement = document.createElement("div");
        const commentBodyElement = createNewElement("span", "", comment);
        const commentHeaderBoldElement = createNewElement("b", "", `${userName} `);
        commentHeaderAndContentElement.append(commentHeaderBoldElement, commentBodyElement);
        commentHeaderElement.append(commentHeaderAndContentElement);
        // extra info
        const commentInfoElement = createNewElement("div", "commentInfo", "");
        const hourAgoElement = createNewElement("div", "infoSubtitle", "10 h");
        const likesInfoElement = createNewElement("b", "infoSubtitle", "like");;
        const replayInfoElement = createNewElement("b", "infoSubtitle", "Reply");;
        commentInfoElement.append(hourAgoElement, likesInfoElement, replayInfoElement);
        commentHeaderElement.append(commentInfoElement)
        // heart in the end
        const commentSvgElement = createNewElement("img", "commentHeart", "") as HTMLImageElement;
        commentSvgElement.src = "../public/assets/heart.svg"
        commentSvgElement.alt = "heart";
        commentSvgElement.addEventListener("click", () => {
            likeCommentClicked(likesInfoElement, commentSvgElement)
        })
        // li father
        commentElement.append(imgElement, commentHeaderElement);
        LIElement.append(commentElement, commentSvgElement);

        ulElement.append(LIElement);
        (inputElement as HTMLInputElement).value = "";
    }
}

const likeCommentClicked = (likesInfoElement: HTMLElement, commentSvgElement: HTMLImageElement) => {
    if (likesInfoElement.innerText === "like") {
        likesInfoElement.innerText = "1 like"
        commentSvgElement.src = "../public/assets/redHeart.svg"
    } else {
        likesInfoElement.innerText = "like"
        commentSvgElement.src = "../public/assets/heart.svg";
    }
}