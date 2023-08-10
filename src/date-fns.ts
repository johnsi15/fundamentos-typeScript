import { subDays, format } from 'date-fns'

const date = new Date(Date.now())
const result = subDays(date, 7)

console.log(format(result, 'yyyy-MM-dd'))

