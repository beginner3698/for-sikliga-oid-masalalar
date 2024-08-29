function chiqar() {
    let a = prompt()
    let b = prompt()

    let ayirma = Math.abs(a - b) + 1
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        console.log(i)

    }
    console.log("sonlar soni " + ayirma + " ta")
}


chiqar()