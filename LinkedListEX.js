class Node { //โครงสร้าง
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList { //โครงสร้าง
    constructor(value){ 
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value){ //เพิ่มข้อมูลหลังสุด
        const newNode = new Node(value)
        if (!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() { //เอาข้อมูลหลังสุดออก
        if (this.length == 0) return undefined
        let temp = this.head
        let pre = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if (this.length == 0) {
            this.head = null
            this.tail = null
        }
        return temp

    }

    unshift(value){ //เพิ่มข้อมูลหน้าสุด
        const newNode = new Node(value)
        if (!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    shift(){ //เอาข้อมูลหน้าสุดออก
        if (this.length == 0) return undefined
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if (this.length == 0){
            this.tail = null
        }
        temp.next = null
        return temp
    }

    get(index){ //ดึงข้อมูลจาก index อ้างอิง
        if (index < 0 || index >= this.length) return undefined
        let temp = this.head
        for (let i = 0;i < index; i++){
            temp = temp.next
        }
        return temp
    }

    set(index,value){ //กำหนดข้อมูลลงไปใน index อ้างอิง
        let temp = this.get(index)
        if (temp){
            temp.value = value
            return true
        }
        return false
    }

    insert(index,value){ //แทรกข้อมูลลง index อ้างอิง
        if (index < 0 || index > this.length) return false
        if (index == 0) return this.unshift(value)
        if (index == this.length) return this.push(value)
        
        const newNode = new Node(value)
        const temp = this.get(index-1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }

    remove(index){ //ลบข้อมูลจาก index อ้างอิง
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length-1) return this.pop()

        const before = this.get(index-1)
        const temp = before.next
        before.next = temp.next
        temp.next = null

        this.length--
        return temp
    }

    reverse(){ //สลับข้อมูลจากหัวไปหาง หรือ หางไปหัว
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next = temp.next
        let prev = null

        for (let i = 0;i < this.length;i++){
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }

        return this
    }

    showList(){
        let temp = this.head
        while (temp !== null) {
            console.log(temp.value)
            temp = temp.next
        }
    }
}

let myLinkedList = new LinkedList(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)

// myLinkedList.pop()
// myLinkedList.unshift(4)
// myLinkedList.shift()

// myLinkedList.set(1,9)

// console.log(myLinkedList)
// myLinkedList.insert(1,4)
// myLinkedList.unshift(8)

console.log(myLinkedList.showList())