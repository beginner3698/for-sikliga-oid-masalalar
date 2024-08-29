function chiqar() {
    let a = prompt()
    let n = prompt()

    let kopaytirish = 1

    for (let i = 1; i <= n; i++) {
        kopaytirish = kopaytirish * a
    }

    console.log("natija: " + kopaytirish)
}


chiqar()