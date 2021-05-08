// // const Animal = function (option) {
// //     this.name = option.name
// //     this.color = option.color
// //     // this.voice = function () {
// //     //     console.log(`Base voice from ${this.name}`)
// //     // }
// // }
// //
// // Animal.prototype.voice = function () {
// //     console.log(`Base voice from ${this.name}`)
// // }
// //
// //
// // const dog = new Animal({name: 'Sharik', color: 'red'})
// // console.log(dog.voice())
// //
// // const Cat = function (options) {
// //     Animal.apply(this , arguments)
// //     this.hasTail = options.hasTail
// // }
// //
// // Cat.prototype = Object.create(Animal.prototype)
// // Cat.prototype.constructor = Cat
// //
// // Animal.prototype.voice = function () {
// //     console.log(`This sound goes from ${this.name}`)
// // }
// //
// // Cat.prototype.voice = function () {
// //     Animal.prototype.voice.apply(this, arguments)
// //     console.log(this.name + ' says may!')
// // }
// //
// // const cat = new Cat({name: 'Leopold', color: '#fff', hasTail: true})
// //
// // // console.log(dog.voice())
// // console.log(cat.voice())
//
// class Animal {
//     constructor(options) {
//         this.name = options.name
//         this.color = options.color
//     }
//
//     voice() {
//         console.log(`Base voice from ${this.name}`)
//     }
// }
//
//
// const dog = new Animal({name: 'Pirat', color: 'orange'})
//
// console.log(dog.name)
//
// class Cat extends Animal {
//     constructor(options) {
//         super(options);
//
//         this.hasTail = options.hasTail
//         this.type = options.type
//         this.type = 'cat'
//     }
//
//     voice() {
//         super.voice()
//         console.log(this.name + ' says may!')
//     }
// }
//
// const cat = new Cat({name: 'Bora', color: 'white', hasTail: true})
//
// //Examples
//
// Array.prototype.mapAndLog = function () {
//     console.log('Array to map: ', this)
//     return this.map.apply(this, arguments)
// }
//
// console.log([1, 2, 3, 4].mapAndLog(x => x ** 2))
//
// String.prototype.toTag = function (tagName) {
//     return `<${tagName}>${this}</${tagName}>`
// }
//
// console.log('photos'.toTag('div'))
//
// Number.prototype.toBigInt = function () {
//     return BigInt(this)
// }
//
// let number = 55
//
// console.log(number.toBigInt())
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
