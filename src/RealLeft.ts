import { Either } from './RealEither'

class Left<T, U> {
    public static of<T, U>(x: U = null) {
        return new Left<T, U>(x)
    }
    constructor(private $value: U) {}

    public unwrapValue(): U {
        return this.$value
    }

    public map<B>(fn: (x: T) => B): Either<B | T, U> {
        return new Either<T, U>(this.$value, true)
    }

    public toString() {
        return `Left(${this.$value})`
    }
}

export { Left }
