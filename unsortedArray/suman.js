function check(arr,a){
    let index
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]===a){
            index=i;
            for(let j=arr.length;j>index;j--){
               arr[j]=arr[j-1]
               arr[index]=a
            }
            return arr
        }
    }

}

const array=[1,2,5,7]
const val =2
const newArray=check(array,val)
console.log(newArray)