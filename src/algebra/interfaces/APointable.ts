import { Container } from '../Container'

export class APointable extends Container {
    // public constructor(...$value: any[]) {
    //     super(...$value)
    // }

    public static of<T = any>(x: T) {
        const a = new this(x)
        return a
    }
}
