import { curry } from './curry';

function _prop(name, obj) {
    return obj[name]
}

const prop = curry(_prop)
export { prop }
