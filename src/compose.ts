const compose = (...fns) => result => {
    let fnList = [...fns]
    while (fnList.length > 0) {
        // take the last function off the end of the list
        // and execute it
        result = fnList.pop()(result)
    }
    return result
}

export { compose }
