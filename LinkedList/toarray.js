class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size===0
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev =this.head
            while(prev.next){
               prev=prev.next
            }
            prev.next=node
        }
        this.size++

    }
    toArray(value){
        const node=new Node(value)
        let arr =[]
        let curr =this.head
         if(this.isEmpty()){
            return null
         }
         while(curr){
              arr.push(curr.value)
              curr=curr.next
         }

      console.log(arr)   
    }

    tolinkedList(arr){
        for(let i=0;i<arr.length;i++){
            this.append(arr[i])
        }

    }
   

    print(){
        if(this.isEmpty()){
            console.log('List is empty')
        }else{
            let curr =this.head
            let ListValue=" "
            while(curr){
                ListValue +=`${curr.value} `
                curr=curr.next
            }
            console.log(ListValue)
           
        }
    }
}

 const list =new LinkedList()

// list.append(2)
// list.print()
// list.append(3)
// list.print()

// list.append(4)
// list.print()

// list.append(5)
// list.print()


// list.toArray()
// list.tolinkedList([2,4,6,8,10])
//  list.print()






