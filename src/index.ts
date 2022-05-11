const inputElement = document.getElementById("commentInput") as HTMLInputElement;
const formElement = document.getElementById("inputForm");
const ulElement = document.getElementById("commentsList") as HTMLUListElement;
const postElement = document.getElementById("postComment");
postElement?.addEventListener("mouseenter", ()=>{
    postElement.style.color = "#3FA7DB";    
})
postElement?.addEventListener("mouseleave", ()=>{
    postElement.style.color = "#A5D4EB";    
})
console.log(122);

console.log(formElement);
console.log(inputElement);
console.log(ulElement);
console.log(postElement);

if (formElement !== null) {
    console.log("im here");
    formElement?.addEventListener("submit", (event) => {
        event.preventDefault();
        if (inputElement !== null ) {
            const newMsg = inputElement.value;
            if(newMsg === ""){
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
            const newCommentHeaderElement = document.createElement("div");
            const newCommentBodyElement = document.createElement("span");
            newCommentHeaderElement.className = "commentHeader";
            newCommentBodyElement.innerText = ` ${newMsg}`;
            const newCommentHeaderBoldElement = document.createElement("b");
            newCommentHeaderBoldElement.innerText = "tonytoscani";
            newCommentHeaderElement.append(newCommentHeaderBoldElement, newCommentBodyElement);
            // extra info
            const newCommentInfoElement = document.createElement("div");
            newCommentInfoElement.className = "commentInfo";
            const newhourAgoElement = document.createElement("div");
            newhourAgoElement.className = "infoSubtitle";
            newhourAgoElement.innerText = "10 h";
            const newlikesInfoElement = document.createElement("b");
            newlikesInfoElement.className = "infoSubtitle";
            newlikesInfoElement.innerText = "1 like";
            const newReplayInfoElement = document.createElement("b")
            newReplayInfoElement.className = "infoSubtitle";
            newReplayInfoElement.innerText = "Reply";
            newCommentInfoElement.append(newhourAgoElement, newlikesInfoElement, newReplayInfoElement);
            // heart in the end
            const newCommentSvgElement = document.createElement("img");
            newCommentSvgElement.classList.add("svgImg", "commentHeart");
            newCommentSvgElement.src = "../public/assets/heart-3511.svg";
            newCommentSvgElement.alt = "heart";
            // li father
            newLiElement.className = "comment";
            newLiElement.append(newImgElement, newCommentHeaderElement, newCommentInfoElement, newCommentSvgElement);
            ulElement.append(newLiElement);
            inputElement.value = "";
        }
    })
}

console.log(2);


// <li class="comment">
//     <img src="https://cdn.pixabay.com/photo/2021/05/20/11/58/beauty-6268460_1280.jpg"
//         alt="profile Picture" class="profilePicture">
//     <div class="commentHeader">
//         <b>tonytoscani</b>
//         &#8226; Following
//     </div>
//     <div class="commentInfo">
//         <div class="infoSubtitle">10 h</div>
//         <div class="infoSubtitle"><b>1 like</b></div>
//         <div class="infoSubtitle"><b>Reply</b></div>
//     </div>
//     <img class="svgImg commentHeart" src="assets/heart-3511.svg" alt="heart">
// </li>