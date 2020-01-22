import { compose } from '../functions/compose';

class IO {
    public static of(x) {
        return new IO(() => x)
    }
    constructor(private executeUnsafeIO: Function) {}

    public map(fn) {
        return IO.of(
            compose(
                fn,
                this.executeUnsafeIO
            )
        )
    }

    public toString() {
        return `IO(${this.executeUnsafeIO})`
    }
}

export { IO }
