var mildCurry = (fn, arity = fn.length, nextCurried = null) => 
  (nextCurried = (prevArgs) => (...nextArg ) => {
    var args = [...prevArgs, ...nextArg];
    if (args.length >= arity) {
      return fn(...args);
    } else {
      return nextCurried(args);
    }
  })([]);

export { mildCurry };
