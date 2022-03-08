//fasely
// '',0,false,null,undefined;
// true
//'almas',6,true,{},[]
// check any truethy
let myVar=5;
if (myVar){
        myVar=myVar*100
}
else{
        myVar=0;
}

let myMoney =50;
// you check negative
if(!myMoney){

}

let food;

const money=800;

if(money>100){
        food='birani';

}

else{
        food='cha';
}

let food1=money>100? 'birani':'cha'
console.log(food1)

let drink=(money>100&&myVar>100)?'coke':'filter';

console.log(drink)

const num1=52;
console.log(num1)

const str=num1+'';
console.log(str)

const input ='560';
const inputNum=+input;

console.log(inputNum)


//

let isActive=false;

const showUser=()=>console.log('display');
const hideUser=()=>console.log('hide');

// isActive?showUser():hideUser()
// use && if the left side is true then right side will execute
// let
isActive&&showUser()

//use || if the left side is false then right side will execute
isActive||hideUser()

//toggle bolean

isActive=!isActive

