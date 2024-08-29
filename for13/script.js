function chiqar() {
    let n = +prompt()

    let sum = 0
    let ishoralar = 1

    for (let i = 1.1; i < n; i = i + 0.1) {
        sum = sum + (ishoralar * i)
        ishoralar = ishoralar * (-1)
    }

    console.log("natija: " + sum)
}


chiqar()