const list = document.querySelector(".list")
const url = "https://breakingbadapi.com/api/characters/";

async function getCharacter() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result)
    const select = document.querySelector("select");

    select.onchange = function (event) {
      list.innerHTML = "";
      console.log(event.target.value)
      const inputValue = event.target.value;

      for (let i = 1; i <= inputValue; i++) {
        list.innerHTML += `<a href="details.html?char_id=${inputValue}"><div class="item">${i}</div></a>`
      }
    }

  } catch (error) {
    console.log(error)
  }
}

getCharacter();