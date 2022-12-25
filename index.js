const products = [
    {
        id: 1,
        name: 'T-shirt',
        description: 'Футболка голубая',
        sizes: 'XL',
        price: 2000,
        available: true
    },
    {
        id: 2,
        name: 'Sweater',
        description: 'Свитер желтый',
        sizes: 'L',
        price: 3000,
        available: false
    },
    {
        id: 3,
        name: 'Sweater',
        description: 'Свитер красный',
        sizes: 'XL',
        price: 2000,
        available: true
    },
    {
        id: 4,
        name: 'Sweater',
        description: 'Свитер синий',
        sizes: 'XXL',
        price: 4000,
        available: true
    },
    {
        id: 5,
        name: 'Sweater',
        description: 'Свитер Зеленый',
        sizes: 'L',
        price: 3000,
        available: false
    }
]


const basket = [
    {
        productId: 1,
        amount: 2
    },
    {
        productId: 3,
        amount: 1
    }
]

function addProduct(id, amount) {
    ids = id - 1
    if (id <= products.length && products[ids].available === true) {
        const productInBasket = {
            productId: id,
            amount: amount
        }
        basket.push(productInBasket)
    } else {
        console.log('Ошибка, товара нет в наличии или вы не верно указали id товара')
    }
    
}

function deleteProduct(id) {
    basket.splice(id - 1, 1)
}

function deleteAllProducts() {
    basket.splice(0, basket.length);
}

function totalSummAndAmount() {
    let amount = 0
    let summ = 0
    let amountForSumm = 0
    for (let i = 0; i < basket.length; i++) {
        amountForSumm = basket[i].amount
        amount += basket[i].amount
        for (let j of products) {
            if (basket[i].productId === j.id) {
                summ += (j.price * amountForSumm)
            } 
        }
    }
    return {
    totalAmount: amount,
    totalSumm: summ
    }
}

addProduct(3, 2)
addProduct(4, 1)
console.log(basket)
deleteProduct(3)
console.log(basket)
console.log(totalSummAndAmount())
deleteAllProducts()
console.log(basket)
