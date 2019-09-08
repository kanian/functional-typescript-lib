import { composeUsingReverse } from "../src/composeUsingReverse";
import { Maybe } from "../src/RealMaybe";
import { identity } from "../src/identity";
import { curry } from "../src/curry";
import { Just } from "../src/Just";
import { Nothing } from "../src/RealNothing";

describe("Maybe<T> is a functor because: ", function() {
  it(" Maybe.map respects the functor identity law for Container", function() {
    let maybeOf1 = new Maybe<number>(1);
    expect(maybeOf1.map(identity).flatMap(identity)).toBe(
      maybeOf1.flatMap(identity)
    );
  });
  it(" Maybe<T>.map respects the functor identity law for Nothing", function() {
    let maybeOfNull = new Maybe<number>(null);
    expect(maybeOfNull.map(identity).flatMap(identity)).toBe(
      maybeOfNull.flatMap(identity)
    );
  });
  it(" Maybe<T>.map respects the functor composition law for Container", function() {
    let add1 = x => x + 1;
    let mult2 = x => x * 2;
    let add1ThenMult2 = composeUsingReverse(mult2, add1);

    let maybeOf1 = new Maybe<number>(1);
    expect(maybeOf1.map(add1ThenMult2).flatMap(identity)).toEqual(
      maybeOf1
        .map(add1)
        .map(mult2)
        .flatMap(identity)
    );
    expect(maybeOf1.map(add1ThenMult2).flatMap(identity)).toBe(4);
  });
  it(" Maybe<T>.map respects the functor composition law for Nothing", function() {
    let add1 = x => x + 1;
    let mult2 = x => x * 2;
    let add1ThenMult2 = composeUsingReverse(mult2, add1);
    let maybeOfNull = new Maybe<number>(null);
    console.log(maybeOfNull.map(add1).map(mult2));
    expect(maybeOfNull.map(add1ThenMult2).flatMap(identity)).toEqual(
      maybeOfNull
        .map(add1)
        .map(mult2)
        .flatMap(identity)
    );

    expect(maybeOfNull.map(add1ThenMult2).flatMap(identity)).toBe(null);
  });
  it(" Maybe.map can safely decide if Nothing should be returned or Just", function() {
    let someObj = {
      something: {
        somethingElse: {}
      }
    };
    var safeProp = curry(function safeProp(prop, obj) {
      return Maybe.of(obj[prop]);
    });
    var res = Maybe.of(someObj)
      .flatMap(safeProp("something"))
      .flatMap(safeProp("somethingElse"));
    expect(res instanceof Just).toBe(true);
    console.log(res.flatMap(safeProp("more")));
    expect(res.flatMap(safeProp("more")) instanceof Nothing).toBe(true);

    //var safeHead = xs => map(r => (r.length > 0 ? r[0] : null))(xs);
    
    var prop = curry((name, obj) => Maybe.of(obj[name]));

    var Person = class {
      name: any;
      addresses: any[];
      constructor(name, addresses) {
        this.name = name;
        this.addresses = [...addresses];
      }
    };
    var safe = curry(function safe(fn,x){
      return Maybe.of(fn(x))
    })
    var safeHead = safe(xs => xs.length > 0 ? xs[0]: null)
    /*function safeHead(xs){
      return Maybe.of(xs.length > 0 ? xs[0] : null)
    }*/
    var safeAddresses = safe(person => prop("addresses")(person))
    /*function safeAddresses(person){
      return Maybe.of(prop("addresses")(person))
    }*/
    //const flatMap = curry((fn, anyFlatMappable) => anyFlatMappable.flatMap(fn))
    var jake = safe(identity)(new Person("jake", []))
    var res2 = jake.flatMap(safeAddresses).flatMap(safeHead)
    console.log(res2)
  });
});
