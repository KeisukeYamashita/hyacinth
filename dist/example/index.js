"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hyacinth_1 = __importDefault(require("../src/hyacinth"));
const dayjs_1 = __importDefault(require("dayjs"));
const starsign = hyacinth_1.default(dayjs_1.default("1995-06-15")).starSign();
console.log(starsign.name);
