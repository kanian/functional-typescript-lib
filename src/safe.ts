
import { Maybe } from "./RealMaybe";

const safe = (fn: Function) => (x) => Maybe.of(fn(x))

export{safe}