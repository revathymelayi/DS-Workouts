function insert(arr,val,index){
    for(let i=arr.length-1;i>=index;i--){
      arr[i+1]=arr[i]
    }
    arr[index]=val
    return arr
}

const myArray =[1,9,2,6,5]
const value =4
const index = 2
const newArray = insert(myArray,value,index)
console.log(newArray)

//time complexity =o(n)
//space complexity =o(1)