function recursivefib(n){
    if(n < 2){
        return n
    }else
        
    return recursivefib(n-1)+recursivefib(n-2)
    

}

console.log(recursivefib(3))