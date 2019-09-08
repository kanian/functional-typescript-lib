import { Either } from '../src/Either'

class Right {
    constructor(private $value) {}

    public static of(x = null) {
        return new Right(x)
    }

    unwrapValue() {
        return this.$value
    }

    map(fn) {
        return Either.of(fn(this.$value))
    }

    toString() {
        return `Right(${this.$value})`
    }
}

export { Right }
