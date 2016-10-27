// var phonebookDict = {
//   Alice: '703-493-1834',
//   Bob: '857-384-1234',
//   Elizabeth: '484-584-2923'
// };
//
// console.log(phonebookDict.Elizabeth);
// phonebookDict.Kareem = '983-489-1234';
// console.log(phonebookDict);
// delete phonebookDict.Alice;
// phonebookDict.Bob = '968-345-2345'
// console.log(phonebookDict);
//
// for (var entry in phonebookDict){
//   var number = phonebookDict[entry];
//   console.log(entry + " : " + number);
// }
//
// var histogram = function(string){
//   str_arr = string.split('');
//   letters = {};
//   letter_arr = [];
//   top_letters = [];
//   console.log(str_arr[0]);
//   for (i=0; i< str_arr.length; i++){
//     if ([str_arr[i]] in letters){
//       letters[str_arr[i]] += 1;
//     }
//     else{
//       letters[str_arr[i]] = 1;
//     }
//   }
//   for (var letter in letters){
//     letter_arr.push(letters[letter]);
//   }
//   letter_arr.sort(function(a,b){
//     return b-a;
//   });
//   for(var key in letters){
//     if (letters[key] === letter_arr[0] || letters[key] === letter_arr[1]){
//       top_letters.push(key);
//     }
//   }
//
//   console.log('Top two letters: ' + top_letters[0] + "," + top_letters[1]);
//   console.log(letters);
// };
//
//
// histogram('bananas');
// var pos = function(arr){
//   var even_arr = arr.filter(function(entry){
//     return entry > 0;
//   });
//   return even_arr;
// };
//
// console.log(pos([1,-2,5,-6,7,10]));
//
// var even = function(arr){
//   var pos_arr = arr.filter(function(entry){
//     return entry % 2 === 0;
//   });
//   return pos_arr;
// };
//
// console.log(even([1,2,5,6,7,10]));
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
//
// var coolerThan70 = function(arr){
//   var cool_cites = cities.filter(function(entry){
//     if (entry.temperature < 70){
//       return entry.name;
//     }
//   });
//   return cool_cites;
// };
//
// console.log(coolerThan70(cities));
//
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
//
// var cityNames = function(arr){
//   var cities_names = arr.map(function(entry){
//       return entry.name;
//
//   });
//   return cities_names;
// };
//
// console.log(cityNames(cities));
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
// var goodJob = function(names){
//   names.forEach(function(entry){
//     console.log('Good job ' + entry + '!');
//   });
// };
// goodJob(people);

// var alphabeticalSort = function(list){
//   var sorted = list.sort();
//   return sorted;
// };
// console.log(alphabeticalSort(people));

// var lengthSort = function(list){
//   var sorted = list.sort(function(a,b){
//     return a.length - b.length;
//   });
//   return sorted;
// };
// console.log(lengthSort(people));

// var arr =[
//   [1, 3, 4],
//   [2, 4, 6, 8],
//   [3, 6]
// ];
//
// var sumSort = function(list){
//   var combine = function(a,b){
//       return a + b;
//   };
//   var sum = list.forEach(function(mini_arr){
//     return mini_arr;
//   }).reduce(combine);
//
//   // var sorted = sum.sort(function(a,b){
//   //   return a - b;
//   // });
//   // return sorted;
//   console.log (sum);
// };
//
//
// console.log(sumSort(arr));
//
// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }

// function callNTimes(n,fun) {
//   count = n;
//   while (count > 0){
//     fun();
//     count -= 1;
//   }
// }
//
// function helloWorld(){
//   console.log('Hello World!');
// }
// callNTimes(5,helloWorld);

// var sum = function(arr){
//   var summed = arr.reduce(function(a,b){
//     return a + b;
//   });
//   return summed;
// };
//
// console.log(sum([1, 2, 3]));

// var acronym = function(arr){
//   var acrod = arr.reduce(function(a,b){
//     return a + b[0];
//   },'');
//   return acrod.toUpperCase();
// };
// console.log(acronym(['very', 'important', 'person']));

// var forEach = function(arr, iterator){
//   for (i = 0; i < arr.length; i++){
//     iterator(arr[i]);
//   }
// };
//
// var arr = [
//   { name: 'Bob' },
//   { name:'Alice' },
//   { name:'Joe' }];
// forEach(arr, function(person) {
//   console.log('Hello, ' + person.name + '!');
// });

var map = function(arr, iterator){
  var results = [];
  arr.forEach(function(n){
    results.push(iterator(n));
  });
  return results;
};

var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }];
console.log(map(arr, function(person) {
  return ('Hello, ' + person.name + '!');
}));
