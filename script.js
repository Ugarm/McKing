let menu = [{
        'itemName': 'burger',
        'price': 8.50,
        'ordered': 0,
    },
    {
        'itemName': 'drink',
        'price': 4,
        'ordered': 0
    },
    {
        'itemName': 'fries',
        'price': 4.50,
        'ordered': 0
    },
    {
        'itemName': 'dessert',
        'price': 2.50,
        'ordered': 0
    }
]

//une fonction par item
//afficher nb de burgers commandés + prix, juste une image



let totalPrice = 0

function addItem(key) {

    //calculates price and displays it innerHTML
    itemIndex = parseInt(key.id)
    totalPrice = totalPrice + menu[itemIndex].price
    console.log('The amount of your order is now : ', totalPrice, '€ ')
    document.getElementById('totalprice').innerHTML = "<p id='order_price'>" + "Total amount : " + `${totalPrice}` + "€" + "</p>"

    //displays or updates order infos
    if (menu[itemIndex].ordered == 0) {
        menu[itemIndex].ordered = menu[itemIndex].ordered + 1
        document.getElementById('ordereditems').innerHTML += "<p id='" + `${menu[itemIndex].itemName}` + "'>" + `${menu[itemIndex].ordered}` + ' ' + `${menu[itemIndex].itemName}` + "</p>"
    } else {
        menu[itemIndex].ordered = menu[itemIndex].ordered + 1
        document.getElementById(menu[itemIndex].itemName).remove()  
        document.getElementById('ordereditems').innerHTML += "<p id='" + `${menu[itemIndex].itemName}` + "'>" + ' ' + `${menu[itemIndex].ordered}` + `${menu[itemIndex].itemName}` + "</p>"
    }

    console.log(menu[itemIndex].ordered)
}

function rewrite() {
    

    // updates cart and rewrites innerHTML
    if (menu[itemIndex].ordered >= 2) {
        document.getElementById('totalprice').innerHTML = "<p id='order_price'>" + "Total amount : " + `${totalPrice}` + "€" + "</p>"
        menu[itemIndex].ordered = menu[itemIndex].ordered - 1
        const element = document.getElementById(menu[itemIndex].itemName)
        element.remove()
        document.getElementById('ordereditems').innerHTML += "<p id='" + `${menu[itemIndex].itemName}` + "'>" + ' ' + `${menu[itemIndex].ordered}` + `${menu[itemIndex].itemName}` + "</p>"
    } else if (menu[itemIndex].ordered == 1) {
        totalPrice = totalPrice - menu[itemIndex].price
        document.getElementById('totalprice').innerHTML = "<p id='order_price'>" + "Total amount : " + `${totalPrice}` + "€" + "</p>"
        menu[itemIndex].ordered = menu[itemIndex].ordered - 1
        const element = document.getElementById(menu[itemIndex].itemName)
        element.remove()

    } else {

        console.log('nothing to delete')
        
    }
}

function amount() {
   
    // calculates price after removal and rewrites innerHTML
    if (totalPrice == 0) {
        document.getElementById('totalprice').innerHTML = "<p id='order_price'>" + "Total amount : " + `${totalPrice}` + "€" + "</p>"
        console.log('Cart is empty')
    }
    if (menu[itemIndex].ordered > 0) {
        totalPrice = totalPrice - menu[itemIndex].price
        console.log('The amount of your order is now : ', totalPrice, '€')
        document.getElementById('totalprice').innerHTML = "<p id='order_price'>" + "Total amount : " + `${totalPrice}` + "€" + "</p>";
    } else {
        console.log('Error : You don\'t have any ' + `${menu[itemIndex].itemName}` + " in your cart")
        console.log(menu[itemIndex].ordered)
    }
}

function removeItem(key) {
    // fetches item key
    itemIndex = parseInt(key.id)
    rewrite(this)
    amount(this)

}


//ends order and resets price + displayed items
function order() {
    let checkOrder = 0
    // checks if cart is not empty
    for (let i = 0; i < menu.length; i++){
        if (menu[i].ordered == 0){
            checkOrder++
        }
    }

    if (checkOrder == menu.length){
        console.log("Your cart is empty")
    } else {
        // displays price in the console and resets price
        console.log('The total amount of your order is : ', totalPrice, '€')
        totalPrice = 0

        // checks what item has been ordered and displays the order as an array in the console
        let newArr = []
        for (let i = 0; i < menu.length; i++){
            if (menu[i].ordered > 0){
                newArr.push(menu[i].ordered)
                newArr.push(menu[i].itemName)
            }
        }
        console.log('You have ordered ', newArr)

        // resets innerHTML data (not useful as such because pages are going to be reloaded, but shows that it can be done in other cases)
        document.getElementById('totalprice').innerHTML = "<p id='order_price'>" + "Total amount : " + `${totalPrice}` + "€" + "</p>";
        document.getElementById('ordereditems').innerHTML = ""
        
        // resets "ordered" items number (same as above, not useful as such but good to know)
        for (let i = 0; i < menu.length; i++){
            menu[i].ordered = 0
        }

        
        setTimeout(() => { window.location = 'confirm.html' }, 4000)
    }

    

}

