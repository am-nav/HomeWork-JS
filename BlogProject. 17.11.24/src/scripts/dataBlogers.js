const bloggers = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    avatar: "https://www.w3schools.com/howto/img_avatar2.png"
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    avatar: "https://www.w3schools.com/w3images/avatar2.png"
  },
  {
    id: 3,
    firstName: "Monica",
    lastName: "Brown",
    avatar: "https://www.w3schools.com/w3images/avatar6.png"
  }
];

const blogersContent = document.querySelector(".blogers__content");

function renderBloggers(bloggers) {
  bloggers.forEach((blogger) => {
    const bloggerCard = UI.createElement("div", { class: "bloger__card" }, [
      UI.createElement("div", { class: "bloger__image" }, [
        UI.createElement("img", { src: blogger.avatar}, "")
      ]),
      UI.createElement("div", { class: "bloger__info" }, [
        UI.createElement("h4", {}, `${blogger.firstName} ${blogger.lastName}`)
      ])
    ]);
    blogersContent.appendChild(bloggerCard);
  });
}


window.addEventListener('load', function() {
  renderBloggers(bloggers);
});