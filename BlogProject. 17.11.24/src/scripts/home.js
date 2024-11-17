function createHomeLayout() {
    const container = UI.createElement("div", {class: "container-root"}, 
    [
        UI.createElement("header", {class: "header"},
        [
            UI.createElement("a", { href : "./register.html"}, "Registration"),
            UI.createElement("a", { href : "./index.html"}, "Log In"),
            UI.createElement("a", { href: "./createPost.html"}, "Create Post")
        ]
        ),
        UI.createElement("main", {class: "main-section"}, [
            UI.createElement("aside", {class: "sidebar"}, [
                UI.createElement("h2", {}, "Bloggers"),
                UI.createElement("div", {class: "blogers__content"}, [])
            ]),
            UI.createElement("div", {class: "section"}, [
                UI.createElement("section", {class: "box"}, [
                    UI.createElement("div", {class: "posts__content"}, [])
                ]),
                UI.createElement("footer", {class: "footer"}, "footer")
            ])
        ]), 
    ])
    UI.render(container, document.body);
}

createHomeLayout();