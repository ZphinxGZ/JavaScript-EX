// let money = 500 
// let price = 99.99.toString()
// let message = "Kunakorn"
// let name = "Au"

// let checkName = false
// let checkProduct = true

// let age = +"20.15"


//parseInt ตัวเลขจำนวนเต้ม
//parseFloat ตัวเลขทศนิยม

//หรือ ใส่ +หน้าข้อความที่เป้นตัวเลข ข้อความจะเป้นตัวเลข สามารถนำไปคำนวนได้
//"" จำแปลงจากตัวดลขเป็น strings
//.toString จำแปลงจากตัวดลขเป็น strings**

// console.log(age)
// console.log(typeof(age))


//-----------------Array-----------
// let number1 = 1,
//     number2 = 2,
//     number3 = 3,
//     number4 = 4,
//     number5 = 5

// console.log(number1)
// console.log(number2)
// console.log(number3)
// console.log(number4)
// console.log(number5)

//let number = Array(100,200,"300",400.99,5,true)
// console.log(number)
// console.log("ตัวแรก = ",number[0])
// console.log("ตัวที่ 2 = ",number[1])
// console.log("ตัวที่ 3 = ",number[2])
// console.log("ตัวที่ 4 = ",number[3])
// console.log("ตัวที่ 5 = ",number[4])
// console.log("ตัวที่ 6 = ",number[5])

//let color = ["แดง","ชมพู","เขียว","ขาว"]
// console.log(color)
// console.log(color[1])
// console.log("มีจำนวนสมาชิก = ",color.length,"ตัว")
//-----------------Array-----------

//------------Operator-----------
//let a = 11,b = 5
// console.log("ผลบวก = ",a+b)
// console.log("ผลลบ = ",11-5)
// console.log("ผลคูณ = ",11*5)
// console.log("ผลหาร = ",11/5)

// console.log("ผลเศษของการหาร = ",11%5)
// console.log("ยกกำลัง = ",a**b)
//------------Operator-----------

//------------Boolean------------
// *==*   *!=*   *>*   *<*   *>=*   *<=*
// let e = 5,r = 10
// let check = true

// console.log("e เท่ากัน r หรือไม่ = ",e==r)
// console.log("e ไม่เท่ากัน r หรือไม่ = ",e!=r)
// console.log("e มากกว่า r หรือไม่ = ",e>r)
// console.log("e น้อยกว่า r หรือไม่ = ",e<r)
// console.log("e มากกว่าหรือเท่ากับ r หรือไม่ = ",e>=r)
// console.log("e น้อยกว่าหรือเท่ากับ r หรือไม่ = ",e<=r)

// console.log(check)
// console.log(!check)
//------------Boolean------------

//-----------ตัวดำเนินการทางตรรกศาสตร์-------------
//&& = and      ,         || = or      ,       ! = not
//-----------ตัวดำเนินการทางตรรกศาสตร์-------------

//-----------ตัวดำเนินการเพิ่มค่า-ลดค่า-------------
//++(Prefix) ++(Postfix) --(Prefix) --(Postfix)
//++a             a++         --a         a--
// let a = 5 ,b = 10  
// //เพิ่มค่า prefix
// console.log("ค่าปัจจุบัน = ",a)
// console.log("เพิ่มค่าแบบ Prefix = ",++a)
// console.log("ค่าปัจจุบัน = ",a)

// //เพิ่มค่า Postfix
// a = 5
// console.log("ค่าปัจจุบัน = ",a)
// console.log("เพิ่มค่าแบบ Postfix = ",a++)
// console.log("ค่าปัจจุบัน = ",a)

// //ลดค่า prefix
// console.log("ค่าปัจจุบัน = ",b)
// console.log("ลดค่าแบบ Prefix = ",--b)
// console.log("ค่าปัจจุบัน = ",b)

// //เพิ่มค่า Postfix
// b = 10
// console.log("ค่าปัจจุบัน = ",b)
// console.log("ลดค่าแบบ Postfix = ",b--)
// console.log("ค่าปัจจุบัน = ",b)
//-----------ตัวดำเนินการเพิ่มค่า-ลดค่า-------------

//-----------Compound Assingment-------------
//+=    -=  *=  /=  %=  
// let x = 10,y = 20
// console.log("x ก่อน = ",x)

//x += y //x = x+y
//x -= y //x = x-y
//x *= y //x = x*y
//x /= y //x = x/y
//x %= y //x = x%y

// console.log("x หลัง = ",x)
//-----------Compound Assingment-------------

//-----------ลำดับตัวดำเนินการ-------------
//1.)   ()                              
//2.)   ++,--                           ซ้ายไปขวา
//3.)   * , / , %                       ซ้ายไปขวา
//4.)   + , -                           ซ้ายไปขวา
//5.)   < , <= , > , >=                 ซ้ายไปขวา
//6.)   == , !=                         ซ้ายไปขวา
//7.)   &&                              ซ้ายไปขวา
//8.)   ||                              ซ้ายไปขวา
//9.)   = , += , -= , *= , /= , %=      ขวาไปขวา

//** 5+8*9 = 8*9 +5
//** 10-4+2 = 10-4 +2
//** 10-(2+1) = 2+1 - 10
//** 5*2-40/5 = 5*2 40/5 แล้วค่อยมาลบ
//** 7+8/2+25 = 
// console.log(5+8*9)
// console.log(10-4+2)
// console.log(10-(2+1))
// console.log(5*2-40/5)
// console.log(7+8/2+25)
//-----------ลำดับตัวดำเนินการ-------------


//-----------If โครงสร้างควบคุมแบบมีเงื่อนไข-------------
//1.)แบบลำดับ (Sequence)
//2.)แบบมีเงื่อนไข (Condition)
//3.)แบบทำซ้ำ (loop)

//แบบมีเงื่อนไข (Condition)**
//if , Switch..Case
// let age = 80
// if(age > 15 && age < 60){
//     console.log("คำนำหน้าเป็นนายหรือนางสาว")
// }
// else if(age >= 61){
//     console.log("แก่")
// }
// else{
//     console.log("เด้กชาย")
// }


// let balance = 5000
// let withDraw = 50

// if(withDraw<=balance){
//     document.write("ดำเนิดการถอนเงิน ",withDraw," บาท<br>")
//     console.log("ดำเนิดการถอนเงิน ",withDraw)

//     balance -= withDraw

//     console.log("ยอดคงเหลือ = ",balance)
//     document.write("ยอดเงินคงเหลือ = ",balance," บาท")
// }else{
//     console.log("ไม่สามารถถอนเงินได้เนื่องจากจำนวนเงินไม่เพียงพอ")
// }

// let s = document.getElementById("score1")
// let r = document.getElementById("score2")

// function Grade(){
// let score = s.value

// if(score <= 40){
//     console.log("คุณได้เกรด D")
//     r.innerHTML = "คุณได้เกรด D"
    
// }
// else if(score >= 41 && score <= 50){
//     console.log("คุณได้เกรด C")
//     r.innerHTML = "คุณได้เกรด C"
// }
// else if(score >= 51 && score <= 60){
//     console.log("คุณได้เกรด B")
//     r.innerHTML = "คุณได้เกรด B"
// }
// else{
//     console.log("คุณได้เกรด A")
//     r.innerHTML = "คุณได้เกรด A"
// }
// }
//-----------If โครงสร้างควบคุมแบบมีเงื่อนไข-------------


//-----------Ternary Operator-------------
// let score = 50 //100 คะแนน


// if(score > 50){
//     pass = "ผ่านเกณฑ์"
// }
// else{
//     pass = "ไม่ผ่านเกณฑ์"
// }

// let pass = score >= 50 ? "ผ่านเกณฑ์" : "ไม่ผ่านเกณฑ์" //ลดรูป**

// console.log(pass)
//-----------Ternary Operator-------------


//-----------การเขียน If ซ้อน If-------------
// let age = 18

// if (age <= 15){
//     if(age == 15){
//         console.log("ม.3")
//     }
//     else if (age == 14){
//         console.log("ม.2")
//     }
//     else if (age == 13){
//         console.log("ม.1")
//     }
//     else{
//         console.log("ประถมศึกษา")
//     }
// }
// else{
//     console.log("ม.ปลาย / ปริญญา")
// }
//-----------การเขียน If ซ้อน If-------------


//-----------Switch..Case-------------
// let month = 3

// switch(month){
//     case 1 : console.log("มกราคม")
//     break
//     case 2 : console.log("กุมภาพันธ์")
//     break
//     case 3 : console.log("มีนาคม")
//     break
//     case 4 : console.log("เมษายน")
//     break
//     case 5 : console.log("พฤษภาคม")
//     break
//     case 6 : console.log("มิถุนายน")
//     break
//     case 7 : console.log("กรกฎาคม")
//     break
//     case 8 : console.log("สิงหาคม")
//     break
//     case 9 : console.log("กันยายน")
//     break
//     case 10 : console.log("ตุลาคม")
//     break
//     case 11 : console.log("พฤษจิกายน")
//     break
//     case 12 : console.log("ธันวาคม")
//     break
//     default : console.log("ไม่พบเดือน")
// }

// let statuse = 0 //0 = ปิดไฟ //1 = เปิดไฟ
// let light
// if(statuse == 0){
//     light = "ปิดไฟ"
// }
// else if(statuse == 1){
//     light = "เปิดไฟ"
// } 
// else{
//     light = "ไม่พบข้อมูล"
// }
// console.log(light)

// switch(statuse){
//     case 0 : light = console.log("ปิดไฟ")
//     break
//     case 1 : light = console.log("เปิดไฟ")
//     break
//     default : light = console.log("ไม่พบข้อมูล")
// }
//-----------Switch..Case-------------


//โปรแกรมคำนวนเลขคู่ / เลขคี่
// let x = 5

// if (x % 2 == 0){
//     console.log("เลขคู่")
// }
// else{
//     console.log("เลขคี่")
// }
//โปรแกรมคำนวนเลขคู่ / เลขคี่


//โปรแกรมเปรียบเทียบตัวเลข
// let x = 50 , y = 100

// if(x > y){
//     console.log("X มีค่ามากที่สุด")
// }
// else if(x < y){
//     console.log("Y มีค่ามากที่สุด")
// }
// else{
//     console.log("X และ Y มีค่าเท่ากัน")
// }
//โปรแกรมเปรียบเทียบตัวเลข


//-----------Loop-------------
/*
while(เงื่อนไข){
    จะทำซ้ำเมื่อเงื่อนไขเป็นจริง
}
*/

// let count = 1 //นับจำนวนรอบ
// while(count <= 5){
//     console.log("สวัสดีครั้งที่ = ",count) //1 , 2 ,3
//     if(count == 4){
//         break
//     }
//     count++ // 1 => 2 => 3 => 4
// }

/*
for(ค่าเริ่มต้นของตัวแปร; เงื่อนไข; เปลี่ยนแปลงค่าตัวแปร){
    คำสั่งเมื่อเงื่อนไขเป็นจริง
}
*/


// for(let count = 10;count >= 1 ;count--){
//     console.log(count)
// }
// for(let count = 1;count <= 10 ;count++){
//     console.log(count)
// }



/*
do{
    คำสั่งต่างๆ เมื่อเงื่อนไขเป็นจริง
}
while(เงื่อนไข)
*/
// let count = 1
// do{
//     console.log(count)
//     count++
// }
// while(count <= 5)

// while(true){
//     console.log(count)
//     if(count == 29){
//         break
//     }
//     count++
// }

// for(let count = 1;count <= 10;count++){
//     if(count == 5) continue
//     console.log(count)
// }
//-----------Loop-------------


//-----------ค่า Null Undefined NaN-------------
// let a = null //null มีค่าเป็น Fasle

// if(a){
//     console.log("a is null")
// }
// else{
//     console.log("a not null")  
// }
//-----------ค่า Null Undefined NaN-------------


//-----------Function-------------
// function prints(){
//     console.log("HelloWorld")
// }

// prints()

// function message(){
//     alert("แจ้งเตือนเงินเข้า")
// }


// function displayName(){
//     document.write("Kunakorn")
// }

// function plusNumber(x,y){
//     console.log("เลขที่ส่งมาคือ",x,y)
//     console.log(x + y)
// }

// plusNumber(5)
// let number = 200
// plusNumber(8,10)

// function fullName(fname,lname,city){
//     console.log("ชื่อจริง :",fname,"นามสกุล :",lname,"ที่อยู่ :",city)
// }
// fullName("คุณากร","ขำเจริญ","กทม.")

// function summation(x,y){
//     let total = x+y
//     console.log(total)
// }
// summation(10,50)

// function getIP(){
//     return "127.0.0.1" //ส่งออกมาต้องมีตัวแปรมารับ
// }
// let myIP = getIP()
// console.log("ไอพี =",myIP)

// function getNumber(){
//     return 100*100
// }
// let a = getNumber()
// console.log("ผลการคูณลข =",a)

// function getMyAdess(){
//     let city = "กทม."
//     return city
// }
// console.log("ที่อยู่ =",getMyAdess())


// function setSalary(salary){
//     let bonus = 1000
//     return salary+bonus
// }
// let a = setSalary(15000)
// a -= 500
// console.log("A เงินเดือนรวม =",a)

// let b = setSalary(20000)
// b = b-80
// console.log("B เงินเดือนรวม",b)

// function summation(x,y){
//     return x + y
// }

// let sum = summation(50,100)
// console.log("ผลรวม =",sum)

// function getName(name,city){
//     return name+" "+city
// }
// console.log(getName("คุณากร","กทม."))

// function fullName(fname,lname,city = "ระยอง"){
//     console.log("ชื่อ =",fname,"นามสกุล =",lname,"ที่อยู่ =",city)
// }
// fullName("คุณากร","ขำเจริญ","กทม.")
// fullName("คุณากร","ขำเจริญ")
// -----------Function-------------

// let a = 100

// function display(){
//     let b = 50
//     console.log("ตัวแปร = ",a)
//     console.log("ตัวแปรอื่นๆ = ",b)
// }
// console.log("Global = ",a)
// // console.log("b = ",b)
// display()


// let color = ["แดง","ขาว","ฟ้า","เหลือง","ม่วง"]
// let x = color.length
// //เรียงลำดับสมาชิก
// console.log("Before = ",color)
// let y = color.sort()

// console.log(x)

// console.log("After = ",y)

// let fruit = ["มะม่วง","แอปเปิ้ล","กล้วย","ทุเรียน"]
// console.log(fruit)

// //sort มากไปน้อย
// console.log(fruit.sort())
// //reverse น้อยไปมาก
// console.log(fruit.reverse())

// fruit.push("ไก่")
// fruit.push("นก")
// console.log(fruit)

// console.log(fruit[1])
// console.log(fruit[fruit.length-1])

// let color = ["แดง","ขาว","ฟ้า","เหลือง","ม่วง"]
// let fruit = ["มะม่วง","แอปเปิ้ล","กล้วย","ทุเรียน"]
// let number = [20,300,50,40]

// console.log(color)
// console.log(color.pop())
// console.log(color.pop())
// console.log(color)


// for (let i = 0;i < color.length;i++){
//     console.log("ลำดับที่",i,"มีค่า =",color[i])
// }
// let n = 100
// for (let i =1;i <= n;i++){
//     console.log(i)
// }

// color.forEach(getColor)

// function getColor(color){
//     console.log("สี",color)
// }

//เปลียนเครื่องหมายระหว่าง string
// let x = color.join(" | ")
// console.log(color.join(" | "),"มีสามชิก = ",color.length)
// color.pop()
// console.log(color.join(" | "),"มีสามชิก = ",color.length)

// let a = ["ผักกาด","ผักคะน้า"]
// let b = ["ส้ม","ทุเรียน"]
// let c = ["จาน","ชาม"]

// let cart = a.concat(b,c)
// cart = cart.join(" | ")
// console.log(cart)

// let point = [20,100,-100,5,-25,10]
// console.log(point)

// //น้อยไปมาก
// point.sort(function(a,b){
//     return a-b
// })
// console.log(point)

// //มากไปน้อย
// point.sort(function(a,b){
//     return b-a
// })
// console.log(point)


// let user = {
//     name:"Au", 
//     age:20, 
//     email:"kunakorn.kha@spumail.net",
//     getUser:function(){
//         return this.name+" "+this.email
//     }
// }
// let product = {
//     name:"เมาส์", 
//     price:1500, 
//     color:"black",
//     category:"computer",
//     size:"M",
//     displayProduct:function(){
//         return "ชื่อสินค้า = "+this.name+" ราคา = "+this.price+" สี = "+
//         this.color
//     },
//     disCount:function(){
//         return this.price - 1000
//     },
//     getColor:function(){
//         return this.color
//     }
// }
// // console.log("ชื่อสินค้า",product.name)
// // console.log("ราคา",product.price)
// // console.log("สี",product.color)
// console.log(product.displayProduct())
// console.log("ได้ส่วนลด",product.disCount())
// console.log("สินค้ามีสี",product.getColor())

// let re = document.getElementById("ressu")
// function deleteData(){
//     let result = confirm("คุณต้องการลบข้อมูลหรือไม่ ?")
//     console.log(result)

//     if(result == true){
//         console.log("ลบข้อมูลเรียบร้อย")
//         re.innerHTML = "ลบข้อมูลเรียบร้อย"
//     }
//     else{
//         console.log("ยกเลิกการลบข้อมูล")
//          re.innerHTML = "ยกเลิกการลบข้อมูล"
//     }
// }


////DOM
// const a = document.querySelector('#demo')
// const b = document.querySelector('.myjs')
// const c = document.querySelectorAll('p')

// let x = 10
// let y = 20
// function displayText(){
//     a.innerHTML = `แสดงข้อมูลตัวแปร x = ${x} และตัวแปร y = ${y}`
// }
// console.log(a)
// console.log(b)
// console.log(c)

// const titleEl = document.getElementById("title")
// const contentEl = document.querySelector(".content")
// const allEl = document.querySelectorAll("p")   

// const box = document.querySelector('.box')

// function darkMode(){
//     // a.innerHTML = `แสดงข้อมูลตัวแปร x = ${x} และตัวแปร y = ${y}`
//     // titleEl.style.color = "red"
//     // titleEl.style.backgroundColor = "yellow"
//     // titleEl.style.fontSize = "20px"
//     box.setAttribute("class","dark")
// }
// function lightMode(){
//      box.setAttribute("class","light")
// }

// let redd = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0;i <= redd.length;i++){
//     console.log(redd[i])
// }

// const textAll = document.querySelectorAll("p")
// let message = textAll[1].innerHTML

// console.log(message)


// let count = 1
// function addItem(){
//     const menu = document.getElementById("menu")
//     const item = document.createElement("li")//สร้าง li
//     item.innerText = "item" + (count++)
//     menu.appendChild(item)
// }

// let menu = document.getElementById('menu')
// let item = document.getElementById('item-3')

// function deleteItem(){
//     menu.removeChild(item)
// }

// const itemB = document.getElementById('item-2')
// const newitem = document.createElement('li')
// newitem.innerText = "X"
// function replaceItem(){
//     menu.replaceChild(newitem,itemB)
// }

// const box = document.getElementById('box')
// let status
// function addDarkMode(){
//     box.classList.add("darkmode")
// }
// function removeDarkmode(){
//     box.classList.remove('darkmode')
// }
// function switchMode(){
//     box.classList.toggle('darkmode')

//     status = box.classList.contains('darkmode')
//     console.log(status)
//     if(status){
//         box.style.color = "yellow"
//     }
//     else{
//         box.style.color = "red"
//     }
// }


// function welcome(){
//     alert("ยินดีต้อนรับเข้าสู่หน้าเว็บของเรา")
// }
// function hightLight(obj){
//     obj.style.background = "yellow"
// }
// function unhightLight(obj){
//     obj.style.background = "black"
// }


// function getMenu(){
//     const menu = document.getElementById("menu")
//     const display = document.getElementById("display")
//     console.log(menu.value.toUpperCase())
//     display.innerText = menu.value.toUpperCase()
// }
// function hightlight(obj){
//     obj.style.background = "yellow"
// }
// function unhightlight(obj){
//     obj.style.background = "red"
// }

////อ้างอิง
const menu = document.getElementById("menu")
const display = document.getElementById('display')
const btn = document.getElementById('btn')

////event
menu.addEventListener('change',getMenu)
btn.addEventListener('click',showWelcome)

function getMenu(){
    console.log(menu.value)
    display.innerText = menu.value
}
function showWelcome(){
    alert("ยินดีตอนรับเข้าสู่หน้าเว็บ")
}





























