class Of<T> {
    public $value
    constructor($value: T) {
        this.$value = $value
    }
    public of(x: T): Of<T> {
        return new Of<T>(x)
    }
}

export { Of }
