(() => {

    

    const heroe: { nombre: string, poder: string} = {
        nombre: 'Clark Kent',
        poder: 'Volar'
    }

    heroe.poder = 'Ser amigo de Batman'


    // console.log(heroe)

    function getName(): void {
        console.log('viejo getName')
    }

    // const getName = () => {
    //     console.log('Nuevo getName')
    // }


    // getName()
})()