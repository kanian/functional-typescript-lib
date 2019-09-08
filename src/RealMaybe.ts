import { Nothing } from '../src/RealNothing'
import { Just } from './Just'

class Maybe<T> extends Just<T> {
    $value: T | null
    constructor($value: T = null) {
        super($value)
    }

    isNothing() {
        return this.$value == null
    }

    static of<T>(x: T): Nothing<T> | Just<T> {
        return x ==null
            ? new Nothing<T>(null)
            : new Just<T>(x)
    }
    map<B>(fn: (x: T) => B): any {
        return this.$value == null
            ? new Nothing<B>(null)
            : new Just<B>(fn(this.$value)) 
    }
}

//export { Container }

export { Maybe }