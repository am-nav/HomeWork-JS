function createLoginLayout() {
    const container = document.createElement("div")
    container.setAttribute("class", "container-root")

    const header = document.createElement("header")
    header.setAttribute("class", "header")

    const link = document.createElement("a")
    link.setAttribute("href", "./home.html")
    link.innerText = "Home"

    const formWrapper = document.createElement("div")
    formWrapper.setAttribute("class", "form-wrapper")

    const loginContainer = document.createElement("div")
    loginContainer.setAttribute("class", "login-container")

    const form = document.createElement("form")

    const inputUsername = document.createElement("input")
    inputUsername.setAttribute("type", "text")
    inputUsername.setAttribute("placeholder", "Username")

    const inputPassword = document.createElement("input")
    inputPassword.setAttribute("type", "password")
    inputPassword.setAttribute("placeholder", "Password")

    const buttonLogin = document.createElement("button")
    buttonLogin.setAttribute("type", "submit")
    buttonLogin.innerText = "Login"

    header.append(link)
    form.append(inputUsername, inputPassword, buttonLogin)
    loginContainer.append(form)
    formWrapper.append(loginContainer)
    container.append(header, formWrapper)

    document.body.append(container)
}

createLoginLayout();

