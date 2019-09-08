
class Of<T>{
    $value
    constructor($value: T){
        this.$value = $value
    }
    of(x:T): Of<T> {
        return new Of<T>(x);
    }

}

export {Of}