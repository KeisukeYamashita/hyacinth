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

import dayjs, {Dayjs} from 'dayjs';
import starSign, {StarSign, StarSigns} from './starSign';

class Hyacinth {
    private date: Dayjs

    constructor(d?: any) {
        this.date = this.getDatetime(d)
    }

    private getDatetime(d?: any): Dayjs{
        return dayjs(d)
    }

    private isDayjs(d:Object): boolean{
        return d instanceof Dayjs
    }
    
    public starSign(): StarSign{
        if (!this.date) {
            throw new Error("no date")
        }
        return starSign.get(this.date)
    }

    public list():StarSigns{
        return starSign.all()
    }
}

function hyacinth(d?: any):Hyacinth{
    return new Hyacinth(d)
}

export default Hyacinth