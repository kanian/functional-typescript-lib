import { IApplicable } from '../algebra/interfaces/IApplicable'
import { IChainable } from '../algebra/interfaces/IChainable'
import { IMappable } from '../algebra/interfaces/IMappable'
import { PointedFunctor } from './PointedFunctor'

class Monad<T> extends PointedFunctor<T> implements IChainable<T>, IApplicable {
    chain<B = T>(fn: (x: T) => B): IChainable<B> {
        return this.map(fn).join<B>()
    }

    ap(a: IMappable<any>): IMappable<any> {
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
