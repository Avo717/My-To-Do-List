function add() {
  const input = document.getElementById("input");
  const tasktext = input.value;
  const list = document.getElementById("list");

  if (tasktext !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = tasktext;
    span.addEventListener("click", function () {
      span.classList.toggle("underlined");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      list.removeChild(li);
    };
    li.appendChild(span);
    li.appendChild(deleteButton);
    list.appendChild(li);
    input.value = "";
  } else {
    alert("please enter a task ...");
  }
}
input.addEventListener("keypress", key);
function key() {
  if (event.keyCode === 13) {
    add();
  }
}
