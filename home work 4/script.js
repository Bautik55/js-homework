
// function godd(string){
//     if (typeof string === 'string'){
//         if (string.length >= 0){
//             if (string.length >= 4 && string.length <= 13){
//                 if (string.length % 2 === 0){
//                     return 'Ur word is even'
//                 } else{
//                     return 're'
//                 }
//             } else{
//                return  'min-4-13max'
//             }
//         } else{
//             return 'It`s empty'
//         }
//     } else{
//         return 'It`s not string'
//     }
// }
//
// console.log(godd('1342'))

// function goddy(word){
//     if (word.length % 2 === 0){
//         return 'Ur str is even'
//     } else{
//         return 'Ur str isn`t even'
//     }
// }
//
// console.log(goddy(''))

// function Normalname(word){
//     return (word.replaceAll(' ', '')[0].toUpperCase() + word.slice(1, 5) +
//         word.replaceAll(' ', '')[5].toUpperCase() + word.slice(7, 11) +
//         word.replaceAll(' ', '')[10].toUpperCase() + word.slice(13, 17) +
//         word.replaceAll(' ', '')[15].toUpperCase() + word.slice(19, 21) +
//         word.replaceAll(' ', '')[18].toUpperCase() + word.slice(23, 26))
// }
// console.log(Normalname('lorem ipsum dolor sit amet'))

// function priceanddiscount(price, discount){
//     if(typeof price === 'number'){
//         if (typeof discount === 'number'){
//             return (price - (price * (discount / 100)))
//         } else{
//             return 'discount not a number'
//         }
//     } else{
//         return 'price not a number'
//     }
// }
//
// console.log(priceanddiscount(3000,20))

function HelloWorldNOSpace(word){
    return word.trim().slice(word.indexOf('') + 6) + ' ' + word.trim().slice(word.indexOf(''), word.indexOf('h') ).replace('o', 'a')
}

console.log(HelloWorldNOSpace('      hello world'))
// Не могу понять почему после еще нескольких пробелов появляется слово 'world' если я поставил до куда надо вырезать с помощью slice