const list = document.querySelector(".list")
const url = "https://breakingbadapi.com/api/characters/";

const select = document.querySelector("select");

select.onchange = function (event) {
  list.innerHTML = "";
  console.log(event.target.value)
  const inputValue = event.target.value;

  for (let i = 1; i <= inputValue; i++) {
    list.innerHTML += `<a href="details.html?id=${i}"><div class="item">${i}</div></a>`
  }
}