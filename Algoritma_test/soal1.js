function reverseAlpabet(kata){
    const subKata = kata .split('')
    const panjangKata = kata.length - 1

    const reverseback = subKata.map(
        function(i,indeks){
            return subKata[panjangKata - (1 + indeks)]
        }
    )
    const kataFinal = reverseback.join('') + 1
    console.log(kataFinal)
}

reverseAlpabet("NEGIE1")