document.addEventListener("DOMContentLoaded", () => {
    fetchBestsellersList();
    renderBestsellersList();
    newComment();
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
            <h2>${list.book_title}</h2>
            <p>Link to article: ${list.url}</p>
            <p>Publication Date: ${list.publication_dt}</p>
            <p>Reviewer (if available): ${list.byline}</p>
            <p>Summary of Review (if available): ${list.summary}</p>
        `
        reviewArrayItems.append(div);
    });

}

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
    
    const deleteCommentButton = document.createElement("p");
    
    list.innerHTML += `<li>${comment}</li>`;
    
    deleteCommentButton.innerText = "X"
    item.innerText = list
    item.append(deleteCommentButton)
    };