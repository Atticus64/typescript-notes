(() => {


    const addNumbers = ( a: number, b: number) => a + b;

    const greet = ( name: string) => `Hola ${ name }`;

    const saveTheWorld = () => `El mundo esta salvado!`


    let myFunction: (y: string) => string;


    // myFunction = 10;
    // console.log(myFunction)
    
    // myFunction = addNumbers;

    // console.log( myFunction(1,2) );

    // myFunction = saveTheWorld;

    // console.log( myFunction() );

    myFunction = greet;

    console.log( myFunction('ObiWan Kenobi') );



})()