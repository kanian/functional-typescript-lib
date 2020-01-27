import { APointable } from './interfaces/APointable'
import { IApplicable } from './interfaces/IApplicable'
import { IChainable } from './interfaces/IChainable'
import { IJoinable } from './interfaces/IJoinable'
import { IMappable } from './interfaces/IMappable'

class Nothing<T> extends APointable
    implements IChainable<T>, IMappable<T>, IApplicable {
    chain<B = any>(fn: (x: any) => B): IChainable<B> {
        return Nothing.of(null)
    }
    join(): IJoinable {
        return this
    }
    public constructor() {
        super(null)
    }
    public static of<T>(x: T): Nothing<T> {
        return new Nothing<T>()
    }

    public ap(any) {
        return this
    }
    public map<B = T>(fn: (x: T) => any): Nothing<B> {
        return Nothing.of(null)
    }
}

export { Nothing }
