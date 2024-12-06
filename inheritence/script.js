

// 1--> Simple Inheritence

class parent{
    constructor(name)
    {
        this.name = name;
    }
    get(){
        console.log(`name is : ${this.name}`)
    }
}

class child extends parent{
    set(){
        console.log(`name is : ${this.name}`)
    }
}


let simpleObj = new child("ABC");
console.log(simpleObj);





// 2--> Multilevel Inheritence


class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return  this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
  }

  class cars extends Model{
    constructor(brand, mod) {
        super(brand,mod);
    }

      show() {
      return this.mod;
    }
  }
  
let myCar = new cars("Ford", "Mustang");
console.log(myCar)