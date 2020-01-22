import { APointable } from './interfaces/APointable';
import { IApplicable } from './interfaces/IApplicable';
import { IChainable } from './interfaces/IChainable';
import { IMappable } from './interfaces/IMappable';
import { Nothing } from './RealNothing';

/** Just is a Monad */
export class Just<T> extends APointable
    implements IMappable<T>, IChainable<T>, IApplicable {
    chain<B = T>(fn: (x: T) => B): IChainable<B> {
        return this.map(fn).join<B>()
    }

    ap(a: IMappable<any>): IMappable<any> {
        return a.map(this.value)
    }

    public constructor($value: T) {
        super($value)
    }

    public static of<T>(x: T): Just<T> {
        const a = new Just<T>(x)
        return a
    }

    public join<T>() {
        return this.$value == null ? Nothing.of<T>(null) : this.$value
    }

    public map<B = T>(fn: (x: T) => B) {
        return Just.of(fn(this.$value))
    }
}

const j = Just.of(3)
const k = Just.of(x => x)
const i = k.ap(j)
console.log(i)