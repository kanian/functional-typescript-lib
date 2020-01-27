import { Either } from '../'
import { IApplicable } from './interfaces/IApplicable'
import { IChainable } from './interfaces/IChainable'

class Left<T> extends Either<T> implements IChainable<T>, IApplicable<T> {
    constructor($value: T) {
        super($value)
    }
    public static of<T>(x: T = null) {
        return new Left<T>(x)
    }

    public get isLeft() {
        return true
    }
    chain<B = T>(fn: (x: T) => B): IChainable<any> {
        return this.map(fn).join()
    }
    join<T>() {
        return Left.of<T>(this.value)
    }
    ap(a: IApplicable<any>): IApplicable<any> {
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
