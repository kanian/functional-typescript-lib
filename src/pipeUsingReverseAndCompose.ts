import {reverseArgs} from "../src/reverseArgs"
import {composeUsingCompose2} from "./composeUsingCompose2"

const  pipeUsingReverseAndCompose = (...fns) => reverseArgs(composeUsingCompose2)(...fns)


export{pipeUsingReverseAndCompose}