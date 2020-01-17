class Of<T> {
    constructor(protected $value: T) {
        //this.$value = $value
    }
    public static of<T>(x: T): Of<T> {
        return new Of<T>(x)
    }
    public get value(){
        return this.$value
    }
}

export { Of }
