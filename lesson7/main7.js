// // OOP
//
// class dog{
//     constructor(weight, height, color) {
//         this.weight = weight;
//         this.height=height;
//         this.color= color;
//
//     }
// }
// const rex= new dog(
//     20,
//     40,
//     "grey"
// )
// console.log(rex)
// const bobik = new dog(
//     30,
//     60,
//     "black"
// )
// console.log(bobik)


//абстрактный класс
//
// class Animal {
//     constructor(type, gender, color,voiceText) {
//         this.type =type;
//         this.gender= gender;
//         this.color=color;
//         this.voiceText= voiceText;
//     }
//     voice(){
//         console.log(this.voiceText)
//     }
// }
// class Bear extends Animal {
//     constructor(type, gender, color,voiceText,height,weight) {
//         super(type, gender, color,voiceText);
//         this.height =height;
//         this.weight=weight;
//     }
//     purpose(){
//         console.log(`bear height: ${this.height}\rBear weight: ${this.weight}`)
//     }
// }
// const Mishka=new Bear(
//     "pet",
//     "male",
//     "black",
//     "aaa",
//     "1",
//     "300"
// )
// Mishka.purpose();
// Mishka.voice();
// console.log(Mishka)
//
// class Rabbit extends Animal{
//     constructor(type, gender, color,voiceText,height,weight,earLength,speed) {
//         super(type, gender, color,voiceText);
//         this.height=height;
//         this.weight=weight;
//         this.earLength= earLength;
//         this.speed=speed;
//
//     }
//
// }
// const  Billy = new Rabbit(
//     "herbiore",
//     "male",
//     "white",
//     "fck fck",
//     40,
//     3,
//     15,
//     12
// )
// Billy.speed();
// Billy.voice();
// console.log(Billy)


//Task by own

class HomeType{
    constructor(type,altidude,materials,yearofBuilding,areaOfliving, color,quantityOffamily,seats,floors,yard) {
        this.type=type;
        this.altidude=altidude;
        this.materials=materials;
        this.yearofBuilding=yearofBuilding;
        this.areaOfLiving=areaOfliving;
        this.color= color;
        this.quantityOffamily=quantityOffamily;
        this.seats=seats;
        this.floors=floors;
        this.yard=yard
    }
}
class myHome extends HomeType{
    constructor(type,altidude,materials,yearofBuilding,areaOfliving,color,quantityOffamily,seats,floors,yard) {
        super(type,altidude,color,quantityOffamily,seats,floors,yard);
        this.materials= materials;
        this.yearofBuilding=yearofBuilding;
        this.areaOfLiving= areaOfliving;
        this.seats=seats;
        this.floors=floors;
        this.quantityOffamily=quantityOffamily
        this.yard=yard;
    }
}
const home=new myHome(
    "appartment",
    "flat",
    "bricks",
    "2 years ago",
    "145 meters by square",
    "black",
    "6",
    "17",
    '7',
    "exists"
)
console.log(home)

class school extends HomeType{
    constructor(type,altidude,materials,yearofBuilding,areaOfliving,color,quantityOffamily,seats,floors,yard,pupil,teachers,administrators,kitchen,conferenceHall) {
        super(type,altidude,materials,yearofBuilding,areaOfliving,color,quantityOffamily,seats,floors,yard,pupil,teachers,administrators);
        this.kitchen=kitchen;
        this.conferenceHall=conferenceHall;
    }
}
const mySchool = new school(
    "government building",
    "kinda flat",
    "made of stell,on a half of bricks",
    "1987",
    "500 meters of square",
    "red",
    "34",
    "400",
    "three story building",
    "exists with the children park",
    "350",
    "50",
    "3",
    "ony two",
    "1"
    )
console.log(mySchool)