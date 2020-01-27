import { Functor } from './Functor'
import { APointable } from '../algebra/interfaces/APointable'
import { IApplicable } from '../algebra/interfaces/IApplicable'
import { IMappable } from '../algebra/interfaces/IMappable'

export class Applicative<T> extends APointable
    implements IApplicable<T> {
    map<B = T>(fn: (x: T) => B): Applicative<B> {
        return new Applicative(fn(this.$value))
    }
    ap(a:IApplicable<T>): IApplicable<T>{
        return a.map(this.value)
    }
    public static of<T>(x: T): Applicative<T> {
        const a = new Applicative<T>(x)
        return a
    }
}
