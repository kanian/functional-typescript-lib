import { IApplicable } from '../algebra/interfaces/IApplicable'
import { IChainable } from '../algebra/interfaces/IChainable'
import { PointedFunctor } from './PointedFunctor'

class Monad<T> extends PointedFunctor<T>
    implements IChainable<T>, IApplicable<T> {
    chain<B = T>(fn: (x: T) => B): IChainable<any> {
        return this.map(fn).join<B>()
    }

    ap(a: IApplicable<any>): IApplicable<any> {
        return a.map(this.value)
    }

    public constructor($value: T) {
        super($value)
    }

    public static of<T>(x: T): Monad<T> {
        const a = new Monad<T>(x)
        return a
    }

    public join<T>() {
        return this.$value == null ? Monad.of<T>(null) : this.$value
    }

    public map<B = T>(fn: (x: T) => B) {
        return Monad.of(fn(this.$value))
    }
}

export { Monad }
