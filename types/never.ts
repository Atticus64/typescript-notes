(() => {

    const error = (message: string):never => {

        throw new Error(message)
    }
    
    const errorConditional = ( msg: string):(never|number) => {
        if ( false ) {
            
            throw new Error(msg)
        }

        return 0
    }



    error('Auxilio se quemo el server 💻🔥')
    errorConditional('Kaboom 🔥')



})()