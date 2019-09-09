import { Container } from '../src/Container'

class Nothing {
    public static of(x = null) {
        return new Nothing()
    }
    public $value

    constructor($value = null) {
        this.$value = null
    }

    public map(fn) {
        return this
    }
}

export { Nothing }
