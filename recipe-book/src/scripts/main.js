function createHeaderCard () {

    const container = UI.createElement("div", {class : "container"}, [
        UI.createElement("header", {class: "header"}, [
            UI.createElement("div", {class: "hero"}, [
                UI.createElement("h1", {}, "Your Name"),
                UI.createElement("span", {}, "a subhead goes here")
            ]),
            UI.createElement("div", {class: "hero-content"}, [
                UI.createElement("h2", {}, "2ND LEVEL HEADING"),
                UI.createElement("div", {class: "hero-textContent"},[
                    UI.createElement("div", {class: "hero-text"}, [
                        UI.createElement("p", {}, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae sunt quaerat autem reprehenderit. Ea neque illo quae impedit aspernatur non eum! Totam natus, eum quas, ut quibusdam molestias velit enim quam, provident id nam quae delectus temporibus eos. Optio porro itaque hic sequi, facere repudiandae iusto numquam quisquam ipsa culpa praesentium laboriosam et beatae accusantium perspiciatis dolorem omnis magnam. Dolor sequi praesentium autem facilis ullam eum eligendi reprehenderit veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ullam asperiores illum, optio consectetur iste aperiam similique dolorem voluptatibus adipisci.")
                    ]),
                    UI.createElement("div", {class: "hero-image"}, [
                        UI.createElement("img", {src: "./src/images/hero-image.jpg"},"")
                    ] )
                ] ),
                UI.createElement("div", {class: "hero-links"}, [
                    UI.createElement("a", {href: "#"}, "LINK 1"),
                    UI.createElement("a", {href: "#"}, "LINK 2"),
                    UI.createElement("a", {href: "#"}, "LINK 3"),
                ])
            ]),
        ])
    ])

    UI.render(container, document.body);
}


createHeaderCard();