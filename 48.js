let sum = 0;
// function add() {
//     for(let i=0;i<arguments.length;i++)
//     {
//         sum = sum + arguments[i];
//     }
//     return sum;
// }





const add = (...nums) => {
    console.log('a->',a)
    console.log('a0->',a[0])
    console.log('n->',nums)
    console.log(a===nums)
    console.log('n0->',nums[0][0])
    console.log(a[0]===nums[0][0])
    console.log(nums[0])
    console.log(nums[0].length)
    for (let i = 0; i < nums[0].length; i++) {
        console.log(nums[0][i])
        sum = sum + nums[0][i];
    }
    return sum;
}


const a = [1, 2, 3, 4, 5, 6]


console.log(add(a))