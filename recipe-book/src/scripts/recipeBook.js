function createRecipeBook () {

    const container = UI.createElement("div", {class : "container-root"}, [
        UI.createElement("header", {class: "header"}, [
            UI.createElement("div", {class: "hero-cont"}, [
                UI.createElement("h1", {}, "Sweet Potato and Kale Bowl"),
                UI.createElement("p", {}, "Sit amet consectetur adipisicing elit. Minus laboriosam similique voluptates unde quas minima aliquid maxime natus labore eaque dolorum."),
                UI.createElement("img", {src: "./src/images/recipeImage1.jpg"}, "")
            ]),

            UI.createElement("div", {class: "ingredients"}, [
                UI.createElement("h2", {}, "Ingredients"),

                UI.createElement("div", {class: "potato-ingredient"}, [
                    UI.createElement("h5", {}, "For the sweet potato"),
                    UI.createElement("ul", {}, [
                        UI.createElement("li", {}, "consectetur adipisicing elit"),
                        UI.createElement("li", {}, "Lorem ipsum"),
                        UI.createElement("li", {}, "sit amet"),
                        UI.createElement("li", {}, "adipisicing elit"),
                    ]),
                ]),

                UI.createElement("div", {class: "kale-ingredient"}, [
                    UI.createElement("h5", {}, "For the kale"),
                    UI.createElement("ul", {}, [
                        UI.createElement("li", {}, "consectetur adipisicing elit"),
                        UI.createElement("li", {}, "sit amet"),
                        UI.createElement("li", {}, "adipisicing elit"),
                    ]),
                ]),
            ]),

            UI.createElement("div", {class: "instructions"}, [
                UI.createElement("h2", {}, "Instructions"),
                UI.createElement("ol", {}, [
                    UI.createElement("li", {}, "Lorem ipsum dolor sit amet consectetur adipisicing elit"),
                    UI.createElement("li", {}, "dolor sit amet consectetur eligendi, cupiditate."),
                    UI.createElement("li", {}, "adipisicing elit consectetur adipisicing "),
                ]),

            ]),
        ])
    ])

    UI.render(container, document.body);
}


createRecipeBook();