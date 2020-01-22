function pipe(...fns) {
    return function piped(result) {
        const list = [...fns]
        while (list.length > 0) {
            result = list.shift()(result)
        }
        return result
    }
}

export { pipe }
