// imported the getData function from the data.js file
import getData from "./modules/data.js";

const data = getData();
const root = document.getElementById("root");

const card = (line) =>
{
    return `
        <p class="line">${line}</p>
    `;
}

data.then((res) => {
    return res.json();
}).then((data) => {
  data[0].lines.forEach((line) => {
      root.insertAdjacentHTML("beforeend", card(line));
  });
});