import { Either } from '../src/Either'

class Left {
    public static of(x = null) {
        return new Left(x)
    }
    constructor(private $value = '') {}

    public unwrapValue() {
        return this.$value
    }

    public map(fn) {
        return this
    }

    public toString() {
        return `Left(${this.$value})`
    }
}

export { Left }
