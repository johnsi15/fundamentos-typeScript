import _ from 'lodash'

type Username = {
  username: string
  role: string
}

// type Username = Record<string, string>

const data: Username[] = [
  {
    username: 'XXXX',
    role: 'admin'
  },
  {
    username: 'Andrey',
    role: 'seller'
  },
  {
    username: 'Ammi',
    role: 'seller'
  },
  {
    username: 'John',
    role: 'customer'
  }
]

const rta = _.groupBy(data, (item) => item.role)
console.log(rta)


// type Result = Record<string, Username[]>

const result: { [key: string]: Username[] } = {}
// const result: Result = {}
data.forEach((item) => {
  result[item.role] = [...(result[item.role] || []), item]
})

console.log(result)
