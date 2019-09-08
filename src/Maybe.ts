import { Container } from '../src/Container'
import { Nothing } from '../src/Nothing'
import { prop } from '../src/prop'
class Maybe {
    $value
    constructor($value = null) {
        this.$value = $value != null ? Container.of($value) : Nothing.of()
    }

    public static of(x) {
        return new Maybe(x)
    }

    isNothing() {
        return this.$value instanceof Nothing
    }

    map(fn) {
        return Maybe.of(this.unwrapValue(this.$value.map(fn)))
    }

    private unwrapValue(maybe: Container | Nothing) {
        return prop('$value')(maybe)
    }
}

//export { Container }

export { Maybe }
