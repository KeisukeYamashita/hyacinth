import hyacinth from './src/hyacinth'
import dayjs from 'dayjs'

const starsign = hyacinth(dayjs('2019-1-1')).starSign();
console.log(starsign);