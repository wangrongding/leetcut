// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    // 跳过中间元素，不把作为基准的元素放入left和right，直接在后面拼接到结果中
    if (i === mid) continue
    // 小于基准的放入left，大于等于基准的放入right
    if (arr[i] < arr[mid]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), arr[mid], ...quickSort(right)]
}

console.log(quickSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 2, 46, 4, 19, 50, 48]))
