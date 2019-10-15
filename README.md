# Gemini

> Light weight JavaScript library for star sign

## How to use

The sample is here.

```typescript
import gemini from 'gemini'
import dayjs from 'dayjs'

const starsign = gemini(dayjs()).starSign();
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
