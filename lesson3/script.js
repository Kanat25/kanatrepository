// function sayhello(){
//     console.log("hello")
// }
//
// sayhello();

// function getfullname(user, age,gender) {
//     console.log(user, age, gender)
//
// }
// const user ={
//     first_name:"alex",
//     last_name:"joe"
// }
// getfullname(user, 18, "male")
//
// const anonym = function (user, age) {
//     console.log("name ", user, age)
// }
// anonym("kana", 29);


//
//
// function number(n1, n2) {
//     let result=0;
//     if (n1>n2)
//

// }


function n(number1, number2) {
    if (number1 > number2) {
        console.log("число 1 больше");

    } else if (number2 > number1) {
        console.log("число 2 больше");

    } else {
        console.log("числа одинаковы");
    }
}

n(6,4)

// 2

function twoMassive(array1,array2) {

    if (array1.length > array2.length){
        console.log("массив 1 длиннее массива 2");

    } else if (array1.length === array2.length) {
        console.log("массивы одинаковы");

    } else {
        console.log("массив 2 больше");
    }
}
twoMassive([1,2,2], [4,4,4,4])

// 3

function counter(user1) {
    user1.length
    console.log(user1.length)
}
counter("fkwjfijeofihofhwefef")

