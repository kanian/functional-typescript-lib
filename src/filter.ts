import { curry } from "./curry";
import { not } from "./not";

function filter(predicate:(v,k,xs:[any]) => boolean, xs: [any]) {
  const filtered = []
    for (const [key, value] of xs.entries()) {
      if(predicate(value,key,xs)){
        filtered.push(value)
      }
    }
    return filtered
}

const filterOut = curry((predicate:(v,k,xs:[any]) => boolean,xs) => filter(not(predicate),xs))
const filterIn = curry(filter)

export {filterIn,filterOut}
