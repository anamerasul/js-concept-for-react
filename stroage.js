localStorage.setItem('userId',5588888);

const addToLocalStorage =()=>{
        const idInput=document.getElementById('storage-id')
        const id=idInput.value
        const valueInput=document.getElementById('storage-value')
        const value=valueInput.value
        

        //
        if(id&&value){
        localStorage.setItem(id,value)
        }
        idInput.value=''
        valueInput.value=''
}


localStorage.setItem ('friends',[20,40])
// undefined
localStorage.setItem ('friends',JSON.stringify[20,40])
// undefined
localStorage.setItem ('friends',JSON.stringify([20,40]))
// undefined
const pen ={price:100,color:'black'}
// undefined
localStorage.setItem('pen',pen)
// undefined
localStorage.setItem('pen',JSON.stringify(pen))
// undefined
// const  storedPen=localStorage.getItem(pen)
// undefined
const  storedPen=localStorage.getItem('pen')
// undefined
// storedPen
// '{"price":100,"color":"black"}'
const penobj=JSON.parse(storedPen)
undefined
penobj
// {price: 100, color: 'black'}