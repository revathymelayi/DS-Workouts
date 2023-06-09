function insert(arr,val){
   

    for(let i=0;i<=arr.length-1;i++){
       
        if(val<=arr[i]){
         
            for(let j=arr.length;j>=i;j--){
                
                arr[j]=arr[j-1]
               
            }
            arr[i]=val
            
            return arr
          
           
        
        }
    }
    arr.push(val)
    return arr
}

const myArray =[1,3,5,8,9]
const val=10
const newArray=insert(myArray,val)
console.log(newArray)
