const SHOE_URL = 'http://localhost:3000/shoes/'
const LIKED_SHOES_URL = 'http://localhost:3000/liked_shoes/'
const USER_URL = ''
let createShoe = false;




document.addEventListener("DOMContentLoaded", () =>{
    fetch(SHOE_URL)
    .then(res => res.json())
    .then(shoes => shoes.forEach(renderShoes))
    
         renderForm() 
        renderSpan()
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
        pumaSpan.addEventListener("click", renderPumas)

    let converseSpan = document.createElement("span")
        converseSpan.innerText = "  CONVERSE  "
        converseSpan.className = "shoe-span"

    let allSpan = document.createElement("span")
        allSpan.innerText = "  ALL  "
        allSpan.className = "shoe-span"
        // allSpan.addEventListener('click', renderShoes())

    let createSpan = document.createElement("span") 
        createSpan.innerText = "  CREATE A SHOE  "
        createSpan.className = "shoe-span"

    let likedShoes = document.createElement("span")
        likedShoes.innerText = "LIKED SHOES"
        likedShoes.className = 'shoe-span'
        likedShoes.addEventListener("click", renderLikedShoes)
    

        div.append(allSpan, adidasSpan, nikeSpan, pumaSpan, converseSpan, likedShoes, createSpan)
        document.getElementById('shoe-bar').append(div)

}

function renderAdidas(e){
    let ul = document.querySelector("main")
    ul.innerHTML = ""
    

    fetch(SHOE_URL)
    .then(res => res.json())
    .then(ad => ad.forEach(renderAdidasShoes))

}

function renderPumas(e){
    let ul = document.querySelector("main")
    ul.innerHTML = ""
    

    fetch(SHOE_URL)
    .then(res => res.json())
    .then(puma => puma.forEach(renderPumaShoes))
}
function renderPumaShoes(puma){
   
    let ul = document.querySelector("main")
    if (puma.brand == "puma"){
        let list = document.createElement("div")
 
       list.innerHTML = pumas(puma)
       
    }
}

function pumas(puma){
    let allShoes = document.querySelector('main')
        allShoes.className = 'cards'
    let shoeRow = document.createElement('div')
        // shoeRow.className = 'card'

    let specificShoe = document.createElement('h2')
        specificShoe.innerText = puma.name
        
    
    let shoeImg = document.createElement("img")
    shoeImg.src = puma.image 
    shoeImg.id = "shoe-image"
    

    let shoeSize = document.createElement("li")
        shoeSize.innerText = `Size: ${puma.shoes_size}`

    let shoePrice = document.createElement("li")
        shoePrice.innerText = `Price: ${puma.price}` 

    let shoeColor = document.createElement("li")
        shoeColor.innerText = `Color: ${puma.color}`

    let shoeSex = document.createElement("li")
        shoeSex.innerText = `Gender: ${puma.sex}`

    shoeRow.append(specificShoe, shoeImg, shoeSize, shoePrice, shoeColor)
    allShoes.appendChild(shoeRow)
}




function renderLikedShoes(e){
    let ul = document.querySelector("main")
    ul.innerHTML = ""
    

    fetch(LIKED_SHOES_URL)
    .then(res => res.json())
    .then(liSh => liSh.forEach(renderLikeShoe))

}

function renderLikeShoe(liSh){
    let shoe = liSh.shoe 
    let user = liSh.user
    

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
        shoeSex.innerText = `Gender: ${shoe.sex}`

    let shoeLikedUser = document.createElement('li')
        shoeLikedUser.innerText = `Liked By: ${user.username}`
    

    shoeRow.append(specificShoe, shoeImg, shoeSize, shoePrice, shoeColor, shoeSex, shoeLikedUser)
    allShoes.appendChild(shoeRow)
}

function renderAdidasShoes(ad){
    console.log(ad)
    let ul = document.querySelector("main")
    if (ad.brand == "adidas"){
        let list = document.createElement("div")
 
       list.innerHTML = adidas(ad)
       
    }

}

function adidas(ad){
    let allShoes = document.querySelector('main')
        allShoes.className = 'cards'
    let shoeRow = document.createElement('div')
        // shoeRow.className = 'card'

    let specificShoe = document.createElement('h2')
        specificShoe.innerText = ad.name
        
    
    let shoeImg = document.createElement("img")
    shoeImg.src = ad.image 
    shoeImg.id = "shoe-image"
    

    let shoeSize = document.createElement("li")
        shoeSize.innerText = `Size: ${ad.shoes_size}`

    let shoePrice = document.createElement("li")
        shoePrice.innerText = `Price: ${ad.price}` 

    let shoeColor = document.createElement("li")
        shoeColor.innerText = `Color: ${ad.color}`

    let shoeSex = document.createElement("li")
        shoeSex.innerText = `Gender: ${ad.sex}`

    shoeRow.append(specificShoe, shoeImg, shoeSize, shoePrice, shoeColor)
    allShoes.appendChild(shoeRow)
}

function renderShoes(shoe){
    // let shoe = shoes.shoe
    // let user = shoes.user
    

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
        shoeSex.innerText = `Gender: ${shoe.sex}`

    let shoeLikeBtn = document.createElement("button")
        shoeLikeBtn.id = shoe.id
        shoeLikeBtn.innerText = shoe.like ? "DISLIKE" : "LIKE"
        // if(shoeLikeBtn === false){
        //     shoeLikeBtn.innerText = "LIKE"
        // } else {
        //     shoeLikeBtn.innerText = "DISLIKE"
        // }
        shoeLikeBtn.addEventListener("click", (event) => {
            toggleLike(event)
        })
        

    // let shoeLikedUser = document.createElement('li')
    //     shoeLikedUser.innerText = `Liked By: ${user.username}`
    

    shoeRow.append(specificShoe, shoeImg, shoeSize, shoePrice, shoeColor, shoeSex, shoeLikeBtn)//, shoeLikedUser
    allShoes.appendChild(shoeRow)
}

function toggleLike(event){

    
    // let toggleVal = {}
    // if(event.target.innerText === "DISLIKE"){
    //     toggleVal.like = true
    // }else{
    //     toggleVal.like = false
    // }
   
    event.target.innerText === "DISLIKE" ? event.target.innerText = "LIKE" : event.target.innerText = "DISLIKE"

    // let likes = {
    //     like: shoe.like ? false : true
    // }

    // let reqObj = {
    //     headers: {"Content-Type": "application/json"},
    //     method: "PATCH",
    //     body: JSON.stringify(toggleVal)
    // }

    // fetch(SHOE_URL+event.target.id, reqObj)
    // .then(response => response.json())
    // .then(updatedLike => {
    //     event.target.innerText = updatedLike.like
    //     let hello = updatedLike.like ? "LIKE" : "DISLIKE"
    //     document.getElementById('updatedLike.id').innerText = hello
    //     // renderShoes(updatedLike)
    // })

    

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

//////HIDDEN FORM FEATURE//////
    // const createNewShoe = document.querySelector("#new-btn")
    
    // const shoeformContainer = document.querySelector("#shoe-form-container")
    

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
