document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var commentText = document.getElementById("comment").value;

    if (username && commentText) {
        var commentContainer = document.createElement("div");
        commentContainer.classList.add("comment");

        var usernameElement = document.createElement("p");
        usernameElement.classList.add("username");
        usernameElement.textContent = username;

        var commentTextElement = document.createElement("p");
        commentTextElement.classList.add("comment-text");
        commentTextElement.textContent = commentText;

        commentContainer.appendChild(usernameElement);
        commentContainer.appendChild(commentTextElement);

        document.querySelector(".comments-container").appendChild(commentContainer);

        // Clear form fields
        document.getElementById("username").value = "";
        document.getElementById("comment").value = "";
    } else {
        alert("Please fill in both username and comment fields.");
    }
});
