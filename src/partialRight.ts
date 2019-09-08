function partialRight(fn, ...presetBackArgs) {
    return function(...laterFrontArgs) {
        return fn(...laterFrontArgs, ...presetBackArgs)
    }
}

export { partialRight }
