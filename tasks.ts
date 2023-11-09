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


//Problem 5:

interface Car {
    make: string;
    model : string;
    year: number

}

interface Driver {
    name : string;
    licenseNumber: string
}


function addObject(car: Car, driver : Driver)  {
    return {
        ...car,
        ...driver
    }
}


//Problem 6:

function sumOfNumbers(params:unknown) {
    if (Array.isArray(params)) {
        const numberOfArray = params.every((e) => typeof e === 'number')
        
        if (numberOfArray) {
            let sum = 0
            for (let i = 0; i < params.length; i++) {
                const element = params[i];
                sum += element
            }
            console.log('Sum:',sum)
        } else {
            console.log('Parameter is not an array of number')
        }
    } else {
        console.log('This is not an array ')
    }
}


//Problem 7:

function findFirstOccurrence<T>(array: Array<T>, value: T) :number {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element === value){
            return i
        }   
    }
    return -1
}

//Problem 8:

interface Product {
    name: string;
    price: number;
    quantity: number
}

function sumTotalPrice(params:Product[]) {
    let totalPrice = 0 
    for (let i = 0; i < params.length; i++) {
        const product = params[i];
        totalPrice += product.price * product.quantity
    }
    return totalPrice
}