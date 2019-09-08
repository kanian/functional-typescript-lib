import { curry } from "./curry";
import { not } from "./not";

function filter(predicate:(v,k,xs:[any]) => boolean, xs: [any]) {
  let filtered = []
    for (let [key, value] of xs.entries()) {
      if(predicate(value,key,xs)){
        filtered.push(value)
      }
    }
    return filtered
}

var filterOut = curry((predicate:(v,k,xs:[any]) => boolean,xs) => filter(not(predicate),xs))
var filterIn = curry(filter)

export {filterIn,filterOut}
