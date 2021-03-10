const BASE_URL = 'http://localhost:3000/shoes'


    fetch(BASE_URL)
    .then(res => res.json())
    .then(shoe => shoe.forEach(renderShoe))

function renderShoe(shoe){
    console.log(shoe)
    let allShoes = document.querySelector('main')

    let specificShoe = document.createElement('h2')
    specificShoe.innerText = shoe.name

    let sex = document.createElement('h2')
    sex.innerText = shoe.sex
    
    let shoeImg = document.createElement("img")
    shoeImg.src = shoe.image 
    shoeImg.id = "shoe-image"
    
    console.log(shoeImg)

    allShoes.append(specificShoe, sex, shoeImg)



}