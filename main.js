function Tim(a) {
  if (typeof a == 'string' && a.length > 30 ){
    return a.trim().substring(0,30) + '...';
      
  }else{ 
    return 'Введите что то другое';
    } 
}

let result = Tim('   Я понимаю, что этот код мягко говоря не очень, но он работает и я не понимаю почему он это делает , поэтому хотел бы сразу  спросить, как можно ещё решить эту задачу   ');
console.log(result );



