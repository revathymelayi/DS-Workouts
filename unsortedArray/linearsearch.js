function search(arr,val){
    for(let i=0;i<=arr.length-1;i++){
        if (arr[i]===val){
            return i;
        }
    }
    return -1;
}

const myArray = [1,2,7,3,9,4,5]
const searchValue=9
const index=search(myArray,searchValue)
console.log(index);