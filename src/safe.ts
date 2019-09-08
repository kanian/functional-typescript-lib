import { curry } from "./curry";

import { Maybe } from "./RealMaybe";

var safe = (fn: Function) => (x) => Maybe.of(fn(x))

export{safe}