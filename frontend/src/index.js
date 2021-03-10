const SHOE_URL = 'http://localhost:3000/shoes'
const LIKED_SHOES_URL = 'http://localhost:3000/liked_shoes'
let createShoe = false;


document.addEventListener("DOMContentLoaded", () =>{
    fetch(SHOE_URL)
    .then(res => res.json())
    .then(shoe => shoe.forEach(renderShoe))

    const addBtn = document.querySelector("#new-btn");
    const shoeFormContainer = document.querySelector(".shoe-form-container")
        
        addBtn.addEventListener("click", () => {
          createShoe = !createShoe;
          if (createShoe) {
            shoeFormContainer.style.display = "block";
          } else {
            shoeFormContainer.style.display = "none";
          }
        });
})
function renderShoe(shoe){

    let shoeBar = document.getElementById("shoe-bar")

    let shoeSpan = document.querySelector(".shoe-span")
        shoeSpan.addEventListener('click', (shoe) => {
            filteredShoes(shoe)
        })


    ////////////////////////////////////////////////////////
    
    let allShoes = document.querySelector('main')
        allShoes.className = 'cards'
    let shoeRow = document.createElement('div')
        shoeRow.className = 'card'

    let specificShoe = document.createElement('h2')
    specificShoe.innerText = shoe.name
    
    let shoeImg = document.createElement("img")
    shoeImg.src = shoe.image 
    shoeImg.id = "shoe-image"
    


    shoeRow.append(specificShoe, shoeImg)
    allShoes.appendChild(shoeRow)
}

function filteredShoes(shoe){
    debugger
}