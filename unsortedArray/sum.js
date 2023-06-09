function findSum(arr,sum){
    for(let i =0;i<arr.length-1;i++){
    
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==sum)
            {
                return [arr[i],arr[j]]
            }
            
            
            
        }
    }
   return []

}
const array =[3,4,1,-1,2,6]
const sum =11

const ele=findSum(array,sum)
console.log(ele)

