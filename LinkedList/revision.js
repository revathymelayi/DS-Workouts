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

  isEmpty(){
    return this.size===0
  }

  getSize(){
    return this.size
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
  prepend(value){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node
    }else{
       node.next=this.head
       this.head=node
    }
    this.size++
  }
 reverse(){
    let prev=null
    let curr=this.head
    while(curr){
      let next=curr.next
      curr.next=prev
      prev=curr
      curr=next
    }
    this.head=prev
 }
 insert(index,value){
    const node=new Node(value)
    if(index < 0||index > this.size){
        return
    }
    if(index===0){
        this.head=node
    }else{
        let prev =this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        node.next=prev.next
        prev.next=node

    }
    this.size++
 }

 remove(index){
    if(index <0 || index>this.size){
        return
    }
    if(index===0){
        return this.isEmpty
    }else{
        let prev=this.head
        let removedNode=prev.next
        prev.next=removedNode.next
    }
    this.size--
}

remove(value){
   if(this.head.value===value){
    this.head=this.head.next
    this.size--
   }else{
    let prev=this.head
     while(prev.next && prev.next.value!==value){
        prev=prev.next
     }
     if(prev.next){
        const removedNode=prev.next
        prev.next=removedNode.next
        this.size--
    
     }
     
   }
} 

search(value){
    if(this.isEmpty()){
        return -1
    }
    let i=0
    let curr=this.head
    while(curr){
        if(curr.value===value){
            return i
        }
        curr=curr.next
        i++
    }
    return -1
}

insertSorted(value){
    const node=new Node(value)
    let prev=this.head
    if(this.isEmpty() || value < this.head.value){
           node.next=this.head
           this.head=node
    }else{
        while(prev.next && prev.next.value <value){
            prev=prev.next
        }
        node.next=prev.next
        prev.next=node
    }
    this.size++

}
  print(){
    if(this.isEmpty()){
        console.log('list is empty')
    }else{
        let curr=this.head
        let listValue=" "
        while(curr){
            listValue +=`${curr.value} `
             curr=curr.next
        }
        console.log(listValue)
    }

  }
    
}
const list =new LinkedList()


list.append(10)
list.print()

list.prepend(8)
list.print()

list.prepend(6)
list.print()

// list.reverse()
// list.print()

list.insert(1,7)
list.print()

list.remove(3)
list.print()

console.log(list.search(7))

list.insertSorted(9)
list.print()