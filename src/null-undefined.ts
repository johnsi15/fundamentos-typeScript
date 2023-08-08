(() => {
  let myNull: null = null
  let myUndefined: undefined = undefined
  console.log(myNull, myUndefined)

  let myNumber: number | null = null

  myNumber = 15
  console.log(myNumber)

  let myString: string | undefined = undefined
  myString = 'Hello'
  console.log(myString)

  function greeting(name: string | null) {
    let hello = 'Hello '
    if (name) {
      hello += name.toLowerCase()
    } else {
      hello += 'nobody'
    }
    console.log(hello)
  }

  function greetingV2(name: string | null) {
    let hello = 'Hello '
    hello += name?.toLowerCase() ?? 'nobody'
    console.log(hello)
  }

  greeting('Andrey')
  greetingV2('Ammi')
  greetingV2(null)
})();
