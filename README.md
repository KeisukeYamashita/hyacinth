# Hyacinth

[![CI](https://github.com/KeisukeYamashita/hyacinth/workflows/Test/badge.svg)](https://github.com/KeisukeYamashita/hyacinth/actions)
[![npm version](https://badge.fury.io/js/%40keisukeyamashita%2Fhyacinth.svg)](https://badge.fury.io/js/%40keisukeyamashita%2Fhyacinth)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

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
