import { Container } from './Container'

class Just<T> extends Container<T> {
    // aka: bind, flatMap
    public flatMap(fn) {
        return fn(this.$value)
    }
    public ap(anotherMonad) {
        return anotherMonad.map(this.$value)
    }
    public map<B>(fn: (x: T) => B): Just<B> {
        return new Just<B>(fn(this.$value))
    }
}
export { Just }
