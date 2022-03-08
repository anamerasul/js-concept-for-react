const numbers=[89,35,98,128]
const student={
        name:'sakib',
        age:32,
        movies:['king khan','Dhakar mastan']
}
//1.template string 

const about =`my name is ${student.name} age of ${student.age} has number ${numbers[2]} also like ${student.movies[0]}`

console.log(about);

//2 arrow function 

const getFiftyFive=()=>55;
const addSixtyFive=num=>num+65

const isEvem=x=>x%2===0;

const addThree=(x,y,z)=>x+y+z;
const doMath=(num1,num2)=>{
        const sum =num1+num2;
        return sum;
}

//spread operator

// const newnumbers=[numbers];
const newnumbers=[...numbers];

// create  a new array from an older array and add element 
const currentNumbers=[...numbers,55];
numbers.push(99)
numbers.push(99)
numbers.push(99)


console.log(numbers)
console.log(newnumbers)





console.log(currentNumbers)
