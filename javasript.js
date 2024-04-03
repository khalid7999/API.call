const root = document.querySelector(".root");
const url = `https://rickandmortyapi.com/api`;
const btn = document.querySelector("button");
const search = document.querySelector("input");

let myPage = 1

const myUrl = `https://rickandmortyapi.com/api/character?page=${myPage}`
const pagePlus = document.querySelector("#plus");
const PageMoin = document.querySelector("#moin");


pagePlus.addEventListener("click",function () {
  myPage++
  console.log(myPage)
  console.log(myUrl.slice(0,-1).concat(myPage))
  const nextPäge = myUrl.slice(0,-1).concat(myPage)
  fetch(nextPäge)
      .then(res => res.json())
      .then(data => {
        const characters = data.results;

        characters.forEach(element => {
          const display = document.createElement("div");
          display.innerHTML = `
            <img src=${element.image} alt=${element.name}>
            <h1>${element.name}</h1>
            <h2>${element.status}</h2>
            <h3>${element.gender}</h3>
          `;
          root.append(display);
        });
      




        btn.addEventListener("click", function() {
          const nameFiltered = characters.filter(item => item.name.includes(search.value));
          console.log(nameFiltered);
          root.innerHTML = ''; 
          nameFiltered.forEach(character => {
            const display = document.createElement("div");
            display.innerHTML = `
              <img src=${character.image} alt=${character.name}>
              <h1>${character.name}</h1>
              <h2>${character.status}</h2>
              <h3>${character.gender}</h3>
            `;
            root.append(display);
          });
        });
      })
      .catch(err => console.log(err));
 
  
})









    fetch(myUrl)
      .then(res => res.json())
      .then(data => {
        const characters = data.results;

        characters.forEach(element => {
          const display = document.createElement("div");
          display.innerHTML = `
            <img src=${element.image} alt=${element.name}>
            <h1>${element.name}</h1>
            <h2>${element.status}</h2>
            <h3>${element.gender}</h3>
          `;
          root.append(display);
        });
      




        btn.addEventListener("click", function() {
          const nameFiltered = characters.filter(item => item.name.includes(search.value));
          console.log(nameFiltered);
          root.innerHTML = ''; 
          nameFiltered.forEach(character => {
            const display = document.createElement("div");
            display.innerHTML = `
              <img src=${character.image} alt=${character.name}>
              <h1>${character.name}</h1>
              <h2>${character.status}</h2>
              <h3>${character.gender}</h3>
            `;
            root.append(display);
          });
        });
      })
      .catch(err => console.log(err));
 






