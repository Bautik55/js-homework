// const handlecheck = (arr) =>{
//   return arr.filter(el => el)
// }
// console.log(handlecheck([1,2,3,'431', 1, 2, undefined, null]))

// const handlecheck = (arr) =>{
//   return arr.reverse()
// }
// console.log(handlecheck([3,2,1]))


// const handlecheck = (first, second) =>{
//   return [...first, ...second]
// }
//
// console.log(handlecheck(['a', 'b', 'c'], [1, 2, 3]))

// const handlecheck = (sports) => {
//   const newSports = [...sports, 4, 5, 6];
//   return newSports;
// }
//
// console.log(handlecheck([1, 2, 3]));

// const handlecheck = (sports) => {
//   const newSports = [4, 5, 6, ...sports];
//   return newSports;
// }
//
// console.log(handlecheck([1, 2, 3]));

// const arrayObj = {
//     name: 'Vasya',
//     age: 20,
//     isMarried: false,
//   }
// console.log(Object.keys(arrayObj))

// const handlecheck = (arr) =>{
//   return arr.filter((el, index) => arr.indexOf(el) === index)
// }
// console.log(handlecheck([1,2,3,2,1]))

// const handlecheck = (arr) =>{
//   return arr.slice(1, 5)
// }
// console.log(handlecheck([1,2,3,4,5]))

// const handlecheck =(arr) =>{
// //   return [...arr.slice(0, 1), ...arr.slice(3)]
// // }
// //
// // console.log(handlecheck([1,2,3,4,5]))

// const handlecheck =(arr) =>{
//   return arr.join(', ')
// }
//
// console.log(handlecheck(['Капуста', 'Репа', 'Редиска', 'Морковка']))

// const handlecheck =(str) =>{
//   return str.split('').map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('')
// }
//
// console.log(handlecheck('оПасный охоТник'))

// const cars = [
//   {
//     make: "Ford",
//     model: "Mustang",
//     year: 1969,
//     color: "red",
//     price: 25000
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     year: 2017,
//     color: "blue",
//     price: 30000
//   },
//   {
//     make: "Tesla",
//     model: "Model S",
//     year: 2018,
//     color: "black",
//     price: 120000
//   },
//   {
//     make: "Chevrolet",
//     model: "Camaro",
//     year: 1970,
//     color: "orange",
//     price: 60000
//   },
//   {
//     make: "Dodge",
//     model: "Challenger",
//     year: 2019,
//     color: "red",
//     price: 35000
//   },
//   {
//     make: "Chevrolet",
//     model: "Corvette",
//     year: 2019,
//     color: "blue",
//     price: 90000
//   },
//   {
//     make: "Tesla",
//     model: "Model 3",
//     year: 2019,
//     color: "white",
//     price: 40000
//   },
//   {
//     make: "Mercedes",
//     model: "C-Class",
//     year: 2019,
//     color: "black",
//     price: 60000
//   }
//   ]
// console.log(cars.filter(car => car.price >= 40000 && car.price <= 60000 && car.year < 2019))

const cars = [
  {
    make: "Ford",
    model: "Mustang",
    year: 1969,
    color: "red",
    price: 25000
  },
  {
    make: "Ford",
    model: "F-150",
    year: 2017,
    color: "blue",
    price: 30000
  },
  {
    make: "Tesla",
    model: "Model S",
    year: 2018,
    color: "black",
    price: 120000
  },
  {
    make: "Chevrolet",
    model: "Camaro",
    year: 1970,
    color: "orange",
    price: 60000
  },
  {
    make: "Dodge",
    model: "Challenger",
    year: 2019,
    color: "red",
    price: 35000
  },
  {
    make: "Chevrolet",
    model: "Corvette",
    year: 2019,
    color: "blue",
    price: 90000
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2019,
    color: "white",
    price: 40000
  },
  {
    make: "Mercedes",
    model: "C-Class",
    year: 2019,
    color: "black",
    price: 60000
  }
]
console.log(cars.filter(car => car.make = 'Mercedes'))