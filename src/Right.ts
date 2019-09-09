import { Either } from '../src/Either'

class Right {
    public static of(x = null) {
        return new Right(x)
    }
    constructor(private $value) {}

    public unwrapValue() {
        return this.$value
    }

    public map(fn) {
        return Either.of(fn(this.$value))
    }

    public toString() {
        return `Right(${this.$value})`
    }
}

export { Right }
