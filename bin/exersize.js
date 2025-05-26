const wallet = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200'];
const getTotalAmount = (arr, currency) => {
    let sum = 0;
    for (const item of arr){ 
      
      if (item.slice(0, 4) === currency) {
        print(item.slice(0, 4));
        sum = sum + Number(item.slice(4));
      }
    }
    return sum;
  };
  getTotalAmount(wallet, 'eur');