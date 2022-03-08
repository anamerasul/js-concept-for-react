const products=[
{name:'laptop',price:32000,brand:'lenevo',color:'silver'},
{name:'phone',price:200000,brand:'iphone',color:'goldren'},
{name:'watch',price:3000,brand:'casio',color:'yellow'},
{name:'sunglass',price:300,brand:'raybon',color:'silver'},
{name:'camera',price:9000,brand:'canon',color:'black'}

];

const brands=products.map(product=>product.brand)

console.log(brands)

const prices=products.map(product=>product.price);

console.log(prices)

products.forEach(product=>console.log(product))
products.forEach(product=>console.log(product.color))

products.forEach(product=>{
        console.log(product.price)
})

//filter 
const cheap =products.filter(product=>product.price<=5000);
console.log(cheap)


const specificName=products.filter(p=>p.name.includes('n'))
console.log(specificName)

const specaial =products.find(p=>p.name.includes('n'));

console.log(specaial)

