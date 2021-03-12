const SHOE_URL = 'http://localhost:3000/shoes'
const LIKED_SHOES_URL = 'http://localhost:3000/liked_shoes'
let createShoe = false;




document.addEventListener("DOMContentLoaded", () =>{
    fetch(SHOE_URL)
    .then(res => res.json())
    .then(shoe => shoe.forEach(renderShoes))

    // const createNewShoe = document.querySelector("#new-btn")
    
    // const shoeformContainer = document.querySelector("#shoe-form-container")
    renderForm()

    //    createNewShoe.addEventListener("click", () => {
        
    //     createShoe ? false : true
          
    //       if (createShoe) {
    //         shoeFormContainer.style.display = "block";
    //         renderForm()
    //     } else {
    //         renderForm()
    //         shoeFormContainer.style.display = "none";
    //     }
    // });
})


function renderForm() {
    
    let submit = document.createElement("button")
        submit.innerText = "CREATE"
        

    let createShoeForm = document.createElement("form")
        createShoeForm.id = "createShoeForm"

        createShoeForm.addEventListener('submit', (e) =>{

         createNewShoe(e)

        })
        
    let inputShoeName = document.createElement("input")
        inputShoeName.type = "text"
        inputShoeName.name = "shoeName"
        inputShoeName.placeholder = "Enter shoe name..."

    let inputShoeColor = document.createElement("input")
        inputShoeColor.type = "text"
        inputShoeColor.name = "shoeColor"
        inputShoeColor.placeholder = "Enter shoe color..."

    let inputShoeSize = document.createElement("input")
        inputShoeSize.type = "text"
        inputShoeSize.name = "shoeSize"
        // inputShoeSize.label.text = "SHOE SHOES"
        inputShoeSize.placeholder = "Enter shoe size..."

    let inputShoeImage = document.createElement("input")
        inputShoeImage.type = "text"
        inputShoeImage.name = "shoeImg"
        inputShoeImage.placeholder = "Enter shoe URL..."

    let inputShoeBrand = document.createElement("input")
        inputShoeBrand.type = "text"
        inputShoeBrand.name = "shoeBrand"
        inputShoeBrand.placeholder = "Enter shoe brand..."

    let inputShoeSex = document.createElement("input")
        inputShoeSex.type = "text"
        inputShoeSex.name = "shoeSex"
        inputShoeSex.placeholder = "Enter shoe gender for size..."

    let inputShoePrice = document.createElement("input")
        inputShoePrice.type = "text"
        inputShoePrice.name = "shoePrice"
        inputShoePrice.placeholder = "Enter shoe price..."

    createShoeForm.append(inputShoeName, inputShoeColor, inputShoeSize, inputShoeImage, inputShoeBrand, inputShoeSex, inputShoePrice, submit)
    document.getElementById("shoe-form-container").appendChild(createShoeForm)

}


function renderShoes(shoe){

    let shoeBar = document.getElementById("shoe-bar")

    let shoeSpan = document.querySelector(".shoe-span")
        shoeSpan.addEventListener('click', (e) => {
            filteredShoes(e, shoe)
        })

    ////////////////////////////////////////////////////////
    
    let allShoes = document.querySelector('main')
        allShoes.className = 'cards'
    let shoeRow = document.createElement('div')
        shoeRow.className = 'card'

    let specificShoe = document.createElement('h2')
        specificShoe.innerText = shoe.name
        specificShoe.addEventListener('click', () => {
            renderSpecificShoe(shoe)
        })
    
    let shoeImg = document.createElement("img")
    shoeImg.src = shoe.image 
    shoeImg.id = "shoe-image"
    shoeImg.addEventListener('click', () => {
        renderSpecificShoe(shoe)
    })
    

    shoeRow.append(specificShoe, shoeImg)
    allShoes.appendChild(shoeRow)
}

async function createNewShoe(e){
    e.preventDefault()
    
    newShoe = {
        shoes_size: e.target.shoeSize.value,
        color: e.target.shoeColor.value,
        price: e.target.shoePrice.value,
        brand: e.target.shoeBrand.value,
        image: e.target.shoeImg.value,
        name: e.target.shoeName.value,
        sex: e.target.shoeSex.value
    }
    
    
    let reqObj = {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(newShoe)
    }

    let response = await fetch(SHOE_URL, reqObj)
    let translate = await response.json()

    // document.getElementById("createShoeForm").reset()
    renderShoes(translate)

}


function filteredShoes(shoe, e){
    debugger
}




function renderSpecificShoe(shoe){
  
    
}