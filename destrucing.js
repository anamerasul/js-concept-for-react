// 1 array destrucing
const numbers=[42,65]

// const x=numbers[0];
// const y=numbers[1];

const [x,y]=numbers
console.log(x)

function boxify(num1,num2){
        const nums=[num1,num2]
        return nums
}

const [first,second] =boxify(90,34)

console.log(boxify(90,34))

console.log(first)

const student={
        name:'sakib',
        age:32,
        movies:['king khan','Dhakar mastan']
}

const [firstMovive,secondMovive]=student.movies

//object destrucing
// const {name,age} ={name:'alu',age:14}
const {name,age} ={id:12,name:'alu',salary:34000,age:14}

const employee={
        ide:'vs code',
        designation:'developer',
        machine:'mac',
        lang:['html','css','js'],
        specification:{
                height:66,
                weight:67,
                address:'kumarkhali',
                drink:'water',
                watch:{
                        color:'black',
                        price:500,
                        brand:'gramin'
                }
        }
}

const {machine,ide}=employee
const {weight,address}=employee.specification

const[firstlang]=employee.lang

const {brand}=employee?.specification.watch