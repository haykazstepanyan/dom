import { fetchData } from "./helpers.js";
import App from "./components/App.js";

const state = {
  users: [],
  posts: [],
  filteredPosts: [],
  value: "",
};

window.addEventListener("load", async () => {
  const posts = await fetchData("posts");
  state.posts = posts;
  const usersID = new Set();
  posts.map((post) => {
    usersID.add(post.userId);
  });
  const requests = Array.from(usersID).map((id) => fetchData(`users/${id}`));
  const users = await Promise.all(requests);
  state.users = users;
  render();
});

const changeHandler = (e) => {
  const value = e.target.value;
  const filtered = state.posts.filter(
    (post) => post.title.includes(value) || post.body.includes(value)
  );
  state.filteredPosts = filtered;
  state.value = value;
  render();
};

const render = () => {
  //   console.log(state.filteredPosts.length ? state.filteredPosts : state.posts);
  root.innerHTML = "";

  root.append(
    App(
      state.value ? state.filteredPosts : state.posts,
      changeHandler,
      state.value
    )
  );
};
