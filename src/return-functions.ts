(() => {
  const calTotal = (prices: number[]) => {
    let total = 0;
    prices.forEach((item) => {
      total += item
    })

    return total
  }

  const res = calTotal([1, 2, 3, 4, 5])
  console.log(res)

  // las funciones que no retornan nada, su type es void
  const printTotal = (prices: number[]): void => {
    const res = calTotal(prices)
    console.log(`EL total es ${res} USD`)
  }

  printTotal([1, 2, 3, 4, 5, 7, 8])

  const otherCal = (prices: number[]): number | string => {
    const res = calTotal(prices)
    return `El total es ${res} USD`
  }

  console.log(otherCal([1, 2, 3, 4, 5, 7, 8]))

})();
