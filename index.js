// 1. Use array methods to turn data into result

// let data = [
//   ["The", "red", "horse"],
//   ["Plane", "over", "the", "ocean"],
//   ["Chocolate", "ice", "cream", "is", "awesome"],
//   ["this", "is", "a", "long", "sentence"],
// ];

// function groupeWords(array) {
//   let res = [];
//   array.forEach((element) => {
//     res.push(element.join(" "));
//   });
//   console.log(res);
// }

// groupeWords(data);

// Result
// ['The red horse',
// 'Plane over the ocean',
// 'Chocolate ice cream is awesome',
// 'this is a long sentence'];

// 2. Create a constructor function to produce calculator instances (+,-,*,/ operations).
// function Calculator() {
//   this.calc = function (num1, num2, oper) {
//     switch (oper) {
//       case "-":
//         return num1 - num2;
//       case "+":
//         return num1 + num2;
//       case "/":
//         return num1 / num2;
//       case "*":
//         return num1 * num2;
//       default:
//         return "ry agayn with another operator";
//     }
//   };
//   return this.calc;
// }

// let calc = new Calculator();
// console.log(calc(1, 2, "-"));

// 3. Remove duplicates in an array.

// let dupes = [1, 2, 3, "a", "a", "f", 3, 4, 2, "d", "d"];

// function removeDups(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!result.includes(array[i])) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }
// console.log(removeDups(dupes));

// 4. Groupe by property

// let arr = [
//   { name: "Alice", job: "Data Analyst", country: "AU" },
//   { name: "Bob", job: "Pilot", country: "US" },
//   { name: "Lewis", job: "Pilot", country: "US" },
//   { name: "Karen", job: "Software Eng", country: "CA" },
//   { name: "Jona", job: "Painter", country: "CA" },
//   { name: "Jeremy", job: "Artist", country: "SP" },
// ];

// function groupe(array, prop) {
//   const obj = {};
//   array.forEach((item) => {
//     const propertyName = item[prop];
//     if (!obj[propertyName]) {
//       obj[propertyName] = [item];
//     } else {
//       obj[propertyName].push[item];
//     }
//   });
//   return obj;
// }

// console.log(groupe(arr));

// Exercise 5

// function reverse(num) {
//   let arr2 = [];
//   let arr1 = num.split(".");
//   for (let i = arr1.length - 1; i >= 0; i--) {
//     arr2.push(arr1[i]);
//   }
//   return arr2.join(".");
// }
// console.log(reverse("i.like.this.program.very.much"));
