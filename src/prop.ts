import { curry } from '../src/curry'
function _prop(name, obj) {
    return obj[name]
}

const prop = curry(_prop)
export { prop }
