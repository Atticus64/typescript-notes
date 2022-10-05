(() => {

    const fullName = ( firstName: string, ...restNames: string[]  ):        
        string =>  `${ firstName } ${ restNames.join(' ') }`




    const superman = fullName( 'Clark', 'Joseph', 'Rodriguez')

    console.log({ superman })





})()



