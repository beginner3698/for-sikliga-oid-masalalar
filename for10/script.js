function chiqar() {
    let n = +prompt()
    let S = 0

    for (let i = 1; i <= n; i++) {
        S = S + 1 / i
    }
    console.log("natija: " + S)
}


chiqar()