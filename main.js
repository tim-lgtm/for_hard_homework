// function Tim(a) {
//   if (typeof a == 'string' &&  a.length > 30 ){
//     return a.trim().substring(0,30) + '...';
      
//   }else{ 
//     return 'Введите что то другое';
//     } 
// }

// let result = Tim(11111);
// console.log(result );

function Tim(a) {
  if (typeof a == 'string'){
    let x = a.trim();
    if(a.length > 30 ){
      return a.substring(0, 30) + '...';
    }else {
    return x ;
    }
  }else{
    return 'Подумай ещё ';
  }
}
let result = Tim(223);
console.log(result );


  