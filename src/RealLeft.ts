import { Either } from './RealEither'

class Left<T> extends Either<T> {
    public static of<T>(x: T = null) {
        return new Left<T>(x)
    }
    // public isRight<T>() : boolean {
    //     return false
    // }
    constructor($value: T) {
        super($value)
    }

    public map<T>(fn: any): Left<T> {
        return Left.of(this.$value as any)
    }

    public toString() {
        return `Left(${this.$value})`
    }
}

export { Left }
