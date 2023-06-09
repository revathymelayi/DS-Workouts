function search(arr,value){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===value)
       return i
    }
   return -1
}

const array=[4,3,5,6,1,7]
const val=6
const index=search(array,val)
console.log(index)