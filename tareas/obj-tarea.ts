
// Objetos
type automovil = {
  carroceria: string,
  modelo: string
  antibalas: boolean,
  pasajeros: number,
  disparar?: () => void
}


const batimovil: automovil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4
};

const bumblebee: automovil = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar() { // El metodo disparar es opcional
    console.log("Disparando");
  }
};

type personajeComic = {
  nombre: string,
  edad: number|undefined,
  mutante: boolean
}
// Villanos debe de ser un arreglo de objetos personalizados
const villanos: personajeComic[] = [{
  nombre: "Lex Luthor",
  edad: 54,
  mutante: false
}, {
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
}, {
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type heroe = {
  nombre: string,
  edad: number,
  mutante: boolean
}

type villano = {
  nombre: string,
  edad: number,
  mutante: boolean
}

const charles: heroe = {
  nombre: 'Charles Xavier',
  edad: 40,
  mutante: true
}

const apocalipsis: villano = {
  nombre: 'Apocalipsis',
  edad: 2200,
  mutante: true
}

let mystique: heroe;

mystique = charles;
mystique = apocalipsis;

