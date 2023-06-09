function leader(arr,size){
    for(let i=0;i<size;i++){
        let j
        for(j=i+1;j<size;j++){
            if(arr[i]<=arr[j])
            break;
        }
        if(j==size)
        console.log(arr[i]+" ")
    }
}

const myArray=[ 16, 17, 4, 3, 5, 2 ]
const n = myArray.length
const leaders=leader(myArray,n)




