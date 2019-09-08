import {curry} from "../src/curry"

const map =  curry((fn,xs) => xs.map(fn))

export {map}