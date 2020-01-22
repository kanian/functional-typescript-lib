import { APointable } from '../algebra/interfaces/APointable';
import { IMappable } from '../algebra/interfaces/IMappable';

class PointedFunctor<T> extends APointable implements IMappable<T> {
    public constructor($value: T) {
        super($value)
    }
    public static of<T = any>(x: T): PointedFunctor<T> {
        const a = new PointedFunctor<T>(x)
        return a
    }

    public map<B = T>(fn: (x: T) => B) {
        return PointedFunctor.of(fn(this.$value))
    }
}

export { PointedFunctor }



