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
        const node =new Node(value)
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
    delete(list){
        this.head=null
    }
    

    print(){
        if(this.isEmpty()){
            console.log('list is empty')
            
        }
        else{
            let curr = this.head
            let listvalue=''
            while(curr){
                listvalue += `${curr.value} `
                curr=curr.next
            }
            console.log(listvalue)

        }
    }
}

const list = new LinkedList()
list.append(5)
list.print()
list.append(10)
list.print()
list.append(15)
list.print()
list.append(20)
list.print()
list.append(25)
list.print()
list.append(35)
list.print()

list.delete()
list.print()

