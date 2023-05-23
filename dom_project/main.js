var plusButtons = document.getElementsByClassName('plusButton');
var minusButtons = document.getElementsByClassName('minusButton');
var deleteButtons = document.getElementsByClassName('deleteButton');
var quantities = document.getElementsByClassName('quantity');
var prices = document.getElementsByClassName('price');
var total = document.getElementById('total');
console.log(total)

// Gestion des bouttons plus
for (const button of plusButtons) {
    button.addEventListener('click',() => {
        var quantity = button.nextElementSibling.innerHTML
        var quantityInt = parseInt(quantity)

        button.nextElementSibling.innerHTML = quantityInt + 1
        totalCalcul()
        console.log()
    })
}

// Gestion des bouttons moins
for (const button of minusButtons) {
    button.addEventListener('click',() => {
        var quantity = button.previousElementSibling.innerHTML
        var quantityInt = parseInt(quantity)

        if(quantityInt > 0){
            button.previousElementSibling.innerHTML = quantityInt - 1
            totalCalcul()
        }
        
        console.log()
    })
}

// Gestion des bouttons supprimer
for (const button of deleteButtons) {
    button.addEventListener('click',() => {
        var grandParent = button.parentElement.parentElement
        grandParent.remove()
        totalCalcul()
        console.log()
    })
}


//fonction qui calcule le prix total
const totalCalcul = () =>{
    var subtotal = 0
    for (let i=0; i<quantities.length; i++) {
        subtotal+= parseInt(quantities[i].innerHTML)* parseInt(prices[i].innerHTML) 
        console.log(subtotal)
    }

    total.innerHTML = subtotal
}
totalCalcul()