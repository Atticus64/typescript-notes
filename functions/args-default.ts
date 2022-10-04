(() => {

    // para poner un valor por defecto se usa el = 
    const fullName = ( firstName: string, lastName?: string, upper: boolean = false): string => {

        const name = `${ firstName } ${ lastName || '----'}`
        if ( upper ) {
            return name.toUpperCase()
        } else {
            return name
        }

    }

    const name = fullName('Peter', 'Parker', true )

    console.log({ name })



})()