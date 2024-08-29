function chiqar() {
    let a = +prompt()
    let b = +prompt()
    
    let sum = 0

    for (let i = a; i <= b; i++) {
        sum = sum + i
    }

    console.log("natija: " + sum)
}


chiqar()