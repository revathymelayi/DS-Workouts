function binarySearch(arr,val){
    let leftIndex=0
    let rightIndex=arr.length-1
    while(leftIndex<=rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2)
        if(val===arr[middleIndex]){
            return middleIndex
        }
        if(val<arr[middleIndex]){
            rightIndex=middleIndex-1
            
        }else{
            leftIndex=middleIndex+1
        }
    }
    return -1
}

const arr=[1,2,3,4,5,6,7]
const val=9
const index=binarySearch(arr,val)
console.log(index)
    