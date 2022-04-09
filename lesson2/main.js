const arrray =[
    {
        username: "jack",
        fullname: 'jack kyrgyz'
    },
    {
        username: "joe",
        fullname: 'joe kyrgyz'
    },
    {
        username: "john",
        fullname: 'john kyrgyz'
    },
]
// console.log(arrray[0].username)

//инкрементация

// for(let i= 0; i < array.length; i++){
//     if(i === 2){
//         break;
//     }
//     console.log(array[1])
// }
//
// for(let user of array){
//     console.log(user)
// }


// const obj ={
//     key1: 'b1',
//     key2: 'b1',
//     key3: 'b1',
//     key4: 'b1',
//     key5 'b1',
//     key6 'b1',
// }
// console.log(obj.key1);
//
// for(let key in obj){
//     console.log(obj[key])
// }

let i = 0;

while(i<5){
    console.log("hello")
    i++
}

const users = [
    {
        username: 'jack',
        salary: 500
    },
    {
        username: 'joe',
        salary: 5000
    },
    {
        username: 'vito',
        salary: 1000
    }
];

console.log(users)

const destructUsers =users.map(user=> ({
    name: user.username,
    salary: user.salary
}));

// for(let user of users){
//     destructUsers.push({
//         name: user.username,
//         salary: user.salary
//     })
// }




// const filteredUsers = users.filter(user=> user.salary>500);
//
// console.log(filteredUsers);

// for(let user of users){
//     if(user.salary > 500){
//         filteredUsers.push(user)
//     }
// }
