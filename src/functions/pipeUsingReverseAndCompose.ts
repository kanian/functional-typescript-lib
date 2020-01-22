import { composeUsingCompose2 } from './composeUsingCompose2';
import { reverseArgs } from './reverseArgs';

const pipeUsingReverseAndCompose = (...fns) =>
    reverseArgs(composeUsingCompose2)(...fns)

export { pipeUsingReverseAndCompose }
