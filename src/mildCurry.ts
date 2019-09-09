const mildCurry = (fn, arity = fn.length, nextCurried = null) =>
    (nextCurried = prevArgs => (...nextArg) => {
        const args = [...prevArgs, ...nextArg]
        if (args.length >= arity) {
            return fn(...args)
        } else {
            return nextCurried(args)
        }
    })([])

export { mildCurry }
