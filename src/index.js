var inputElement = document.getElementById("commentInput");
var formElement = document.getElementById("inputForm");
var ulElement = document.getElementById("commentsList");
//submit form
if (formElement !== null) {
    formElement === null || formElement === void 0 ? void 0 : formElement.addEventListener("submit", function (event) {
        event.preventDefault();
        if (inputElement !== null) {
            var newMsg = inputElement.value;
            if (newMsg === "") {
                return;
            }
            // li father
            var newLiElement = document.createElement("li");
            // profile pic
            var newImgElement = document.createElement("img");
            newImgElement.className = "profilePicture";
            newImgElement.src = "https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg";
            newImgElement.alt = "profile Picture";
            // comment 
            var newCommentElement = document.createElement("div");
            newCommentElement.className = "comonComment";
            //comment Header
            var newCommentHeaderElement = document.createElement("div");
            var newCommentHeaderAndContentElement = document.createElement("div");
            var newCommentBodyElement = document.createElement("span");
            newCommentHeaderElement.className = "commentHeader";
            newCommentBodyElement.innerText = " ".concat(newMsg);
            var newCommentHeaderBoldElement = document.createElement("b");
            newCommentHeaderBoldElement.innerText = "tonytoscani";
            newCommentHeaderAndContentElement.append(newCommentHeaderBoldElement, newCommentBodyElement);
            newCommentHeaderElement.append(newCommentHeaderAndContentElement);
            // extra info
            var newCommentInfoElement = document.createElement("div");
            newCommentInfoElement.className = "commentInfo";
            var newhourAgoElement = document.createElement("div");
            newhourAgoElement.className = "infoSubtitle";
            newhourAgoElement.innerText = "10 h";
            var newlikesInfoElement_1 = document.createElement("b");
            newlikesInfoElement_1.className = "infoSubtitle";
            newlikesInfoElement_1.innerText = "like";
            var newReplayInfoElement = document.createElement("b");
            newReplayInfoElement.className = "infoSubtitle";
            newReplayInfoElement.innerText = "Reply";
            newCommentInfoElement.append(newhourAgoElement, newlikesInfoElement_1, newReplayInfoElement);
            newCommentHeaderElement.append(newCommentInfoElement);
            // heart in the end
            var newCommentSvgElement_1 = document.createElement("img");
            newCommentSvgElement_1.className = "commentHeart";
            newCommentSvgElement_1.src = "../public/assets/heart-3511.svg";
            newCommentSvgElement_1.style.fontSize = "0.55em";
            newCommentSvgElement_1.alt = "heart";
            newCommentSvgElement_1.addEventListener("click", function () {
                if (newlikesInfoElement_1.innerText === "like") {
                    newlikesInfoElement_1.innerText = "1 like";
                    newCommentSvgElement_1.src = "../public/assets/redHeart.svg";
                }
                else {
                    newlikesInfoElement_1.innerText = "like";
                    newCommentSvgElement_1.src = "../public/assets/heart-3511.svg";
                }
            });
            // li father
            newLiElement.className = "comment";
            newCommentElement.append(newImgElement, newCommentHeaderElement);
            newLiElement.append(newCommentElement, newCommentSvgElement_1);
            if (ulElement === null) {
                return;
            }
            ulElement.append(newLiElement);
            inputElement.value = "";
        }
    });
}
