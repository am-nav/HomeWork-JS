function createHomeLayout() {
    const container = UI.createElement("div", {
        class: "container-root"
    }, 
    [
        UI.createElement("header", {class: "header"},
        [
            UI.createElement("a", { href : "./index.html"}, "Log In"),
            UI.createElement("a", { href : "./register.html"}, "Registration")
        ]
        ),
        UI.createElement("main", {class: "main-section"}, [
            UI.createElement("nav", {class: "sidebar"}, "nav"),
            UI.createElement("div", {class: "section"}, [
                UI.createElement("section", {class: "box"}, "section"),
                UI.createElement("section", {class: "box"}, "section"),
                UI.createElement("footer", {class: "footer"}, "footer")
            ])
        ]), 
    ])
    UI.render(container, document.body);
}


createHomeLayout();