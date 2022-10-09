
(() => {

    // Crear interfaces
    // Cree una interfaz para validar el auto (el valor enviado por parametro)
    
    interface Auto {
        encender: boolean;
        velocidadMaxima: number;
        acelerar(): void;
    }
    
    const conducirBatimovil = (auto: Auto): void => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    }
    
    const batimovil: Auto = {
        encender: false,
        velocidadMaxima: 0,
        acelerar() {
            console.log("...... gogogo!!!");
        }
    }
    
    // Cree una interfaz con que permita utilizar el siguiente objeto
    interface Villian {
        reir?: boolean;
        comer?: boolean;
        llorar?: boolean;
    }
    // utilizando propiedades opcionales
    
    const guason: Villian = {
        reir: true,
        comer: true,
        llorar: false
    }
    
    const reir = (guason: Villian): void => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    }
    
    
    // Cree una interfaz para la siguiente funcion
    
    interface funcionCantidadPersonas {
        (personas: string[]): number;
    }
    
    const ciudadGotica: funcionCantidadPersonas = (ciudadanos: string[]): number => {
        return ciudadanos.length;
    }
    
    // Cree una interfaz que obligue crear una clase
    // con las siguientes propiedades y metodos
    
    interface Person {
        nombre: string;
        edad: number;
        sexo: string,
        estadoCivil: string,
        imprimirBio(): void
    }
    
    /*
      propiedades:
        - nombre
        - edad
        - sexo
        - estadoCivil
        - imprimirBio(): void // en consola una breve descripcion.
    */
    class Persona implements Person {
    
        constructor(
            public nombre: string,
            public edad: number,
            public sexo: string,
            public estadoCivil: string,
        ) {}
    
    
        imprimirBio(): void {
    
            console.log(`Nombre: ${ this.nombre }`)
            console.log(`Edad: ${ this.edad }`)
            console.log(`Sexo: ${ this.sexo }`)
            console.log(`Estado Civil: ${ this.estadoCivil }`)
    
        }
    
    
    
    
    }
    
    
    const miguel: Persona = new Persona('Miguel Duran', 35, 'Masculino', 'Casado');
    
    
    miguel.imprimirBio()
    
    
    

})()