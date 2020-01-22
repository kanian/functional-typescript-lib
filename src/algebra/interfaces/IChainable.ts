import { IJoinable } from './IJoinable';
import { IMappable } from './IMappable';

export interface IChainable<T> extends IJoinable, IMappable<T> {

    chain<B = T>(fn: (x: T) => B) : IChainable<B>
}


