import Input from "./Input.js";
import Posts from "./Posts.js";

const App = (posts, changeHandler, value) => {
  const container = document.createElement("div");
  container.append(Input(changeHandler, value), Posts(posts, value));
  return container;
};

export default App;
