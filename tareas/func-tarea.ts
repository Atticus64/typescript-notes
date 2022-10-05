// Funciones Básicas
const sumar = (a: number, b: number): number => a + b

const contar = (heroes: string[]): number => heroes.length;

const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = (llamar: boolean) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
}

llamarBatman(true);

// Rest?
const unirheroes = ( ...personas: string[]) => {
    return personas.join(", ");
}


// Tipo funcion
const noHaceNada = (numero: number, texto: string, booleano: boolean, arreglo: string[]): void => { }

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (n: number, s: string, b: boolean, arr: string[]) => void;

noHaceNadaTampoco = noHaceNada;
