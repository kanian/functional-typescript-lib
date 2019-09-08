class Container {
    constructor(private $value){
      
    }
    
    public static of(x){
      return new Container(x)
    }

    map(fn){ return Container.of(fn(this.$value)) }
     
  }

export {Container}