import { Container } from './Container'

class Nothing<T> extends Container<T> {
    public flatMap(fn) {
        return null
    }
    public ap(anotherMonad) {
        return this
    }
    public map<B = T>(fn: (x: T) => any): Nothing<B> {
        return new Nothing<B>(null)
    }
}

export { Nothing }
