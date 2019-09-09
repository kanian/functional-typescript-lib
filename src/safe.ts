import { Maybe } from './RealMaybe'

const safe = (fn: (x: any) => any) => x => Maybe.of(fn(x))

export { safe }
