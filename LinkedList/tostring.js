class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    stringToLinked(str){
        if (str.length === 0) {
            return null;
        }

        let curr=this.head

        for(let i = 0; i < str.length; i++){
           let node = new Node(str[i]);

            if(this.head === null){
                this.head = node;
                curr = node;
            } else {
                curr.next = node;
                curr = node;
            }

            this.size++;
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        } else {
            let curr = this.head;
            let ListValue = "";
            while(curr){
                ListValue += `${curr.value} `;
                curr = curr.next;
            }
            console.log(ListValue);
        }
    }
} 

const list = new LinkedList();

list.stringToLinked('REVATHY');
list.print(); // R E V A T H Y
console.log(list.getSize()); // 7

list.stringToLinked('');
console.log(list.head); // null
console.log(list.getSize()); // 0
