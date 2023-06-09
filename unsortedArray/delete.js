function deletefromArray(arr,val){
    for(let i =0;i<=arr.length-1;i++){
        if(arr[i]==val){
            for(let j=i;j<arr.length-1;j++){
                arr[j]=arr[j+1]
            }
            arr.length--
            return arr
        }
    }
}

const myArray =[1,9,2,6,5]
const value =6
const newArray=deletefromArray(myArray,value)
console.log(newArray)