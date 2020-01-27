import { Just } from './Just'
import { Nothing } from './RealNothing'

class Maybe<T> extends Just<T> {
    public static of<T>(x: T): Nothing<T> | Just<T> {
        return x == null ? Nothing.of(null) : Just.of(x)
    }

    public get isNothing() {
        return this.$value == null
    }

    public get isJust() {
        return !this.isNothing
    }

    public map<B>(fn: (x: T) => B): any {
        return this.$value == null ? Nothing.of(null) : Just.of(fn(this.$value))
    }
}

export { Maybe }
