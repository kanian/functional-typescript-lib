import { IMappable } from './IMappable'

export interface IApplicable<T> extends IMappable<T> {
    ap(a: IApplicable<T>): IApplicable<T>
    map<B = T>(fn: (x: any) => B): IApplicable<B> 

}
