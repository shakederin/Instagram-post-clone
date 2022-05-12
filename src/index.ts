const inputElement = document.getElementById("commentInput");
const formElement = document.getElementById("inputForm");
const ulElement = document.getElementById("commentsList");
const postElement = document.getElementById("postComment");

//post comment button
postElement?.addEventListener("mouseenter", () => {
    postElement.style.color = "#3FA7DB";
})
postElement?.addEventListener("mouseleave", () => {
    postElement.style.color = "#A5D4EB";
})

//submit form
if (formElement !== null) {
    formElement?.addEventListener("submit", (event) => {
        event.preventDefault();
        if (inputElement !== null) {
            const newMsg = (inputElement as HTMLInputElement).value;
            if (newMsg === "") {
                return;
            }
            // li father
            const newLiElement = document.createElement("li");
            // profile pic
            const newImgElement = document.createElement("img");
            newImgElement.className = "profilePicture";
            newImgElement.src = "https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg";
            newImgElement.alt = "profile Picture";
            // comment 
            const newCommentElement = document.createElement("div");
            newCommentElement.className = "comonComment";
            //comment Header
            const newCommentHeaderElement = document.createElement("div");
            const newCommentHeaderAndContentElement = document.createElement("div");
            const newCommentBodyElement = document.createElement("span");
            newCommentHeaderElement.className = "commentHeader";
            newCommentBodyElement.innerText = ` ${newMsg}`;
            const newCommentHeaderBoldElement = document.createElement("b");
            newCommentHeaderBoldElement.innerText = "tonytoscani";
            newCommentHeaderAndContentElement.append(newCommentHeaderBoldElement, newCommentBodyElement);
            newCommentHeaderElement.append(newCommentHeaderAndContentElement);
            // extra info
            const newCommentInfoElement = document.createElement("div");
            newCommentInfoElement.className = "commentInfo";
            const newhourAgoElement = document.createElement("div");
            newhourAgoElement.className = "infoSubtitle";
            newhourAgoElement.innerText = "10 h";
            const newlikesInfoElement = document.createElement("b");
            newlikesInfoElement.className = "infoSubtitle";
            newlikesInfoElement.innerText = "like";
            const newReplayInfoElement = document.createElement("b")
            newReplayInfoElement.className = "infoSubtitle";
            newReplayInfoElement.innerText = "Reply";
            newCommentInfoElement.append(newhourAgoElement, newlikesInfoElement, newReplayInfoElement);
            newCommentHeaderElement.append(newCommentInfoElement)
            // heart in the end
            const newCommentSvgElement = document.createElement("img");
            newCommentSvgElement.className = "commentHeart";
            newCommentSvgElement.src = "../public/assets/heart-3511.svg"

            newCommentSvgElement.style.fontSize = "0.55em"
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
            newLiElement.className = "comment";
            newCommentElement.append(newImgElement, newCommentHeaderElement);
            newLiElement.append(newCommentElement, newCommentSvgElement);
            if (ulElement === null) {
                return
            }
            ulElement.append(newLiElement);
            (inputElement as HTMLInputElement).value = "";
        }
    })
}



