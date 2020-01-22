import { Container } from '../Container';

export interface IMappable<T> extends Container {
    map<B = T>(fn: (x: T) => B): IMappable<B>
}
