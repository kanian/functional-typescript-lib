import { Either } from '../src/Either'

class Left {
    constructor(private $value = '') {}

    public static of(x = null) {
        let left = true
        return new Left(x)
    }

    unwrapValue() {
        return this.$value
    }

    map(fn) {
        return this
    }

    toString() {
        return `Left(${this.$value})`
    }
}

export { Left }
