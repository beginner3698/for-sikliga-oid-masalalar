function chiqar() {
    let ogirligi = prompt("mahsulot og'irligini kiriting")

    let narxi = prompt("mahsulot narxini kiriting")

    for (let i = 1; i <= 10; i++) {
        let xarajat = i * narxi * ogirligi

        console.log(i + " kg konfet narxi " + xarajat + "so'm")
    }
}


chiqar()