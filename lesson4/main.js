

// console.log(document)
const blocks = document.getElementsByClassName('block');
// console.log(blocks)
//
const block3 = document.getElementById('block3')
// console.log()




// block3.claassName = "changedclass"
//
// console.log(block3.classList)

// block3.classList.add("chagedlist")
// console.log(block3.classList)
//
// block3.onclick = () =>{
//     block3.classList.toggle("active")
// }
// const block = document.querySelector(".block");
//
// const blocks1 = document.querySelectorAll(".block")
// console.log(blocks1)


const button = document.getElementById("button");
const input = document.getElementById('input');



button.onclick =() => {
    const div = document.createElement('div');
    div.setAttribute('class', 'block');
    document.body.append(div);
    div.innerText = input.value;
    input.value="";

    //delete
    const deleteText123 = document.createElement("button2");
    deleteText123.innerText ="remove text";
    document.body.append(deleteText123);
    deleteText123.onclick =() => {
        div.remove();
        deleteText123.remove()
    }

//    new dawn

}
let pass=18;

let password= prompt("welcome to the london club, how old are you?");
if (password == 18){
    alert("you are welcome");
} else if(password ==> 18){
    alert("you are welcome twice")
} else{
    alert("try later");
}


// const button2 = document.getElementById("button2");
// // const input = document.getElementById('input');
// button2.onclick =() => {
//
//       document.body.remove(div);
//
//
// }
//



// let i=0;

// while(i<100){
//     console.log("choose correct number")
//     i++
// }

// let askingname = prompt("enter your name")
// let response =alert( "hi "+ askingname){
//     if
// }
// let

// let password;

