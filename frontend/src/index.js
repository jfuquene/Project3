const SHOE_URL = 'http://localhost:3000/shoes'
const LIKED_SHOES_URL = 'http://localhost:3000/liked_shoes'
let createShoe = false;




document.addEventListener("DOMContentLoaded", () =>{
    fetch(SHOE_URL)
    .then(res => res.json())
    .then(shoe => shoe.forEach(renderShoe))


    renderSpan()
    
    
    const createNewShoe = document.querySelector("#new-btn")
    
    const shoeFormContainer = document.querySelector("#shoe-form-container")
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

    let form = document.createElement("form")
        
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

    let inputShoeSex = document.createElement("input")
        inputShoeSex.type = "text"
        inputShoeSex.name = "shoeSex"
        inputShoeSex.placeholder = "Enter shoe gender for size..."

    form.append(inputShoeName, inputShoeColor, inputShoeSize, inputShoeImage, inputShoeSex, submit)
    document.getElementById("shoe-form-container").appendChild(form)

}


function renderSpan() {

    let div = document.createElement("div")

    let adidasSpan = document.createElement("span")
        adidasSpan.innerText = "ADIDAS"
        adidasSpan.className = "shoe-span"
        adidasSpan.addEventListener("click", renderAdidas)

    let nikeSpan = document.createElement("span")
        nikeSpan.innerText = "  NIKE  "
        nikeSpan.className = "shoe-span"
     
    let pumaSpan = document.createElement("span")
        pumaSpan.innerText = "  PUMA  "    
        pumaSpan.className = "shoe-span"

    let converseSpan = document.createElement("span")
        converseSpan.innerText = "  CONVERSE  "
        converseSpan.className = "shoe-span"

    let allSpan = document.createElement("span")
        allSpan.innerText = "  ALL  "
        allSpan.className = "shoe-span"

    let createSpan = document.createElement("span") 
        createSpan.innerText = "  CREATE A SHOE  "
        createSpan.className = "shoe-span"

        div.append(adidasSpan, nikeSpan, pumaSpan, converseSpan, allSpan, createSpan)
        document.getElementById('shoe-bar').append(div)

}

function renderAdidas(e){
    let ul = document.querySelector("main")
    ul.innerHTML = ""
    

    fetch(SHOE_URL)
    .then(res => res.json())
    .then(ad => ad.forEach(renderAdidasShoes))

}

function renderAdidasShoes(ad){
// console.log(ad)
    let ul = document.querySelector("main")
    if (ad.brand == "adidas"){
        let list = document.createElement("div")
 
       list.innerHTML = renderShoe(ad)
       debugger
       ul.append(list)
    }

}

function renderShoe(shoe){

    let shoeBar = document.getElementById("shoe-bar")
        

    let shoeSpan = document.querySelector(".shoe-span")
    
    let allShoes = document.querySelector('main')
        allShoes.className = 'cards'
    let shoeRow = document.createElement('div')
        // shoeRow.className = 'card'

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
// debugger
    let shoeSize = document.createElement("li")
        shoeSize.innerText = `Size: ${shoe.shoes_size}`

    let shoePrice = document.createElement("li")
        shoePrice.innerText = `Price: ${shoe.price}` 

    let shoeColor = document.createElement("li")
        shoeColor.innerText = `Color: ${shoe.color}`

    let shoeSex = document.createElement("li")
        shoeSex.innerText = 
    

    shoeRow.append(specificShoe, shoeImg, shoeSize, shoePrice, shoeColor)
    allShoes.appendChild(shoeRow)
}




// function filteredShoes(shoe, e){
// }




// function renderSpecificShoe(shoe){
// //   console.log(shoe)

//     let div = document.querySelector('main')

//     let specificShoe = document.querySelector('h2')
//         specificShoe.innerText = shoe.name

//     let shoeImg = document.querySelector("img")
//         shoeImg.src = shoe.image 

//     let shoeSize = document.createElement("li")
//         shoeSize.innerText = shoe.size 

//     let shoePrice = document.createElement("li")
//         shoePrice.innerText = shoe.price 

//     let shoeColor = document.createElement("li")
//         shoeColor.innerText = shoe.shoeColor
        
//     div.append(specificShoe, shoeImg, shoeSize, shoePrice, shoeColor)
// }