const getData = () =>
{
    return fetch("https://poetrydb.org/title/Ozymandias/lines.json",{
      mode: "cors",
    });
}

// Exporting the getData function
export default getData;