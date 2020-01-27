import { Either } from '..'
import { IMappable } from './interfaces/IMappable'
import { IChainable } from './interfaces/IChainable'
import { IApplicable } from './interfaces/IApplicable'

class Left<T> extends Either<T>
    implements IMappable<T>, IChainable<T>, IApplicable {
    constructor($value: T) {
        super($value)
    }
    public static of<T>(x: T = null) {
        return new Left<T>(x)
    }

    public get isLeft() {
        return true
    }
    chain<B = T>(fn: (x: T) => B): IChainable<B> {
        return this.map(fn).join()
    }
    join<T>() {
        return Left.of<T>(this.value)
    }
    ap(a: IMappable<any>): IMappable<any> {
        return a.map(this.value)
    }

    public map<T>(fn: any): Left<T> {
        return Left.of(fn(this.value))
    }

    public toString() {
        return `Left(${this.$value})`
    }
}

export { Left }
