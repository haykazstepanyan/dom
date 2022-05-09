const Post = (post, value) => {
  const container = document.createElement("div");
  container.classList.add("post");

  const heading = document.createElement("h3");
  const paragraph = document.createElement("p");
  heading.innerText = post.title;
  paragraph.innerText = post.body;
  if (value) {
    heading.innerHTML = heading.innerText.replaceAll(
      value,
      "<mark>" + value + "</mark>"
    );
    paragraph.innerHTML = paragraph.innerText.replaceAll(
      value,
      "<mark>" + value + "</mark>"
    );
  }
  container.append(heading, paragraph);
  return container;
};

export default Post;
