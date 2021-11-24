const sentence = "Saya sangat senang mengerjakan soal algoritma"

var arr = sentence.split(" ")
var newArr = []
for (let i of arr) {
    newArr.push(i.length)
}
var arrSort = newArr.sort(function (a, b) {
    return a - b
})
console.log('mengerjakan :' + arrSort[5] + ' '+ 'character')

// longest(sentence) 
// mengerjakan: 11 character
