//use a simplified while loop where you dictate the start and end values. If start point is less or equal to stop point. This ensures the stop point will be the number it stops on.

const stopHere = 65536;
let startHere = 2;
while (startHere <= stopHere){
    console.log(startHere);
    startHere *= 2;  // after console.log produces the startHere number of 2 the loop goes again but adds the *= function to the returned number.
}
//also : function letsMultiplyAlot (){
//             let x = 1;
//             while (x < 65536){
//                 x*=2;
//                 console.log(x);
//             }

// let i = 2;
// while (i < 65537) {
//     console.log(i);
//     i+=i;
// }


let coneStock = Math.floor(Math.random() * 51) + 50;
let noCones = coneStock === 0;

do {
    let customerInput = Math.floor(Math.random() * 5) + 1;
    console.log(customerInput + " cones sold!")
    if (customerInput > coneStock) {
        console.log("Cannot sell you " + customerInput + " cones I only have " + coneStock + "!");
        continue;
    }
    coneStock -= customerInput;
    console.log("There are " +coneStock+ " cones left!")}
while (coneStock > noCones);
console.log("Yay! I sold them all!");






