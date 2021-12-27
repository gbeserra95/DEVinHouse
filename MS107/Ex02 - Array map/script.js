const arr = [3, 5, 7, 9, 11, 13]

const newArr = arr.map((number, index) => {
    if (index === 0){
        return number
    }

    return number*arr[index-1]
})

console.log(arr)
console.log(newArr)