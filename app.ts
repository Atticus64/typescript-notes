(() => {

    const a: number = 10; 

    console.log(a);
    
    const msg: string = 'Hola Mundo';
    
    const pilot = {
        name: 'Captain Falcon',
        age: 33
    }
    
    pilot.age = 90
    
    console.log(pilot.age + 1)
    
    console.log(msg)
    
    // No uses el type any 
    
    let anything: any;
    anything = {}
    anything = []
    anything = 3

    sayHello('Tux')

})()

function sayHello( msg: string ) {
    console.log(msg)
}
