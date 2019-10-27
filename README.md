# Hyacinth

> Light weight JavaScript library for star sign

<br />
    <p align="center"><a href="#" target="_blank" rel="noopener noreferrer"><img width="450"src="https://cdn11.bigcommerce.com/s-rmoyg9wwxo/images/stencil/1280x1280/products/982/3011/princess-hyacinth-museum-edition-lithograph-alphonse-mucha__30862.1496030252.jpg?c=2&imbypass=on" alt="WIAS"></a></p>
    <p align="center"><b>Princess Hyacinth, Alfons Maria Mucha</b></p>
<br />

## How to use

### Install

Install by these commands.

```
npm install @keisukeyamashita/hyacinth
```

or

```
yarn add @keisukeyamashita/hyacinth
```


### In your code

The sample is here.

```typescript
import hyacinth from '@keisukeyamashita/hyacinth'
import dayjs from 'dayjs'

const starsign = hyacinth(dayjs()).starSign();
console.log(starsign.name);
```

```terminal
$ ts-node index.ts
=> "魚座"
```

### Response

The response will be in this format.

```typescript
type SignStar interface {
    id: number
    name: string
    borderValue: number
}
```

## Support

* `dayjs` Object
* Native `Date` Object(not yet:<)

## Author

* [KeisukeYamashita](https://github.com/KeisukeYamashita)
