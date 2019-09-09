const curryProps = (fn, arity = 1, nextCurried = null) =>
    (nextCurried = prevArgsObj => (nextArgObj = {}) => {
        const [key] = Object.keys(nextArgObj)
        const allArgsObj = Object.assign({}, prevArgsObj, {
            [key]: nextArgObj[key]
        })
        if (Object.keys(allArgsObj).length >= arity) {
            return fn(allArgsObj)
        } else {
            return nextCurried(allArgsObj)
        }
    })({})

export { curryProps }
