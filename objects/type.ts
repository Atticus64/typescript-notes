(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string
    }
    
    let flash: Hero = {
        name: 'Barry Alen',
        age: 22,
        powers: [1,2]
    }
    

    let superman: Hero = {
        name: 'Clark Kent',
        age: 35,
        powers: [1],
        getName() {
            return this.name;
        }
    }




})()