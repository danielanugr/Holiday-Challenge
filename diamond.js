function diamond(num) {
    for (let i = 1; i <= num; i++) {
        let temp = ""
        for (let j = 0; j < num - i; j++) {
            temp += ' '
        }
        for (let k = 0; k < i * 2 - 1; k++) {
            if (k === 0 || k === i * 2 - 2) {
                temp += "$"
            } else {
                temp += " "
            }
        }
        console.log(temp)
    }
    for (let i = 1; i < num; i++) {
        let temp = ""
        for (let j = num - i; j < num; j++) {
            temp += " "
        }

        for (let k = 0; k < (num - i) * 2 - 1; k++) {
            if (k === 0 || k === (num - i) * 2 - 2) {
                temp += "$"
            } else {
                temp += " "
            }
        }
        console.log(temp)
    }
}

diamond(5)
/*
  $
 $ $
$   $
 $ $
  $
  */
