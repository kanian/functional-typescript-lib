import { Left } from './RealLeft'
import { Right } from './RealRight'
import { Container } from './Container'

class Either<T> extends Container<T> {
    public static of<T>(x: T): Right<T> {
        return new Right<T>(x)
    }

    public static isRight<T>(either: Right<T> | Left<T>) {
        return either instanceof Right
    }

    constructor($value: T) {
        super($value)
    }

    public toString() {
        return `Either(${this.$value})`
    }
}

export { Either }
