const Input = (changeHandler, value) => {
  const container = document.createElement("div");
  container.classList.add("form");
  const input = document.createElement("input");
  input.type = "text";
  input.value = value;
  input.classList.add = "input-search";
  input.addEventListener("input", changeHandler);
  container.append(input);
  setTimeout(() => input.focus(), 0);
  return container;
};

export default Input;
