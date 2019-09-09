function not(fn) {
    return (...args) => {
        return !fn(...args)
    }
}

export { not }
