/* FUNCTION */

const square = (side: number) => side * side

console.log(square(10))


let great:Function

great=()=> console.log('Hello world')

great()

const add = (a: number, b: number, c?:number|string)=>{
    console.log(a+b)
    console.log(c)
}
// ? là tham số không bắt buộc
// add(1,2,'Hello Tuan Anh')
add(1.3,4)