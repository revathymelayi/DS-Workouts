class Node{
    constructor(value){
        this.value=value
        this.next=null

    }
}
class linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
            
        }
        this.size++
    }

    sort(){
        let curr=this.head
        let sorted=true
        while(curr && sorted){
            sorted=false
            let nextNode=curr.next
            while(nextNode){
              if(curr.value>nextNode.value){
                let temp=curr.value
                curr.value=nextNode.value
                nextNode.value=temp
                sorted=true
              }
              nextNode=nextNode.next
            }
            curr=curr.next
        }
    }
       
   
   
    

    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let curr=this.head
            let listvalue =""
            while(curr){
                listvalue +=`${curr.value} `
                curr=curr.next
            }
            console.log(listvalue)
        }
    }
}

const list = new linkedlist()

list.append(6)
list.print()

list.append(2)
list.print()

list.append(5)
list.print()

list.append(4)
list.print()

list.append(7)
list.print()

list.sort()
list.print()