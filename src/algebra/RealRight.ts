import { Either } from './RealEither'
import { APointable } from './interfaces/APointable'
import { IMappable } from './interfaces/IMappable'
import { IChainable } from './interfaces/IChainable'
import { IApplicable } from './interfaces/IApplicable'
import { IJoinable } from './interfaces/IJoinable'

class Right<T> extends Either<T>
    implements IMappable<T>, IChainable<T>, IApplicable {
    constructor($value: T) {
        super($value)
    }
    chain<B = T>(fn: (x: T) => B): IChainable<B> {
        return this.map(fn).join()
    }
    join() {
        return Right.of<T>(this.value)
    }
    ap(a: IMappable<any>): IMappable<any> {
        return a.map(this.value)
    }
    public static of<T>(x: T): Right<T> {
        return new Right<T>(x)
    }
    public get isRight() {
        return true
    }

    public map<B>(fn: (x: T) => B): Right<B> {
        return Right.of<B>(fn(this.$value))
    }

    public toString() {
        return `Right(${this.$value})`
    }
}

export { Right }
