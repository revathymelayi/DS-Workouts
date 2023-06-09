function binarySearch(arr,val){
    let leftIndex=0;
    let rightIndex=arr.length-1;
    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)
        if(arr[middleIndex]===val){
            return middleIndex
        }
        if(val<arr[middleIndex]){
           rightIndex=middleIndex-1
        }
        else{
            leftIndex=middleIndex+1
        }
    }
   
}



const myArray =[2,3,5,7,9,10]
const value=5
const index=binarySearch(myArray,value)
console.log(index)