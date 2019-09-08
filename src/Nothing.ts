import {Container} from "../src/Container"


class Nothing{
    $value
    constructor($value = null){
      this.$value = null
    }
    
    public static of(x = null){
      return new Nothing()
    }

    map(fn){ return this }
}

export {Nothing}