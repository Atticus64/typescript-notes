(() => {

    class Avenger {

        constructor(
            public name: string,
            public realName: string
        ) {
            // console.log('Contructor Avenger llamado');
        }

        private getFullname(): string {
            return `${ this.name } ${ this.realName }`
        }

    }


    class Xmen extends Avenger {

        constructor( 
            name: string,
            realname: string,
            public isMutant: boolean
        ) {
            super(name, realname) // se debe de llamar lo mas pronto posible
            // console.log(`Constructor Xmen llamado`);

        }

        // getter
        get fullName() {
            return `${ this.name } - ${ this.realName }`
        }

        set fullName(name: string) {
            if ( name.length <= 3 ) {
                throw new Error('El nombre debe ser mayour de 3 letras')
            }
            this.name = name;
        }

        getFullnameDesdeXmen() {
            // console.log( super.getFullname() );
        }
    }


    const wolverine = new Xmen('Wolverine', 'Logan', true)

    wolverine.fullName = 'Gera'

    // console.log( wolverine.fullName )

})()