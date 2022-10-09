(() => {

    
    interface Client {
        name: string; 
        age?: number;
        address: Address,
        getFullAddress( id: string): string;
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client: Client = {
        name: 'Jona', 
        age: 34,
        address: {
            id: 164,
            zip: '4321',
            city: 'London'
        },
        getFullAddress(id: string): string {
            return this.address.city
        }
    }
    
    const client2: Client = {
        name: 'Melissa',
        age: 20,
        address: {
            city: 'Ottawa',
            id: 123,
            zip: '47563'
        },
        getFullAddress(id: string): string {
            return this.address.city
        }
    }




})()