const Post = ({ title, body }, value) => {
  const container = document
    .getElementById("post-template")
    .content.cloneNode(true);

  container.querySelector(".title").innerHTML = title.replaceAll(
    value,
    "<mark>" + value + "</mark>"
  );
  container.querySelector("p").innerHTML = body.replaceAll(
    value,
    "<mark>" + value + "</mark>"
  );
  return container;
};

export default Post;
