function duplicate(arr){
  let duplicates=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                 duplicates.push(arr[i])
        }
    }

}
return duplicates
}


const myArray=[3,2,8,7,2,6,3]
const elements=duplicate(myArray)
console.log(elements)