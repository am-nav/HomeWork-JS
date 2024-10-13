function createRegistrationForm() {
    const container = UI.createElement("div", {
        class: "container-root"
    }, 
    [
        UI.createElement("header", {class: "header"},
        [
            UI.createElement("a", { href : "./home.html"}, "Home"),
            UI.createElement("a", { href : "./index.html"}, "Log In")
        ]
        ),
        UI.createElement("div", {class: "form-wrapper"}, [
            UI.createElement("div", {class: "reg-container"}, [
                UI.createElement("form", {}, [
                    UI.createElement("input", { type: "text", placeholder: "First Name", required: true }),
                    UI.createElement("input", { type: "text", placeholder: "Last Name", required: true }),
                    UI.createElement("select", {}, [
                        UI.createElement("option", {}, "City"),
                        UI.createElement("option", {}, "Berlin"),
                        UI.createElement("option", {}, "Praha")
                    ]),
                    UI.createElement("div", { class: "gender" }, [
                        UI.createElement("label", {}, [
                            UI.createElement("input", { type: "radio"}), "Male"
                        ]),
                        UI.createElement("label", {}, [
                            UI.createElement("input", { type: "radio"}), "Female"
                        ])
                    ]),
                    UI.createElement("button", { type: "submit" }, "Submit")
                ])
            ]),
           
        ]), 
    ])

    UI.render(container, document.body);
}

createRegistrationForm();