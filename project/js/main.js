const body = document.body;

function createNavBar() {
    const nav = document.createElement("nav")
    nav.classList = "navMenu"

    const link1 = document.createElement("a")
    link1.innerText = "Home"
    link1.href = "#"
    const link2 = document.createElement("a")
    link2.innerText = "About"
    link2.href = "#"
    const link3 = document.createElement("a")
    link3.innerText = "Courses"
    link3.href = "#"
    const link4 = document.createElement("a")
    link4.innerText = "Blog"
    link4.href = "#"
    const link5 = document.createElement("a")
    link5.innerText = "Log in"
    link5.href = "/login.html"
    
    nav.append(link1, link2, link3, link4, link5)
    body.append(nav);

    return body;
}
createNavBar();


function createHeader(){
    const header = document.createElement("header")
    header.classList = "heroSection"

    const leftSection = document.createElement("section")
    leftSection.classList = "leftSection"

    const rightSection = document.createElement("section")
    rightSection.classList = "rightSection"
    const article1 = document.createElement("div")
    article1.classList = "article1"
    const article2 = document.createElement("div")
    article2.classList = "article2"

    rightSection.append(article1, article2)
    header.append(leftSection, rightSection)
    body.append(header)

    return body;
}

createHeader();