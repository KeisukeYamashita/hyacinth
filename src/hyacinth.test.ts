import hyacinth from './hyacinth'
import dayjs, {Dayjs} from 'dayjs'

type Case = [Dayjs, number]

test('starSign', () => {
    const testCases: Case[] = [
        [dayjs("2019-03-21"), 1],
        [dayjs("2019-04-20"), 2],
        [dayjs("2019-12-31"), 10],
        [dayjs("2020-01-30"), 11],
        [dayjs("2020-02-25"), 12]
    ]

    for (const [date, want] of testCases) {
        const {id} = hyacinth(date).starSign()
        expect(id).toBe(want) 
    }
});
