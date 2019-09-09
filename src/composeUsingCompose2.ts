import { compose2 } from '../src/compose2'
const composeUsingCompose2 = (...fns) => value => {
    const applyCompose2 = fnList => {
        const [first, ...rest] = fnList
        if (fnList.length > 0) {
            return compose2(
                first,
                rest.length > 1 ? applyCompose2(rest) : rest[0]
            )
        }
        return
    }
    return applyCompose2(fns)(value)
}

export { composeUsingCompose2 }
