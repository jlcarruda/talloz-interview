const challengeTwo = (input) => {
  if (input.length === 0) return 0
 
  const sortedInput = input.sort()
  const min = input[0]

  let counter = min * 2;
  let result = -1  
  
  while(result < 0) {
    
  }
  // let counter = 1;
  // let result = -1;
  // const knownValues = []

  // const coinMap = {} // Object that has the coin value as key and the number of coins as value. Ex: 2 coins of value 3 = { 1: 4, 2: 2 }


  // input.forEach(coin => {
  //   if (!coinMap[coin]) {
  //     coinMap[coin] = 1;
  //   } else {
  //     coinMap[coin] += 1;
  //   }
  // });

  // for (const coin in coinMap) {
  //   const appearances = coinMap[coin];

  //   if (appearances === 1) {
  //     knownValues.push(coin)
  //     continue
  //   }

  //   for (let i = 1; index <= appearances; i++) {
  //     const value = coin * i

  //     if(!knownValues.includes(value)) {
  //       knownValues.push(value)
  //     }
  //   }
  // }

  // for() {

  // }
}
