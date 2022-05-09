import Post from "./Post.js";

const Posts = (posts, value) => {
  const fragment = document.createDocumentFragment();
  const container = document.createElement("div");
  container.classList.add("posts");
  if (!posts.length) {
    const emptyPost = document.createElement("h3");
    emptyPost.innerText = "Nothing to show!";
    container.append(emptyPost);
    return container;
  }

  posts.map((post) => fragment.append(Post(post, value)));
  container.append(fragment);
  return container;
};

export default Posts;
