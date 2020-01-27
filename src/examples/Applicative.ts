import { Functor } from './Functor'
import { APointable } from '../algebra/interfaces/APointable'
import { IApplicable } from '../algebra/interfaces/IApplicable'
import { IMappable } from '../algebra/interfaces/IMappable'

export class Applicative<T> extends APointable
    implements IApplicable, IMappable<T> {
    map<B = T>(fn: (x: T) => B): IMappable<B> {
        return new Functor(fn(this.$value))
    }
    ap(a: IMappable<any>): IMappable<any> {
        return a.map(this.value)
    }
}
