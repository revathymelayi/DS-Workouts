function reverse(arr,val){
  for(let i=0;i<arr.length-1;i++){
    let leftIndex=0
    let rightIndex=arr.length-1
    while(leftIndex<rightIndex){
        let temp=arr[leftIndex]
        arr[leftIndex]=arr[rightIndex]
        arr[rightIndex]=temp
        leftIndex++
        rightIndex--
       
    }
    return arr
  }
}

const arr=[9,8,7,6]
const newArra=reverse(arr)
console.log(newArra)