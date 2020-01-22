class Container<T = any> {
    public constructor(public readonly $value: T) {}

    public get value() {
        return this.$value
    }
}

export { Container }
