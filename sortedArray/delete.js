function deleteFromArray(arr,val){
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]==val){
            for(let j=i;j<=arr.length-1;j++){
                arr[j]=arr[j+1]
             
            }
           
              
            arr.length--
            return arr
        }
    }
}

const myArray=[2,4,6,8,10]
const value=10
const newArray=deleteFromArray(myArray,value)
console.log(newArray)

//time complexity=O(n)
//space complexity=O(logn)