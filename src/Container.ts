import { Of } from "./Of"

class Container<T> extends Of<T>{
    public static of<T>(x: T): Container<T> {
        return new Container<T>(x)
    }
    constructor($value: T) {
        super($value)
    }

    public map<B = T>(fn: (x: T) => B) {
        return Container.of(fn(this.$value))
    }
}

export { Container }
