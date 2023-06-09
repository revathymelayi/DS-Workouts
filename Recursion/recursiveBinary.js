function recursive(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,left,right){
    if(left>right){
        return -1
    }

    let middle=Math.floor((left+right)/2)
    if(target===arr[middle]){
        return middle
    }
    if(target>arr[middle]){
        return search(arr,target,middle+1,right)
    }else{
        return search(arr,target,left,middle-1)
    }
}

console.log(recursive([-2,-1,0,4,6,8,10],-1))