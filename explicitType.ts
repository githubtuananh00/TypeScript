/* EXPLICIT TYPE */

var myName: string = 'nam'
var age: number = 18
var isStudent:boolean = false

myName = 'Admin'
// myName = 18

// array
var names: string[] = ['hung', 'dung']

// names.push(5)
names.push('lan')

// union
var mixed:(string | number | boolean)[]

mixed = [5, 'Tuan', true]
mixed.push(false)
mixed.push(10)
mixed.push('Admin')


// 
var id: string | number
id = 123
id = '159'

var hobbies: 'book' | 'music'

hobbies = 'book'
// hobbies = 'cooking'

// object
var people: object
people ={
    name: 'Admin',
    age: 22
}
people = []

