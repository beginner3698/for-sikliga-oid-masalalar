function chiqar() {
    let n = +prompt()
    let kopaytirish = 1

    for (let i = 1.1; i <= n; i = i + 0.1) {
        kopaytirish = kopaytirish * i
    }

    console.log("natija: " + kopaytirish)
}


chiqar()