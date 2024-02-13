const arr0 = ['1', 2, 'A']
const arr1 = [1, 2, 3]

type Arr = (string | number)[]

const getCommonItems = (list: Arr[]) => {
  let dict = new Map()

  const fillDict = (arr: Arr): void => {
    arr.forEach((item) => {
      dict[item] = (dict[item] || 0) + 1
    })
  }

  list.forEach((arr) => {
    fillDict(arr)
  })

  return Object.entries(dict)
    .filter(([, value]) => value === list.length)
    .map(([key]) => key)
}

console.log(getCommonItems([arr0, arr1]))
