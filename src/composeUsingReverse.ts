function composeUsingReverse(...fns) {
    // pull off the last two arguments
    const [fn1, fn2, ...rest] = fns.reverse()
    const composedFn = function composed(...args) {
        return fn2(fn1(...args))
    }
    if (rest.length == 0) {
        return composedFn
    }
    return composeUsingReverse(...rest.reverse(), composedFn)
}

export { composeUsingReverse }
