function chiqar() {
    let a = +prompt()
    let b = +prompt()
    
    let kopaytirish = 1

    for (let i = a; i <= b; i++) {
        kopaytirish = kopaytirish * i
    }

    console.log("natija: " + kopaytirish)
}


chiqar()