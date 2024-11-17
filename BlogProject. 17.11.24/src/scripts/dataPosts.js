const posts = [
  {
    id: 1,
    title: "The Adventures of Alice in Wonderland",
    story: "Alice was beginning to get very tired of sitting by her sister on the bank and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations.",
    authorName: "Lewis Carroll",
    img: "https://ik.imagekit.io/panmac/tr:f-auto,w-740,pr-true//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/84f9dc39-0868-4cec-aeaa-2356387f37ce/Alice%E2%80%99s%20Adventures%20in%20Wonderland%20-%20Header.png",
  },
  {
    id: 2,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    story: "One ring to rule them all, one ring to find them, one ring to bring them all and in the darkness bind them, in the Land of Mordor where the Shadows lie.",
    authorName: "J.R.R. Tolkien",
    img: "https://img.hulu.com/user/v3/artwork/3c4e0a9f-c6f2-44f4-a703-a18c6be2a937?base_image_bucket_name=image_manager&base_image=243fcf14-8e45-4441-96a8-be510660958a&size=600x338&format=webp",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    story: "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.",
    authorName: "Jane Austen",
    img: "https://wellsvillesun.com/wp-content/uploads/2024/01/pride-and-prejudice-book-summary.jpg.webp",
  },
];

const postsContent = document.querySelector(".posts__content"); 

const newCreatePosts = JSON.parse(localStorage.getItem("posts")) || [];
posts.push(...newCreatePosts);

function renderPosts(posts) {
  posts.forEach((post) => {
    const postCard = UI.createElement("div", {class: "post__card"}, [
      UI.createElement("div", {class: "post__card__info"}, [
        UI.createElement("h2", {}, `${post.authorName}`),
        UI.createElement("h4", {}, `${post.title}`),
      ]),
      UI.createElement("div", {class: "post__card__description"}, [
        UI.createElement("p", {}, `${post.story}`),
        UI.createElement("img", {src : post.img}, "")
      ])
    ]);
    postsContent.prepend(postCard);
  });
}

window.addEventListener('load', function() {
  renderPosts(posts);
});
