(() => {

    // 1 parametro es opcional con el ? 
    const fullName = ( firstName: string, lastName?: string ): string => {
        return `${ firstName } ${ lastName || '----'}`
    }

    const name = fullName('Peter')

    console.log({ name })



})()