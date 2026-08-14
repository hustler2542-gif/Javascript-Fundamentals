const users = [
    {
        id: 1,
        name: "Aru"
    }
];

const orders = [
    {
        id: 101,
        userId: 1,
        productId: 501
    },
    {
        id: 102,
        userId: 1,
        productId: 502
    }
];

const products = [
    {
        id: 501,
        name: "MacBook Air",
        price: 99999
    },
    {
        id: 502,
        name: "Mechanical Keyboard",
        price: 4999
    }
];

function getUsers(usersname, callback){
    console.log(`Name: ${usersname}`)
    callback()
}


function getOrders(orders, callback){
    const order_id = orders[0].id
    callback(order_id)
}


function getFirstOrder(order_ids, callback){
    console.log('First order: '+order_ids)
    callback()
}


function getProduct(products, callback){
    const product_names = products[0].name
    const product_prices = products[0].price
    
    callback(product_names, product_prices)
}   

console.log('User tries to log in and search buying history..'); 

// Need to process data first. 


getUsers(users[0].name, ()=>{
    getOrders(orders, (order_id)=> {
        getFirstOrder(order_id, ()=> {
            getProduct(products, (d1, d2)=>{
                console.log('Product name: ' + d1)
                console.log('Product price: '+ d2)
            })
        })
    })
})