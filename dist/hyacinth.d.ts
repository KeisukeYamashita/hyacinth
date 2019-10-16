import { StarSign, StarSigns } from './starSign';
declare class Hyacinth {
    private date;
    constructor(d?: any);
    private getDatetime;
    private isDayjs;
    starSign(): StarSign;
    list(): StarSigns;
}
declare function hyacinth(d?: any): Hyacinth;
export default hyacinth;
