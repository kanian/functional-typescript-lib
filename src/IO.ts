import { compose } from './compose'

class IO {
    constructor(private executeUnsafeIO: Function) {}
    static of(x) {
        return new IO(() => x)
    }

    map(fn) {
        return IO.of(
            compose(
                fn,
                this.executeUnsafeIO
            )
        )
    }

    toString() {
        return `IO(${this.executeUnsafeIO})`
    }
}
