const tr ={
    key1:'*',
    key2:'**',
    key3:'***',
    key4:'****',
    key5:'*****',
    key6:'******',
    key7:'*******',
}

for(let treugolnik in tr){
    console.log(tr[treugolnik])
}


var i=0
for (i = 0; i < 101; i++){
    if (i % 15 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}


