function composeWithReduceLazy(...fns) {
    return fns.reverse().reduce(function reducer(fn1, fn2) {
        return function composed(...args) {
            return fn2(fn1(...args))
        }
    })
}
export { composeWithReduceLazy }
