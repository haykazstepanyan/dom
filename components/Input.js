const Input = (changeHandler, value) => {
  const container = document
    .getElementById("search-template")
    .content.cloneNode(true);
  const input = container.querySelector("input");
  input.type = "text";
  input.value = value;
  input.classList.add = "input-search";
  input.addEventListener("input", changeHandler);
  setTimeout(() => input.focus(), 0);
  return container;
};

export default Input;
