"use strict";
// Copyright 2019 The Hyacinth Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importStar(require("dayjs"));
const starSign_1 = __importDefault(require("./starSign"));
class Hyacinth {
    constructor(d) {
        this.date = this.getDatetime(d);
    }
    getDatetime(d) {
        return dayjs_1.default(d);
    }
    isDayjs(d) {
        return d instanceof dayjs_1.Dayjs;
    }
    starSign() {
        if (!this.date) {
            throw new Error("no date");
        }
        return starSign_1.default.get(this.date);
    }
    list() {
        return starSign_1.default.all();
    }
}
function hyacinth(d) {
    return new Hyacinth(d);
}
exports.default = Hyacinth;
