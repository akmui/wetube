import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const deleteBtn = document.getElementById("deleteBtn");

const increaseNumber = () => {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const decreaseNumber = () => {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};


const addComment = (comment) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = comment;
    li.appendChild(span);
    commentList.prepend(li);
    increaseNumber();
};

const removeComment = () => {
    const li = document.querySelector("li");
    li.remove();
    decreaseNumber();
};

const sendComment = async (comment) => {
    const videoId = window.location.href.split("/videos/")[1];
    const response = await axios({
        url: `/api/${videoId}/comment`,
        method: "POST",
        data: {
            comment
        }
    });
    if (response.status == 200) {
        addComment(comment);
    }
};

const handleDelete = async () => {
    const videoId = window.location.href.split("/videos/")[1];
    const response = await axios({
        url: `/api/${videoId}/deletecomment`,
        method: "POST",
    });
    if (response.status == 200) {
        removeComment();
    }
};


function handleSubmit(event) {
    event.preventDefault();
    const commentInput = addCommentForm.querySelector("input");
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value = "";
}

function init() {
    addCommentForm.addEventListener("submit", handleSubmit);
    deleteBtn.addEventListener("click", handleDelete);
}

if (addCommentForm) {
    init();
}
