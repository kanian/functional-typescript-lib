import { IMappable } from './IMappable'

export interface IApplicable {
    ap(a: IMappable<any>): IMappable<any>
}
