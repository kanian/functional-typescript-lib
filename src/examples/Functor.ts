import { Container } from '../algebra/Container';
import { IMappable } from '../algebra/interfaces/IMappable';

class Functor<T> extends Container<T> implements IMappable<T>{
    public constructor($value: T) {
        super($value)
    }
   
    public map<B = T>(fn: (x: T) => B) {
        return new Functor(fn(this.$value))
    }
}

export { Functor }
