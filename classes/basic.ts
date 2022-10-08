(() => {

    class Avenger {

        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge(): string {
            return this.name; // Avenger
        }

        constructor( 
            private name: string, 
            private team: string, 
            public realName?: string,
        ) {}

        public bio(): string {
            return `${ this.name} (${ this.team })!!`
        }


    }


    const hawkeye: Avenger = new Avenger('Hawkeye', 'Capitan America');

    // console.log( hawkeye );


    // console.log( hawkeye.bio());

    // console.log( Avenger.getAvgAge() );
})()