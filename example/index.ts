import hyacinth from '../src/hyacinth'
import dayjs from 'dayjs'

const starsign = hyacinth(dayjs("1995-06-15")).starSign();
console.log(starsign.name);