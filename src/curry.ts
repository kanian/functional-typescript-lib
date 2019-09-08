var curry = (fn, arity = fn.length, nextCurried = null) => // This next curried here is some ugly way to have 
//next curried declared before use in function body. It is a syntactical blemish
  (nextCurried = prevArgs => (nextArg = null) => {
    var args = [...prevArgs, nextArg];
    if (args.length >= arity) {
      return fn(...args);
    } else {
      return nextCurried(args);
    }
  })([]);

export { curry };
