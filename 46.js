// const fruits = ['1apple', '2banana', '3sev', '4kAju'];

// fruits.map((fruit)=>{
//     console.log('fruit-->', fruit);
// })

// console.log(fruits.map((fruit)=>{
//     console.log('fruit-->', fruit);
// }))





// console.log(fruits.map((fruit)=>{
//     console.log('fruit-->', fruit);
//     return fruit.toUpperCase();
//     console.log('yo')
// }))




// const capitalMonth = fruits.map((fruit) => {
//     console.log('fruit-->', fruit);
//     return fruit.toUpperCase();
// })

// console.log(capitalMonth)





// fruits.map((fruit, index) => {
//     console.log(index, fruit)
//     return fruit.toUpperCase()
// })


// console.log('----')


// console.log(fruits.map((fruit, index) => {
//     console.log(index + 1, fruit)
//     return fruit.toUpperCase()
// }))





// const a = fruits.forEach((fruit, index) => {
//     console.log(index + 1, fruit)
//     return fruit.toUpperCase();
// })

// console.log(a)





// const a = fruits.map((fruit, index, arr) => {
//     // console.log(index + 1, fruit)
//     console.log('arr-->', arr);
//     return fruit.toUpperCase();
// })

// console.log(a)





// const filteredMonths = fruits.filter((month, index, arr) => {
//     console.log(index + 1, month)
//     return month.toUpperCase();
// })

// console.log(filteredMonths)
// console.log(fruits)

// console.log(filteredMonths === fruits)





// const filteredMonths = fruits.filter((month, index, arr) => {
//     console.log(index + 1, month)
//     return true
// })

// console.log(filteredMonths)
// console.log(fruits)

// console.log(filteredMonths === fruits)





// const filteredMonths = fruits.filter((month, index, arr) => {
//     console.log(index + 1, month)
//     // console.log(month.length <= 5)

//     return month.toUpperCase().includes('A')
// })

// console.log(filteredMonths)





// const filteredMonths = fruits.filter((month, index, arr) => {
//     console.log(index, month)
//     // console.log(month.length <= 5)

//     return index>=2
// })

// console.log(filteredMonths)





// const students = [
//     {
//         name: 'varun',
//         age: 24
//     },
//     {
//         name: 'sajal',
//         age: 23
//     },
//     {
//         name: 'shivam',
//         age: 22
//     }
// ]

// const s = students.filter((student)=>{
//     return student.age > 22
// })

// console.log(s)





// const s = students.filter((student)=>{
//     return student.age > 22
// }).map((student)=>{
//     return student.name
// }).filter((student)=>{
//     return student.includes('a')
// })

// console.log(s)






// const nums = [1, 2, 3, 4];

// const red = nums.reduce((accumulator, current, index, )=>{
    // console.log('acc', accumulator, current);
    // console.log('accumulator', accumulator)
    // debugger
//     return accumulator  + current
// }, 10)

// console.log(red)