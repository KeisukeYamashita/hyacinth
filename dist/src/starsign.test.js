"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const starsign_1 = __importDefault(require("./starsign"));
const dayjs_1 = __importDefault(require("dayjs"));
test('starSigns.get test id', () => {
    const testCases = [
        [dayjs_1.default("2019-03-21"), 1],
        [dayjs_1.default("2019-04-20"), 2],
        [dayjs_1.default("2019-12-31"), 10],
        [dayjs_1.default("2020-01-30"), 11],
        [dayjs_1.default("2020-02-25"), 12]
    ];
    for (const [date, want] of testCases) {
        const { id } = starsign_1.default.get(date);
        expect(id).toBe(want);
    }
});
