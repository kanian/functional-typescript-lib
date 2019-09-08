import { Container } from './RealContainer';

class Just<T> extends Container<T> {
    // aka: bind, flatMap
    flatMap(fn) {
        return fn(this.$value)
    }
    ap(anotherMonad) {
        return anotherMonad.map(this.$value)
    }
    map<B>(fn: (x: T) => B): Just<B>  {return new Just<B>(fn(this.$value))}
}
export { Just }
