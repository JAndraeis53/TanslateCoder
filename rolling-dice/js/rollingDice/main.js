// Put your code here

console.log("Let's roll some dice, baby!")
console.log("---------------------------")


const RandRoll = (min, max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 10; i++) {
    let die1 = RandRoll(1, 6);
    let die2 = RandRoll(1, 6);

    let message = `${die1.toString()} + ${die2.toString()} == ${die1 + die2}`
    if (die1 === die2) {
        message += " DOUBLES!"
    }        
        console.log(message)
    }





// Current state prints message and integers but not numbers as strings


// const dieToString = () => {

//     let dieString = ""

//     if ( Roll === 1){
//         dieString = "one";
//     }
//     else if ( Roll === 2){
//         dieString = "two";
//     }
//     else if ( Roll === 3){
//         dieString = "three";
//     }
//     else if ( Roll === 4){
//         dieString = "four";
//     }
//     else if ( Roll === 5){
//         dieString = "five";
//     }
//     else{
//         dieString = "six";
//     }

//     return dieString;

// }

// console.log(dieString)
// const intToString = () => {}
