const nums1 = [1, 2, 3, 4, 5]
const nums2 = [6, 7, 8, 9, 10]

// const joinedArray = nums1.concat(nums2);
// console.log(joinedArray)



// const myName = 'varun'

const joinedArray = [...nums1, ...nums2];





// const user = {
//     name: 'varuin',
//     age:24,
// }

// const user2 = {
//     name:'harry',
//     age:22
// }

// joinedArray = {...user, city:'mathura'}






function add() {
    console.log(arguments)
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}