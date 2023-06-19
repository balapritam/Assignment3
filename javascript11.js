//Create and Append Elements Example

const ul = document.getElementById("myList");

for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = i;
  ul.appendChild(li);
}
