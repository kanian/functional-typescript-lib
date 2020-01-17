import { Either } from './RealEither'
import { Container } from './Container'

//class Right<T> extends Either<T>  {
class Right<T> extends Container<T> {
    constructor($value: T) {
        super($value)
    }

    public static of<T>(x: T): Right<T> {
        return new Right<T>(x)
    }
    // public isRight<T>(): boolean {
    //     return true
    // }

    public map<B>(fn: (x: T) => B): Right<B> {
        return Either.of<B>(fn(this.$value))
    }

    public toString() {
        return `Right(${this.$value})`
    }
}

export { Right }
