const compose2 = (fn2, fn1) => origValue => fn2(fn1(origValue))

export {compose2}