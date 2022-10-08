(() => {

    class Avenger {

        #name;
        power;

        constructor(nombre = 'No name', poder = 0) {
            this.#name = nombre;
            this.power = poder 

        }

        getInfo() {
            return this.#getName()
        }


        // metodo privado
        #getName() {
            return this.#name
        }

    }


    class FlyingAvenger extends Avenger {

        flying;

        constructor( name, power) {
            super(name, power)
            this.flying = true
        }


    }


    const hulk = new Avenger('Hulk', 9000);
    const falcon = new FlyingAvenger('Falcon', 100)

    console.log(hulk.power)
    console.log(falcon.getInfo())
    
    // console.log(hulk.#name);
    // en javascript ya estan los campos privados


})()