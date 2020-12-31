function getMoneyChange(money) {
  //your code here
  let output = ""
  let arr = Object.keys(moneyStocks).reverse()
  let counter = 0

  let stock = 0
  for (let key in moneyStocks) {
    stock += (key * moneyStocks[key])
  }

  for (let i = 0; i < arr.length; i++) {
    let denom = Number(arr[i])
    if (money > stock) {
      console.log("Maaf uang kembalian tidak cukup")
      break;
    } else if (money % 500 !== 0) {
      console.log("Maaf uang kembalian tidak cukup")
      break;
    }

    if (money >= denom && moneyStocks[denom] >= 0) {
      let avail = true
      let counter = 0
      while (avail) {
        if (money < denom || moneyStocks[denom] === 0 && counter > 0) {
          console.log(`${denom} ${counter} lembar`)
          avail = false
        } else if (money >= denom && moneyStocks[denom] > 0) {
          money -= denom
          counter++
          stock -= denom
          moneyStocks[denom]--
        } else if (moneyStocks[denom] === 0 && counter === 0) {
          avail = false
        }
      }
    }
  }
}

const moneyStocks = {
  100000: 1,
  50000: 2,
  20000: 4,
  10000: 5,
  5000: 5,
  1000: 10,
  500: 5
}

getMoneyChange(75000)
/*
  50000 1 lembar
  20000 1 lembar
  5000 1 lembar
*/

getMoneyChange(190000)
/*
  100000 1 lembar
  50000 1 lembar
  20000 2 lembar
*/

getMoneyChange(190000)
/*
  Maaf uang kembalian tidak cukup
*/

getMoneyChange(100000)
/*
  20000 1 lembar
  10000 5 lembar
  5000 4 lembar
  1000 10 lembar
*/

getMoneyChange(400)
/*
  Maaf uang kembalian tidak cukup
*/

console.log(moneyStocks)
  /*
{ '500': 5,
'1000': 0,
'5000': 0,
'10000': 0,
'20000': 0,
'50000': 0,
'100000': 0 }
*/
