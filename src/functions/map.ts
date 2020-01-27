import { curry } from './curry'

const map = curry((fn, xs) => xs.map(fn))

export { map }
