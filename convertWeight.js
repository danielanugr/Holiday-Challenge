function convertWeight(summation, unitWeight) {
    //your code here
    let output = 0
    let arr = summation.split("+")
    let arr2 = []
    let weight = ["ton", "kwintal", "-", "kg", "hg", "dag", "g", "dg", "cg", "mg"]
    let obj = {}
    let target = weight.indexOf(unitWeight)

    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i].split(" "))
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!obj[arr2[i][1]]) {
            obj[arr2[i][1]] = Number(arr2[i][0])
        }
    }

    for (let key in obj) {
        let input = weight.indexOf(key)
        let temp = obj[key]
        if (key === 'ons') {
            input = weight.indexOf('hg')
        }
        if (input < target) {
            for (let i = input; i < target; i++) {
                temp *= 10
            }
        } else if (input > target) {
            for (let i = target; i < input; i++) {
                temp /= 10
            }
        }
        output += temp
    }
    return `${output} ${unitWeight}`
}

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'kg')) //1201 kg

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'g')) //1201000 g

console.log(convertWeight('2 ton +500 kwintal+3 kg+350 ons', 'kg'))  //52038 kg
