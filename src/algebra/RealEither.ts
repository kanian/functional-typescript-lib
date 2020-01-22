import { APointable } from './interfaces/APointable'

/** RealEither must inherit from APointable and be abstract */
abstract class Either<T> extends APointable {
    public constructor($value: T) {
        super($value)
    }
    public static of<T>(x: T): Either<T> {
        return Either.of(x)
    }

    public get isRight() {
        return false
    }
    public get isLeft() {
        return false
    }

    public toString() {
        return `Either(${this.$value})`
    }
}

export { Either }
