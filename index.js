

function maxNumber() {
    let num1 = + prompt("Enter first number")
    let num2 = + prompt("Enter second number")
    if (num1 > num2) {
        alert("First number is greater", num1)
    }
    else if (num1 < num2) {
        alert("Second number is greater", num2)
    }
    else {
        alert("Number are equal")

    }

}

function maxNumbers() {
    let num1 = + prompt("Enter first number")
    let num2 = + prompt("Enter second number")
    let num3 = + prompt("Enter third number")

    if (num1 > num2 && num1 > num3) {
        alert("First number is greater", num1)
    }
    else if (num1 < num2 && num3 < num2) {
        alert("Second number is greater", num2)
    }
    else if (num1 < num3 && num2 < num3) {
        alert("Third number is greater", num3)
    }
    else {
        alert("Number are equal")

    }

}



function positiveNegative() {
    let num1 = + prompt("Enter your number")
    if (num1 > 0) {
        alert("Your number is positive")
    }
    else if (num1 < 0) {
        alert("Your number is negative")
    }
    else {
        alert("Number is equal to zero")

    }

}



function divisible() {
    let num1 = + prompt("Enter your number")
    if (num1 % 5 == 0 && num1 % 11 == 0) {
        alert("The number is divisible by 5 and 11 both")
    }
    else if (num1 % 11 == 0) {
        alert("The number is divisible by 11")
    }
    else if (num1 % 5 == 0) {
        alert("The number is divisible by 5")
    }
    else {
        alert("The number is not divisible by 5 and 11")

    }

}



function evenodd() {
    let num = + prompt("Enter a number")
    if (num % 2 == 0) {
        alert("Your number is even")
    }
    else {
        alert("You number is odd")
    }
}


function leapyear() {
    let num = + prompt("Enter Year")
    if (num % 4 == 0) {
        alert("This is leap year")
    }
    else {
        alert("This is not leap year")
    }
}



function chracterCheck() {
    let num = prompt("Enter chracter")
    if (num == "a" || num == "A") {
        alert("This chracter is alphabet")
    }
    else if (num == "b" || num == "B") {
        alert("This chracter is alphabet")
    }
    else if (num == "c" || num == "C") {
        alert("This chracter is alphabet")
    }
    else if (num == "d" || num == "D") {
        alert("This chracter is alphabet")
    }
    else if (num == "e" || num == "E") {
        alert("This chracter is alphabet")
    }
    else if (num == "f" || num == "F") {
        alert("This chracter is alphabet")
    }
    else if (num == "g" || num == "G") {
        alert("This chracter is alphabet")
    }
    else if (num == "h" || num == "H") {
        alert("This chracter is alphabet")
    }
    else if (num == "i" || num == "I") {
        alert("This chracter is alphabet")
    }
    else if (num == "j" || num == "J") {
        alert("This chracter is alphabet")
    }
    else if (num == "k" || num == "K") {
        alert("This chracter is alphabet")
    }
    else if (num == "l" || num == "L") {
        alert("This chracter is alphabet")
    }
    else if (num == "m" || num == "M") {
        alert("This chracter is alphabet")
    }
    else if (num == "n" || num == "N") {
        alert("This chracter is alphabet")
    }
    else if (num == "o" || num == "O") {
        alert("This chracter is alphabet")
    }
    else if (num == "p" || num == "P") {
        alert("This chracter is alphabet")
    }
    else if (num == "q" || num == "Q") {
        alert("This chracter is alphabet")
    }
    else if (num == "r" || num == "R") {
        alert("This chracter is alphabet")
    }
    else if (num == "s" || num == "S") {
        alert("This chracter is alphabet")
    }
    else if (num == "t" || num == "T") {
        alert("This chracter is alphabet")
    }
    else if (num == "u" || num == "U") {
        alert("This chracter is alphabet")
    }
    else if (num == "v" || num == "V") {
        alert("This chracter is alphabet")
    }
    else if (num == "w" || num == "W") {
        alert("This chracter is alphabet")
    }
    else if (num == "x" || num == "X") {
        alert("This chracter is alphabet")
    }
    else if (num == "y" || num == "Y") {
        alert("This chracter is alphabet")
    }
    else if (num == "z" || num == "Z") {
        alert("This chracter is alphabet")
    }

    else {
        alert("This character is not alphabet")
    }
}