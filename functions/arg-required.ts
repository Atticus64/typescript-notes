(() => {

    // todos los argumentos son requeridos 
    const fullName = ( firstName: string, lastName: string ): string => {

        return `${ firstName } ${ lastName }`
    }

    const name = fullName('Peter', 'Parker')

    console.log({ name })



})()