function chiqar() {
    let ogirligi = prompt()
    let narxi = prompt("mahsulot narxini kiriting")

    for (let i = 1; i <= 20; i++) {
        let ogirlik = i / 10
        let xarajat = ogirlik * narxi * ogirligi

        console.log(i + " kg konfet narxi " + xarajat + "so'm")
    }
}


chiqar()