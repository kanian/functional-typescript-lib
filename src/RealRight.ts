import { Either } from './RealEither'

class Right<T,U> {
    public static of<T,U>(x: T = null) : Right<T,U> {
        return new Right<T,U>(x)
    }
    constructor(private $value: T) {}

    public unwrapValue() : T {
        return this.$value
    }

    public map<B>(fn: (x: T) => B) : Either<B|T,U>{
        return new Either<B,U>(fn(this.$value))
    }

    public toString() {
        return `Right(${this.$value})`
    }
}

export { Right }
