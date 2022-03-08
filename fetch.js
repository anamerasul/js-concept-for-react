//1 json
const student={
        name:'sakib',
        age:32,
        movies:['king khan','Dhakar mastan']
}

const studentJSON = JSON.stringify(student)

console.log(student);
console.log(studentJSON)

const stuobj=JSON.parse(studentJSON);
console.log(stuobj)

//2 fetch

fetch('url')
.then(res=>res.json())
.then(data=>console.log(data))

//keys values
const keys=Object.keys(student);
const values=Object.value(student);

//for 
const numbers=[23,45,67,78,23]
numbers.forEach(num=>console.log(num));
numbers.map(num=>num*2);
//for of on array like object
//loop on  object using for in


// add or remove from an array

const products=[
        {name:'laptop',price:32000,brand:'lenevo',color:'silver'},
        {name:'phone',price:200000,brand:'iphone',color:'goldren'},
        {name:'watch',price:3000,brand:'casio',color:'yellow'},
        {name:'sunglass',price:300,brand:'raybon',color:'silver'},
        {name:'camera',price:9000,brand:'canon',color:'black'}
        
        ];

        const newProduct={name:'webcame',price:700,brand:'lal'}

// copy products array and then add new product 

const newProducts=[...products,newProduct]

// create a new array without one spefic item;
// remove phone means create a new array without phone
const remaing=products.filter(p=>p.name!=='phone')