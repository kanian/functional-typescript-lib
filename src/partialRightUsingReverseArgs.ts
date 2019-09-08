import {partial} from "../src/partial"
import { reverseArgs } from "./reverseArgs";


function partialRightUsingReverseArgs(fn, ...presetArgs){
    return function reversedPartial(...laterArgs){
        return reverseArgs(partial(reverseArgs(fn),...(presetArgs.reverse())))(...laterArgs)
    }
}

export {partialRightUsingReverseArgs}
