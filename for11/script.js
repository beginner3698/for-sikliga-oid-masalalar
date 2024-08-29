function chiqar() {
    let n = +prompt()
    let S = 0

    for (let i = 0; i <= n; i++) {
        S = S + ((i + n) ** 2)
    }

    console.log("natija: " + S)
}


chiqar()