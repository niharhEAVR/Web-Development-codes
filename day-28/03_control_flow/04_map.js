// Map is one type of object, and it is a set from mathametics (because it only consists unique values or do not repeat elements)
let myMap = new Map()
myMap.set('swift','swift by apple')
myMap.set('c','C language')
myMap.set('cpp','C++')
myMap.set('cs','C#')
myMap.set('py','python')
myMap.set('py','python')

console.log(myMap)
for (const [key, value] of myMap) {
    console.log(key, ":", value)
}

for (const element of myMap) {
    console.log(element)
} // this will print the elements of that map in array form