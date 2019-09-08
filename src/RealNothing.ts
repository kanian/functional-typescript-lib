import { Container } from './RealContainer';

class Nothing<T> extends Container<T> {
    flatMap(fn) {
        return null
    }
    ap(anotherMonad) {
        return this
    }
    map(fn: (x: T) => T): Nothing<T> { return new Nothing<T>(null)}
   
}

export { Nothing }
