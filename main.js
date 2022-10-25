function greatestAmongTwo (a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}
function rectanglePerimeter (a, b) {
    console.log('Perimeter is:',(a+b)*2)
}

function evenOrOdd (num) {
    if (num % 2 == 0) {
        console.log(num,' is even')
    } else {
        console.log(num,' is odd')
    }
}

console.log('greatestAmongTwo 2,5')
console.log(greatestAmongTwo(2,5))
console.log('greatestAmongTwo 7,5')
console.log(greatestAmongTwo(7,5))
console.log('rectanglePerimeter')
rectanglePerimeter(3,4)
console.log('evenOrOdd')
evenOrOdd(5)
evenOrOdd(2)