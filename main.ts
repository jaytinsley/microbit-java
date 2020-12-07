/**
 * newArray[i] = total[i-1]
 */
/**
 * if (i%5 == 0){
 * 
 * newArray[i] = 0
 * 
 * }
 */
/**
 * }
 */
/**
 * total = newArray
 * 
 * show()
 * 
 * })
 * 
 * // horizontal wipe off left
 * 
 * input.onButtonPressed(Button.A, function () {
 * 
 * let newArray = [0]
 * 
 * newArray = []
 */
/**
 * for(let i = 0; i < 25; i++){
 */
/**
 * newArray[i] = total[i+1]
 */
/**
 * if (i%5 == 4){
 * 
 * newArray[i] = 0
 * 
 * }
 */
/**
 * }
 */
/**
 * total = newArray
 * 
 * show()
 * 
 * })
 * 
 * // vertical wipe off up
 * 
 * input.onButtonPressed(Button.B, function () {
 * 
 * let newArray = [0]
 * 
 * newArray = []
 */
/**
 * for(let i = 0; i < 25; i++){
 */
/**
 * newArray[i] = total[i+5]
 * 
 * }
 */
/**
 * total = newArray
 * 
 * show()
 * 
 * })
 * 
 * // vertical wipe off down
 * 
 * input.onButtonPressed(Button.A, function () {
 * 
 * let newArray = [0]
 * 
 * newArray = []
 */
/**
 * for(let i = 0; i < 25; i++){
 */
/**
 * newArray[i] = total[i-5]
 * 
 * }
 */
/**
 * total = newArray
 * 
 * show()
 * 
 * })
 */
/**
 * step 2
 * 
 * input.onButtonPressed(Button.A, function () {
 * 
 * for (let i = 0; i <25; i++){
 * 
 * led.toggle(i%5,i/5);
 */
/**
 * }
 * 
 * })
 */
/**
 * //step 3
 * 
 * // horizontal wipe off right
 * 
 * input.onButtonPressed(Button.B, function () {
 * 
 * let newArray = [0]
 * 
 * newArray = []
 */
/**
 * for(let i = 0; i < 25; i++){
 */
// //step 4
// // horizontal wrap left
input.onButtonPressed(Button.A, function () {
    newArray = [0]
    newArray = []
    for (let k = 0; k <= 24; k++) {
        newArray[k] = total[k + 1]
        if (k % 5 == 4) {
            newArray[k] = total[k - 4]
        }
    }
    total = newArray
    show()
})
// // horizontal wrap right
input.onButtonPressed(Button.B, function () {
    newArray2 = [0]
    newArray2 = []
    for (let l = 0; l <= 24; l++) {
        newArray2[l] = total[l - 1]
        if (l % 5 == 0) {
            newArray2[l] = total[l + 4]
        }
    }
    total = newArray2
    show()
})
function show () {
    for (let i = 0; i <= 24; i++) {
        led.unplot(i % 5, i / 5)
        if (total[i] > 5) {
            led.plot(i % 5, i / 5)
        }
    }
}
function rotate () {
	
}
let newArray2: number[] = []
let newArray: number[] = []
let y = 0
let x = 0
let total: number[] = []
total = [0]
total = []
// step 1
for (let j = 0; j <= 24; j++) {
    total.push(randint(0, 10))
    x = j % 5
    y = j / 5
    if (total[j] > 5) {
        led.plot(x, y)
    }
}
