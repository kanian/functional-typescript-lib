function pipe(...fns) {
    return function piped(result) {
        let list = [...fns]
        while (list.length > 0) {
            result = list.shift()(result)
        }
        return result
    }
}

export { pipe }
