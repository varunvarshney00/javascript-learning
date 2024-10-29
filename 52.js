const colors = ['pinkedsdsd', 'red', 'black', 'green', 'pink', 'orange', null, 1];
// const color1 = colors[0];
// const color2 = colors[1];
// const color3 = colors[2];



// const [...colos] = colors;
// console.log(colos)
// console.log(colos[0])
// const [cl] = colos
// console.log(cl)
// const[a,b,c,d,e,f,g,h] = colors;

// const [, , b, , c] = colors;



// console.log(color2)
// console.log(color3)




const user = {
    name: 'varun',
    age: 34,
    address: {
        city: 'mathura',
        state: 'up'
    }
}


// const age = user.age
// const name = user.name

const {name:username, age:userage} = user;
// const {city} = address
// console.log(name)
console.log(username)
console.log(userage)
// console.log(job)

const {address:{city}} = user
console.log(city)

const{3:color10, 4: color4} = colors
console.log(color4)






function intro({address:{city, state}}){
    console.log(state,city)
}

intro(user)


function printColor({4:betafor}) {
    console.log(betafor)
}

printColor(colors)