import Post from "./Post.js";

const Posts = (posts, value) => {
  const fragment = document.createDocumentFragment();
  const container = document.createElement("div");
  container.classList.add("posts");
  if (!posts.length) {
    const clone = document
      .getElementById("no-data-found-template")
      .content.cloneNode(true);
    return clone;
  }

  posts.map(post => fragment.append(Post(post, value)));
  container.append(fragment);
  return container;
};

export default Posts;
