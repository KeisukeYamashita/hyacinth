import { Dayjs } from 'dayjs';
export interface StarSigns {
    signs: StarSign[];
}
export interface StarSign {
    id: number;
    name: string;
    borderValue: number;
}
declare function get(d: Dayjs): StarSign;
declare function all(): StarSigns;
declare const _default: {
    get: typeof get;
    all: typeof all;
};
export default _default;
