const SHOE_URL = 'http://localhost:3000/shoes/'
const LIKED_SHOES_URL = 'http://localhost:3000/liked_shoes/'
const USER_URL = 'http://localhost:3000/users/'
let createShoe = false;




document.addEventListener("DOMContentLoaded", () =>{
   Login()
})

function Login() {
    let submit = document.createElement("button")
        submit.innerText = "LOG IN"
        

    let createLoginForm = document.createElement("form")
        createLoginForm.id = "createLoginForm"

        createLoginForm.addEventListener('submit', (e) =>{

         createNewLogin(e)

        })

        let inputLoginName = document.createElement("input")
        inputLoginName.type = "text"
        inputLoginName.name = "LoginName"
        inputLoginName.placeholder = "Enter Login name..."

    createLoginForm.append(inputLoginName, submit)
    document.querySelector("main").append(createLoginForm)
}

async function createNewLogin(e){
    e.preventDefault()

    let newUser = {
        username: e.target.LoginName.value
    }

    reqObj = {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(newUser)
    } 

    let response = await fetch(USER_URL, reqObj)
    let translate = await response.json()


    welcomePage(translate)
}

function welcomePage(t){
    let welcomeGreeting = document.createElement("h1")
    welcomeGreeting.innerText = `WELCOME `
    let name =`${t.username} `
    name.className = "namee"
    welcomeGreeting.innerText += name
    welcomeGreeting.innerText += "Click HERE to view Shoes"
    welcomeGreeting.addEventListener('click', triggerDatabase)

    document.querySelector('main').append(welcomeGreeting)
}

function triggerDatabase(){
    document.querySelector("main").innerHTML = ""
 fetch(SHOE_URL)
    .then(res => res.json())
    .then(shoes => shoes.forEach(renderShoes))
    
         renderForm() 
        renderSpan()
}

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
        nikeSpan.addEventListener("click", renderNike)
     
    let pumaSpan = document.createElement("span")
        pumaSpan.innerText = "  PUMA  "    
        pumaSpan.className = "shoe-span"
        pumaSpan.addEventListener("click", renderPumas)

    let converseSpan = document.createElement("span")
        converseSpan.innerText = "  CONVERSE  "
        converseSpan.className = "shoe-span"
        converseSpan.addEventListener("click", renderConverse)

    let allSpan = document.createElement("span")
        allSpan.innerText = "  ALL  "
        allSpan.className = "shoe-span"
        allSpan.addEventListener('click', () =>{
            let ul = document.querySelector("main")
            ul.innerHTML = ""

            fetch(SHOE_URL)
            .then(res => res.json())
            .then(shoes => shoes.forEach(renderShoes))
            
                 
        })

    let createSpan = document.createElement("span") 
        createSpan.innerText = "  CREATE A SHOE  "
        createSpan.className = "shoe-span"

    let likedShoes = document.createElement("span")
        likedShoes.innerText = "LIKED SHOES"
        likedShoes.className = 'shoe-span'
        likedShoes.addEventListener("click", renderLikedShoes)
    

        div.append(allSpan, adidasSpan, nikeSpan, pumaSpan, converseSpan, likedShoes)
        document.getElementById('shoe-bar').append(div)

}

function renderConverse(e){
    let ul = document.querySelector("main")
    ul.innerHTML = ""
    

    fetch(SHOE_URL)
    .then(res => res.json())
    .then(converse => converse.forEach(renderConverseShoes))

}
function renderConverseShoes(converse){
 
    let ul = document.querySelector("main")
    if (converse.brand.toUpperCase() == "CONVERSE"){
        let list = document.createElement("div")
 
       list.innerHTML = Converse(converse)
       
    }
    
}

function Converse(converse){
    // debugger
    let allShoes = document.querySelector('main')
        allShoes.className = 'cards'
    let shoeRow = document.createElement('div')
        // shoeRow.className = 'card'

    let specificShoe = document.createElement('h2')
        specificShoe.innerText = converse.name
        
    
    let shoeImg = document.createElement("img")
    shoeImg.src = converse.image 
    shoeImg.id = "shoe-image"
    

    let shoeSize = document.createElement("li")
        shoeSize.innerText = `Size: ${converse.shoes_size}`

    let shoePrice = document.createElement("li")
        shoePrice.innerText = `Price: $${converse.price}` 

    let shoeColor = document.createElement("li")
        shoeColor.innerText = `Color: ${converse.color}`

    let shoeSex = document.createElement("li")
        shoeSex.innerText = `Gender: ${converse.sex}`

    shoeRow.append(specificShoe, shoeImg, shoeSize, shoePrice, shoeColor, shoeSex)
    allShoes.appendChild(shoeRow)
}

function renderNike(e){
    let ul = document.querySelector("main")
    ul.innerHTML = ""
    

    fetch(SHOE_URL)
    .then(res => res.json())
    .then(nike => nike.forEach(renderNikeShoes))

}

function renderNikeShoes(nike){
 
    let ul = document.querySelector("main")
    if (nike.brand.toUpperCase() == "NIKE"){
        let list = document.createElement("div")
 
       list.innerHTML = Nike(nike)
       
    }
    
}

function Nike(nike){
    // debugger
    let allShoes = document.querySelector('main')
        allShoes.className = 'cards'
    let shoeRow = document.createElement('div')
        // shoeRow.className = 'card'

    let specificShoe = document.createElement('h2')
        specificShoe.innerText = nike.name
        
    
    let shoeImg = document.createElement("img")
    shoeImg.src = nike.image 
    shoeImg.id = "shoe-image"
    

    let shoeSize = document.createElement("li")
        shoeSize.innerText = `Size: ${nike.shoes_size}`

    let shoePrice = document.createElement("li")
        shoePrice.innerText = `Price: $${nike.price}` 

    let shoeColor = document.createElement("li")
        shoeColor.innerText = `Color: ${nike.color}`

    let shoeSex = document.createElement("li")
        shoeSex.innerText = `Gender: ${nike.sex}`

    shoeRow.append(specificShoe, shoeImg, shoeSize, shoePrice, shoeColor, shoeSex)
    allShoes.appendChild(shoeRow)
}

////////////////////
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
    if (puma.brand.toUpperCase() == "PUMA"){
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
        shoePrice.innerText = `Price: $${puma.price}` 

    let shoeColor = document.createElement("li")
        shoeColor.innerText = `Color: ${puma.color}`

    let shoeSex = document.createElement("li")
        shoeSex.innerText = `Gender: ${puma.sex}`

    shoeRow.append(specificShoe, shoeImg, shoeSize, shoePrice, shoeColor, shoeSex)
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
        shoePrice.innerText = `Price: $${shoe.price}` 

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
 
    let ul = document.querySelector("main")
    if (ad.brand.toUpperCase() == "ADIDAS"){
        let list = document.createElement("div")
 
       list.innerHTML = adidas(ad)
       
    }
}

function adidas(ad){
    // debugger
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
        shoePrice.innerText = `Price: $${ad.price}` 

    let shoeColor = document.createElement("li")
        shoeColor.innerText = `Color: ${ad.color}`

    let shoeSex = document.createElement("li")
        shoeSex.innerText = `Gender: ${ad.sex}`

    shoeRow.append(specificShoe, shoeImg, shoeSize, shoePrice, shoeColor, shoeSex)
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
        shoePrice.innerText = `Price: $${shoe.price}` 

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
    
    
    document.getElementById("createShoeForm").reset()
    renderShoes(translate)

}
