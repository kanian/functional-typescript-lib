function partialRight(fn, ...presetBackArgs) {
    return (...laterFrontArgs) => fn(...laterFrontArgs, ...presetBackArgs)
}

export { partialRight }
