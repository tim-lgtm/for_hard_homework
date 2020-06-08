'use strict';
// общие данные данные для всех заданий 
let question = prompt('Введи язык')
let lang = question;

// a
if( lang == 'ru') {
  console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang == 'en') {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}
//b
switch(lang) {
  case 'ru':
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
    break;
   case 'en':
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}
//c не выполнил чуть похже скину...ещё подумаю как это можно сделать 
let result = [
  ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
]
console.log(result[1]);








//второе задание  
let ask = prompt('Ваше имя')
let namePerson = ask;
// console.log(namePerson);
let result = ( namePerson == 'Артём') ? 'директор' :
 (namePerson == 'Максим') ? 'преподаватель' : 'студент' ;
console.log(result);