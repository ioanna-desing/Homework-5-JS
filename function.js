// - створити функцію яка виводить масив

// function arrayBack(arr){
//     console.log(arr)
// }
// arrayBack([])

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function arrayNumbs(){
//     let randoms 
//     for( let i=0; i<30;i++){
//     return (Math.floor(Math.random()*100))
// }
//     return randoms
// }
// let backRandomNumbers = arrayNumbs ()
//  console.log(backRandomNumbers)


// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function numbMin(numb1,numb2,numb3){
//     let minNumb 
//     if ( numb1 <= numb2 && numb2 <= numb3) { minNumb = numb1}
//     if ( numb2 <= numb3 && numb2 <= numb1) { minNumb = numb2}
//     if ( numb3 <= numb1 && numb3 <= numb2) { minNumb = numb3}
//     console.log(minNumb)
//     return minNumb
// }
// numbMin(10,5,20)


// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function numbMax(numb1,numb2,numb3){
//     let maxNumb 
//     if ( numb1 >= numb2 && numb2 >= numb3) { maxNumb = numb1}
//     if ( numb2 >= numb3 && numb2 >= numb1) { maxNumb = numb2}
//     if ( numb3 >= numb1 && numb3 >= numb2) { maxNumb = numb3}
//     console.log(maxNumb)
//     return maxNumb
// }
// numbMax(10,5,20)


// - створити функцію яка повертає найбільше число з масиву

// function numbMax(){
//         for(let arr of arguments){
//             return  Math.max(...arr)
//     }
// }
// let result = numbMax([34,87,7])
// console.log(result)


// - створити функцію яка повертає найменьше число з масиву

// function numbers(){
//     for(let result of arguments){
//         return Math.min(...result)
//     }
// }
// let minNumber = numbers([37,9774,376,2])
// console.log(minNumber)


// - створити функцію яка приймає масив чисел та складає значення элементов масиву та повертає його.

// function arrayNumbsPlus(){
//     let result = 0
//     for(let numbs of arguments){
//      result += numbs 
//     }
//      return result
// }
// let resultNumbs = arrayNumbsPlus(45,34,53,23)
// console.log(resultNumbs)



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
 
// function arrayNumbsMiddle (){
//   let result = 0
//   for(let numb of arguments){
//    result +=numb 
//   }
//   return result/arguments.length
// }
// let arrayNumbsMiddleBack = arrayNumbsMiddle(26,321,44,32)
// console.log(arrayNumbsMiddleBack)



// - створити функцію яка прийма будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//  function numbers(){
//      let max = arguments[0]
//      let min = arguments[0]
//     for (let i=1; i<arguments.length;i++){
//         if ( arguments[i] > max){
//              max = arguments[i] 
//             }
//         if ( arguments[i] < min){
//              min = arguments[i]
//             }
//     }
//     console.log(max)
//     return min
//     }

// let numbersMinMax = numbers(37,9774,376,2)
// console.log(numbersMinMax)


// - Створити функцію яка приймає масив будь яких объектов, та поверта значимость кількості об'єктів в масиві


// let usersWithId = [
// {id: 1, name: 'vasya', age: 31, status: false},
// {id: 2, name: 'petya', age: 30, status: true},
// {id: 3, name: 'kolya', age: 29, status: true}, 
// {id: 4, name: 'olya', age: 28, status: false},
// ];

// function allArray(arr){
// 	let result = 0
// 	for ( let i of arr){
// 		result ++
// }
// 	console.log(result)
//     return result
// }

// let back = allArray(usersWithId)
// console.log(back)



// - Створити функцію яка прийма масив будь яких объектів, та поверта загальна кількість полів в них


// function arrayNumb(arr){
// 	let result = 0
// 	for ( let i of arr){
// 		for (let j in i){
// 			result ++
// 		}
// 	}
// 	console.log(result)
// 	return result
// }

// let backArray = arrayNumb(usersWithId)
// console.log(backArray)


// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//  let array1 = [1,2,3,4]
//  let array2 =  [2,3,4,5]
//   результат
//   [3,5,7,9]

// function elementsOfIndex(arr1,arr2){
//     let result = []
// for (let i = 0; i< arr1.length;i++){
//      result.push(arr1[i] + arr2[i])
// }
// return result
//     }

// let resultNumb = elementsOfIndex(array1,array2)
// console.log(resultNumb)



// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

//     function numbersBack(arr,i){
//       let numb = arr[i]
//       arr[i] = arr[i+1]
//       arr[i+1] =  numb
//       return arr
//     }
// let arr = numbersBack([5435,455,45354,321,56,34],3)
// console.log(arr)



// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]



// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function addBodyDiv(){
//     let createElement = document.createElement('div')
//     createElement.innerText = 'Hello owu'
//     document.body.appendChild(createElement)
// }
// addBodyDiv()


// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function elementWithText(text,nameTag){
// 	let createElementTag= document.createElement(nameTag)
//     createElementTag.innerText = text
//    document.body.appendChild(createElementTag)
// }
// elementWithText('hello','h1')


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

// let arrayCars = [
//       { 
//         id : 1,
//         model : 'Mercedes A-Class (W177) 220d',
//         color : 'white' ,
//         horsePower : 190 , 
//         year : 2005,
//       },
  
//       { 
//           id : 2,
//           model : 'Suzuki Jimny 1.5i (102 л.с.) 4-авт 4x4',
//           color : 'black',
//           horsePower : 102, 
//           year : 2007,
//       },
  
//       {
//           id : 3,
//           model : 'Subaru Forester 2.5i-S AT FR',
//           color : 'silver' ,
//           horsePower : 184, 
//           year : 2008,
  
//       },
// ]


// function arrayCarsWithId (arr,id){
//   let elements = document.getElementById(id)
//       let ul = document.createElement('ul')
//   for (let i=0;i< arr.length;i++){
// 	  let cars = arr[i]
//      let ol = document.createElement('ol')
// 	 ol.innerText = `${i} - ${cars.model}`
// 	 ul.appendChild(ol)
//   }
// 	  elements.appendChild(ul)
// 	  document.body.appendChild(elements)
// }

// let arrayCarsWithIdBack = arrayCarsWithId(arrayCars,'list')
// console.log(arrayCarsWithIdBack)


// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці


// function arrayCarsInfoBlock (arr,id){
//   let element = document.getElementById(id)
//   for (let i=0;i< arr.length;i++){
// 	 let car = arr[i]
//      let block = document.createElement('div')
// 	 block.innerText = `${i} - ${car.id} - ${car.model} - ${car.year} - ${car.horsePower}`
// 	 element.appendChild(block)
//   }
// 	  document.body.appendChild(element)
// }

// let arrayCarsWithInfo = arrayCarsInfoBlock(arrayCars,'info')
// console.log(arrayCarsWithInfo)


// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок


// function arrayCarsInfoBlock (arr,id){
// 	  let element = document.getElementById(id)
// 	  let block = document.createElement('div')
// 	  for (let i=0;i< arr.length;i++){
// 		 let car = arr[i]
// 		 let model = document.createElement('model')
// 		 model.innerText = `${'назва авто'} - ${car.model}`
// 		 let year = document.createElement('year')
// 	     year.innerText = `${'рік виготовлення'} - ${car.year}`
// 		 let power = document.createElement('power')
// 		 power.innerText =`${'кінська сила'} - ${car.horsePower}`
// 		 let color = document.createElement('color')
// 		 color.innerText = `${'колір'} - ${car.color}`
// 		 block.appendChild(model)
// 		 block.appendChild(year)
// 		 block.appendChild(power)
//          block.appendChild(color)
// 	  }
// 		 element.appendChild(block)
// 		  document.body.appendChild(element)
// 	}


// 	let arrayCarsWithInfo = arrayCarsInfoBlock(arrayCars,'info')
// 	console.log(arrayCarsWithInfo)



// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
            // let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
            //  {id: 2, name: 'petya', age: 30, status: true},
            //   {id: 3, name: 'kolya', age: 29, status: true}, 
            //   {id: 4, name: 'olya', age: 28, status: false},];
            // let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, 
            // {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
            //  {user_id: 2, country: 'Poland', city: 'Krakow'}, 
            //  {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:


// function usersWithCities(user,city){
// let users = [...user]
// let cities = [...city]
//     for( let user of users){ 
//       for (let city of cities){
//        if (user.id === city.user_id){
//           user.adress = city
//        }  
//    }
// }
// return users
// }
// let arrayUsersWithCity = usersWithCities(usersWithId,citiesWithId)
// console.log(arrayUsersWithCity)




// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},

			]

function rule(arr){
let info = document.createElement('div')
info.id = 'wrap'

for ( let i =0; i<arr.length;i++){
let back = arr[i]
let div = document.createElement('div')
let h1 = document.createElement('h1')
let p = document.createElement('p')
div.className = `rule back${i}`
h1.className = 'title'
h1.innerText = `${back.title}`

p.className = 'body'
p.innerText = `${back.body}`

div.appendChild(h1)
div.appendChild(p)
info.appendChild(div)
}
document.body.appendChild(info)
}
let backRules = rule(rules)
console.log(backRules)