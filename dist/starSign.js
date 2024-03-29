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
Object.defineProperty(exports, "__esModule", { value: true });
// The orders are following this link
//  JP: https://www.study-style.com/seiza/12seiza.html
//  EN: https://www.allure.com/story/zodiac-sign-personality-traits-dates
const starSigns = {
    signs: [
        { id: 10, name: 'やぎ座', borderValue: 119 },
        { id: 11, name: 'みずがめ座', borderValue: 218 },
        { id: 12, name: 'うお座', borderValue: 320 },
        { id: 1, name: 'おひつじ座', borderValue: 419 },
        { id: 2, name: 'おうし座', borderValue: 520 },
        { id: 3, name: 'ふたご座', borderValue: 621 },
        { id: 4, name: 'かに座', borderValue: 722 },
        { id: 5, name: 'しし座', borderValue: 822 },
        { id: 6, name: 'おとめ座', borderValue: 922 },
        { id: 7, name: 'てんびん座', borderValue: 1023 },
        { id: 8, name: 'さそり座', borderValue: 1122 },
        { id: 9, name: 'いて座', borderValue: 1221 }
    ]
};
function get(d) {
    let month = d.month() + 1;
    let day = d.date();
    let targetValue = month * 100 + day;
    let idx;
    let result = { id: 10, name: 'やぎ座', borderValue: 119 };
    for (idx = 0; idx < starSigns.signs.length; idx++) {
        const sign = starSigns.signs[idx];
        if (targetValue <= sign.borderValue) {
            result = sign;
            break;
        }
    }
    return result;
}
function all() {
    return starSigns;
}
exports.default = {
    get,
    all
};
