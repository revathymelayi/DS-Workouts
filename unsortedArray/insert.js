// function insert(arr,value){
//   arr[arr.length]=value
//   return arr
// }


function insert(arr,value){
   arr.push(value)
   return arr
}

const myArray =[2,3,1,9,5]
const val=7
const newArray=insert(myArray,val)
console.log(newArray)
