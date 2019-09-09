import { Container } from './RealContainer';

class Nothing<T> extends Container<T> {
    public flatMap(fn) {
        return null
    }
    public ap(anotherMonad) {
        return this
    }
    public map(fn: (x: T) => T): Nothing<T> { return new Nothing<T>(null)}
   
}

export { Nothing }
