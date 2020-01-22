import { Container } from '../algebra/Container';

class Pointed<T = any> extends Container {
    public constructor($value: T) {
        super($value)
    }

    public static of<T>(x: T): Pointed<T> {
        const a = new this(x)
        return a
    }
}

export { Pointed }
