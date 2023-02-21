// Object
const bio = {
    firstname: 'Joshua',
    middlename: 'Oyakhire',
    lastname: 'Jacobs',
    age: '',
    nationality: 'Nigerian',
    fullname:'',
   height : '5ft9"',
    // today: new Date(),
    // get fstname(){
    //     return this.firstname;
    // },
    // getter
get fullname() {
      fullname = this.fullname = this.firstname+' '+this.middlename+' '+this.lastname;
      return fullname.toUpperCase()
    },
    // setter
    set ag(age){
this.age = ag;
    }

}
bio.age = 23;

const pio = Object.values(bio);

// looping through an object
let display = '';
for (let details in bio) {
    display += bio[details] + ',' + ' ';
};
// object stringify
// bio.age = bio.age.toString();
// bio.fullname = bio.fullname.toString();
let string = JSON.stringify(bio);

document.getElementById("oop").innerHTML = pio;
let date = document.getElementById('date');

let arrays = document.getElementById('arr');
let arr = ['john', 'potter', 'sally', 'mickey', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arrstr = JSON.stringify(arr);
arrays.innerHTML = arrstr;

let num = { count: 0};

Object.defineProperty(num, 'reset', {get : ()=>{ this.count = 0;}});

Object.defineProperty(num, 'increment', {get : ()=>{ this.count++;}});
Object.defineProperty(num, 'decrement', {get : ()=>{ this.count--;}});

Object.defineProperty(num, 'add', {get : (value)=>{ this.count += value;}});
Object.defineProperty(num, 'subtract', {get : (value)=>{ this.count -= value;}});

// num.reset;
// num.add = 5;
// console.log(num.add)
// num.subtract = 1;
// console.log(num)
// num.increment;
// num.decrement;


let obj = JSON.stringify(num)
document.getElementById('obj').innerHTML = obj

// construct
function  Person(first,last,age,eye){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;

}
let opp = document.getElementById('oop');

let joshua = new Person('Joshua','Jacobs',53,'Black');

let caleb = new Person('Caleb','Jacobs',81,'Black');
console.log(joshua);
console.log(caleb);

oop.addEventListener('click',()=>{
    console.log(this.event);
});