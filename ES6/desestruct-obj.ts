(() => {

    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number
    }


    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1400
    }

    const { poder, activo,vision } = avengers

    // console.log( poder.toFixed(2) , vision.toUpperCase() , activo )

    const printAvenger = ( { ironman, ...resto }: Avengers ) => {
        // console.log( ironman, resto )
    }

    // printAvenger( avengers )


})()