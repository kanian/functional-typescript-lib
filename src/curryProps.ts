var curryProps = (fn, arity = 1, nextCurried = null) => // This next curried here is some ugly way to have 
//next curried declared before use in function body. It is a syntactical blemish
  (nextCurried = prevArgsObj => (nextArgObj = {}) => {
      var [key] = Object.keys(nextArgObj)
    var allArgsObj = Object.assign({},prevArgsObj,{[key]:nextArgObj[key]});
    if (Object.keys(allArgsObj).length >= arity) {
      return fn(allArgsObj);
    } else {
      return nextCurried(allArgsObj);
    }
  })({});

export { curryProps };
