const body = document.body;

function createNavBar() {
    const nav = document.createElement("nav")
    nav.classList = "navMenu1"

    const link1 = document.createElement("a")
    link1.innerText = "Home"
    link1.href = "./index.html"
    
    nav.append(link1)
    body.append(nav);
    
    return body;
}

createNavBar()

function createLoginModal() {
    const loginMain = document.createElement("main")
    loginMain.classList = "loginMain"
    const loginModal = document.createElement("div")
    loginModal.classList = "login"

    const inputName = document.createElement("input")
    inputName.placeholder = "User Name"
    const inputPass = document.createElement("input")
    inputPass.placeholder = "Password"
    const loginBtn = document.createElement("button")
    loginBtn.innerText = "Log In"
    loginBtn.classList = "btn"

    loginModal.append(inputName, inputPass, loginBtn)
    loginMain.append(loginModal)
    body.append(loginMain)
    return body
}

createLoginModal()