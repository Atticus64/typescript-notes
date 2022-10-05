(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string
    }


    let myCustomVariable: (string | number | Hero) = 'Jona';

    console.log(typeof myCustomVariable);

    myCustomVariable = 2;
    
    console.log(typeof myCustomVariable);
    
    
    myCustomVariable = {
        name: 'Bruce',
        age: 41,
        powers: [1,2,3]
    }
    
    console.log(myCustomVariable);
    



})()