# Hyacinth

> Light weight JavaScript library for star sign

## How to use

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
* Native `Date` Object

## Author

* [KeisukeYamashita](https://github.com/KeisukeYamashita)
