/* ARRAY AND OBJECTS */

var names = ['Anh', 'Hung', 'Ben']
names.push('Trang')

// names.push(5)
// names.push(false)

var number = [1,2,3.5]
// number.push('abc')
// number[3]='52'
number[3]=52


var mixed = [1,'Tuan Anh', false]
mixed.push(5)
mixed.push('Abc')
mixed.push(true)
// mixed.push({a:'2',b:'Tuan Anh'})

// OBJECTS
var object ={
    name:'Tuan Anh',
    age:22,
    isStudent:false
}

// object.name = 5
object.name = 'Anh'
// object.age = 'anc'
object.age = 18

// object.hobbies = 'Read Book'

object = {
    age: 20,
    name: 'Admins',
    isStudent:false
}

var object2 = {
    age: 18,
    name: 'objects2',
    isStudent:false
}
var object3 ={
    ...object,
    ...object2
}
console.log(object3)