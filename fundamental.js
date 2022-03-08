// how to declare a variable using let and const
const fatherName='Mohabbat';

let season='spring';
season='winter';

// 6 basic condition >,<.===, !==,<=,>=

//mutiple condition &&, ||

if(fatherName==='mohabbat'||season==='spring'){
        console.log(fatherName)
}
else if(fatherName==='Mohabbat'||season==='winter'){
        console.log(fatherName)
}


else{
        console.log(false)
}

//3 array
//index
//length,push

const numbers=[89,35,98,128]

numbers[0]=56;

//4 for  loop
for(let i=0; i<numbers.length; i++){
        const number=numbers[i];

        console.log(number)
}

//5 function 

function multiply(num1,num2){
        const result =num1*num2;
        return result
}

const output =multiply(35,78);


// 6 object
//3 ways to access property by name

const student={
        name:'sakib',
        age:32,
        movies:['king khan','Dhakar mastan']
}

const myVariable='age'

console.log(student.age)//acces by property
// console.log(student[age]) not work
console.log(student['age']) //access via property name string

console.log(student.myVariable)//access via property name in a variable