const idContainer = document.querySelector(".id")
const detailsContainer = document.querySelector(".details")

const queryString = document.location.search;
console.log(queryString)
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id)

idContainer.innerHTML = id;

const url = "https://breakingbadapi.com/api/characters/" + id

console.log(url)

async function getSingleBR() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result)
    detailsContainer.innerHTML = `<div class="img" style="background-image: url('${result[0].img}')"></div>
                                  <h1>${result[0].name}</h1>
                                  <p>Occupation: <b>${result[0].occupation}</b></p>`
  } catch (error) {

  }
}

getSingleBR();