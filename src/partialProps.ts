function partialProps(fn,presetArgsObj = {}) {
    return function partiallyApplied(laterArgsObj = {}){
    return fn( Object.assign( {}, presetArgsObj, laterArgsObj ) );
    };
}

export {partialProps}
    