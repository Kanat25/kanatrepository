// const a=0;
// let b=10;
//
// var c;
//
// c="hello";

// const first_name = "Jack";
// const last_name = "barbar";
// console.log(first_name + " " + last_name);
// console.log(`${first_name} ${last_name}`)
//
// const getFullname =(user) =>{
//     // return "first name" +user.first_name + "\n" + "last_name"
//     return `first name: ${user.first_name}\nlast name: ${user.last_name}`;
//
// }
// const user ={
//     first_name: "jack",
//     last_name: "vor"
// }
// console.lo
//
// g(getFullname(user))

//spread operator


// const mass =[1, 2, 3, 4, 5]
// const mass2 =[...mass];


//es5

// for(let i=0; i<mass.length; i++){
//     mass2.push(mass[i])
// }
//
//
// console.log(mass2)
//
// const obj ={
//     username: "jack",
//     age: "20",
//     last_name: "barb",
// }
//
// const obj2 ={
//     ...obj,
//     key:"value",
//     key2:"value"
// }
// console.log(obj2)
//
//



const props ={
    onSubmit: () =>{
        console.log("submit")
    },
    data: [
        {
            key:"value"
        },
        {
            key2:"value2"
        },
        {
            key3:"value33"
        },
    ]
}

const {data, onSubmit} = props;
console.log(data[1].key2)
onSubmit();
