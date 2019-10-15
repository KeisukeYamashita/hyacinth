import gemini from './gemini'
import dayjs from 'dayjs'

const starsign = gemini(dayjs()).starSign()
console.log(starsign.name)