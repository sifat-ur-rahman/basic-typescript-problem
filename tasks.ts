//Problem 1:

function getSquareLength(params:string|number) {
    if (typeof params === "number") {
        return params*params
    } else  {
        return params.length
    }
}


//Problem 2:

interface Person {
    name: string;
    email: string;
    address?:{
        city: string;
        street: string;
    };
    phone?:number
}

function getAddressCity(person:Person) {
    return person.address? person?.address?.city : 'There is no address'
}



//Problem 4:

function sumNumberOfArray(params : any[]): number {
    let total = 0
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        if(typeof element === 'number'){
            total += element
        }
    }
    return total
}