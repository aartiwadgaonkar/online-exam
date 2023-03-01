// const selectedquetion = 0
// const q = ["", "", ""]
// let x = (selectedquetion + 1) / q.length * 100
// console.log(`${x}%`);
// console.log(3 / 2);
// console.log(3 % 60);
// console.log(Math.floor(2.6));
// console.log(Math.ceil(2.6));
// let countdown = 120
// setInterval(() => {
//     countdown--
//     console.log(math.floor(countdown / 60));
// }, 1000)

let a = 1
let zz = setInterval(() => {
    a++
    if (a === 10) {
        clearInterval(zz)
    }
    console.log("a", a);
}, 1000)