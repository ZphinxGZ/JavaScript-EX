class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(value){
        const newNode = new Node(value)
        this.fist = newNode
        this.last = newNode
        this.length = 1
    }

    enqueue(value){ //ข้อมูลหลังสุดออก
        const newNode = new Node(value)
        if (this.length === 0){
            this.fist = newNode
            this.last = newNode
        }
        else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
    }

    dequeue(){ //ข้อมูลหน้าสุดออก
        if (this.length === 0) return undefined
        let temp = this.fist
        if (this.length === 1){
            this.fist = null
            this.last = null
        }
        else{
            this.fist = this.fist.next
            temp.next = null
        }
        this.length--
        return temp
    }
}

let myQueue = new Queue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)

myQueue.dequeue()
console.log(myQueue)