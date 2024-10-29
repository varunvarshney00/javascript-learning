const nums1 = [1,2,3,4,5,6,7,8]

// function add(a,b, ...nums) {
//     console.log('a->',a)
//     console.log('b->',b)
//     console.log(nums)
//     let sum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         sum = sum + nums[i];
//     }
//     return sum;
// }

// const a = add(...nums1)

// console.log(a)





// function add(...nums) {
//     return nums.reduce((acc,num)=>{
//         return acc+num
//     })

// }



// function add(...nums) {
//     return [...arguments].reduce((acc,num)=>{
//         return acc+num
//     })

// }





function add(...nums) {
    return Array.from(arguments).reduce((acc,num)=>{
        return acc+num
    })

}




// const result = add(1,2,3,4,5,6,7,8,9,10)
const result = add(...nums1)

console.log(result)