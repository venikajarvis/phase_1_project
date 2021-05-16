document.addEventListener("DOMContentLoaded", () => {
    fetchBestsellersList();
    renderBestsellersList();
    newComment();
    createDeleteButton();
});

const fetchBestsellersList = () => {
    fetch("https://api.nytimes.com/svc/books/v3/reviews.json?author=Toni+Morrison&api-key=HrjUV85s5oB3yvo20g4iS2hR8VBg4WD9")
    .then(response => response.json())
    .then ((data) => renderBestsellersList(data.results));
};

const renderBestsellersList = (list) => {
    const reviewArrayItems = document.querySelector(".reviewArrayItems");
    list.map((list) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h2>Link to Book Review: <a href="${list.url}">${list.book_title}</a></h2>
            <p>Publication Date: ${list.publication_dt}</p>
            <p>Reviewer: ${list.byline ? list.byline : "N/A"}</p>
            <p>Summary of Review: ${list.summary ? list.summary : "N/A"}</p>
        `
        reviewArrayItems.append(div);
    });
};

const notes = document.querySelector("#comments-on-reviews");
    notes.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("#comment-input");
        if(input.value) {
          newComment (input.value);
          event.target.reset();
        }
});

function newComment(comment) {
    const list = document.querySelector("#added-comments");
    const item = document.createElement("li");   
    const deleteCommentButton = createDeleteButton();
    item.innerText = comment;
    item.append(deleteCommentButton);
    list.append(item);
};

function createDeleteButton() {
    const deleteCommentButton = document.createElement("span");
    deleteCommentButton.innerText = "✖️";
    deleteCommentButton.addEventListener("click", (event) => {
        event.target.parentNode.remove();
    });
    return deleteCommentButton;
};

