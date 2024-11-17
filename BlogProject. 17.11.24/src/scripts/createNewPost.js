function createNewPosts() {
    const container = UI.createElement("div", { class: "container-root" }, [
        UI.createElement("div", { class: "form-wrapper" }, [
            UI.createElement("div", { class: "createNewPost-container" }, [
                UI.createElement("h3", { class: "createNewPost-title" }, "Create New Post"),
                UI.createElement("form", {}, [
                    UI.createElement("input", { id: "title", type: "text", placeholder: "Title of the post", required: true }),
                    UI.createElement("input", { id: "story", type: "text", placeholder: "Story (the main content of the post)", required: true }),
                    UI.createElement("input", { id: "authorName", type: "text", placeholder: "Author name", required: true }),
                    UI.createElement("input", { id: "image", type: "url", placeholder: "Image Link", required: true }),
                    UI.createElement("button", { type: "submit" }, "Create"),
                ]),
            ]),
        ]),
    ]);

    UI.render(container, document.body);
};

createNewPosts();

// create a new post
const title = document.getElementById("title");
const story = document.getElementById("story");
const authorName = document.getElementById("authorName");
const img = document.getElementById("image");

const createNewPostBtn = document.querySelector("button");

createNewPostBtn.addEventListener("click", function (ev) {
    ev.preventDefault();

    const newPost = {
        id: new Date().getTime(),
        title: title.value,
        story: story.value,
        authorName: authorName.value,
        img: img.value
    };
    
    const createdPosts = JSON.parse(localStorage.getItem("posts")) || [];
    createdPosts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(createdPosts));

    window.location.href = "./home.html";
});