type DataType = {
  attr: '累計'
  value: number
  children: [
    {
      attr: '入院中'
      value: number
    },
    {
      attr: '死亡'
      value: number
    },
    {
      attr: '退院'
      value: number
    }
  ]
}

type TestedCasesType = {
  累計: number
  入院中: number
  死亡: number
  退院: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  const formattedData: TestedCasesType = {
    累計: data.value,
    入院中: data.children[0].value,
    死亡: data.children[1].value,
    退院: data.children[2].value
  }
  return formattedData
}
