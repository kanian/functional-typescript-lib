function composeUsingReverse(...fns) {
    // pull off the last two arguments
    var [fn1, fn2, ...rest] = fns.reverse()
    var composedFn = function composed(...args) {
        return fn2(fn1(...args))
    }
    if (rest.length == 0) return composedFn
    return composeUsingReverse(
        ...rest.reverse(),
        composedFn
    )
}

export {composeUsingReverse}
