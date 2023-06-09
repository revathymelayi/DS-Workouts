function median(arr1,arr2){
    let mergedArray=[]
    let median
    let m
   mergedArray= arr1.concat(arr2).sort((a,b)=>(a-b))
  
  if(mergedArray.length%2==0){
     m =(mergedArray.length/2)
    median=(mergedArray[m]+mergedArray[m-1])/2;
   
  }else{
     m=(mergedArray.length-1)/2
     median=mergedArray[m]
  }

return median
}



const array1=[7,8,2,6]
const array2=[1,4,5]
const med=median(array1,array2)
console.log(med)
