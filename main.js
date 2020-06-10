// function Tim(a) {
//   if (typeof a == 'string' &&  a.length > 30 ){
//     return a.trim().substring(0,30) + '...';
      
//   }else{ 
//     return 'Введите что то другое';
//     } 
// }

// let result = Tim(11111);
// console.log(result );
let arr = ['234','453', '649', '793' , '536', '999', '487'];
let newArray = [];

for( i = 0; i <= arr.length; i++){
  let number = `${arr[i]}`.split('')[0];
  if(number == 2 || number == 4){
    newArray.push(arr[i])
  }
}
console.log(newArray);

for(i = 1 ; i <= 100; i++){
  let delit = i / 1;
  let delit2 = i / i
  console.log('Число - ' + i + '; Первый делитель - ' + delit + '; Второй делитель - ' + delit2);
}
