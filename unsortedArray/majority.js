function majority(arr){
    let maxcount=0
    let index =-1
    for(let i=0;i<arr.length;i++){
        let count=0
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j])
             count++
             
        }
            if(count>maxcount){
                maxcount=count
                index=i
            }
        
        }
        if (maxcount > arr.length / 2)
        console.log(arr[index]);
    else
        console.log("No Majority Element");
    }
    


const array=[ 1, 1, 2, 1, 3, 5, 1 ];
const count=majority(array)
console.log(count)


