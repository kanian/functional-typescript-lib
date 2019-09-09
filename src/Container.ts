class Container {
    public static of(x) {
        return new Container(x)
    }
    constructor(private $value) {}

    public map(fn) {
        return Container.of(fn(this.$value))
    }
}

export { Container }
