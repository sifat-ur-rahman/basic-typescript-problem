Typescript Interview Questions:

1. Benefits of using TypeScript over JavaScript in a project: .\
   a. Typescript code is more readable amd manageable in a large project. .\
   b. Typescript assists in identifying type error when write code preventing run time errors. .\
   c. Typescript code write when best assists in code editor.

2. Optional chaining (?.) and nullish coalescing (??) operators: .\
 a. Optional chaining (?.): It's easily and safely access properties or methods an object. 
 ```ruby
 const user :{
    name: string
 }={
    name: 'sifat'
 } 
 const userName = user?.name
 ``` 
 b.  Nullish coalescing (??): Nullish coalescing operator check his two sides and returns the right operator if the left operator is null or undefined. 
 ```ruby
 const name: string = 'sifat' 
 const userName = null 
 const displayName = name ?? userName
 ``` 

3. Handling asynchronous operations in TypeScript: .\
 async-await is easily handle asynchronous operations in Javascript and Typescript. It's has sample errors handler try-catch block. It's more readable and less error compared to nested callbacks and promise.

4. TypeScript enums: .\
 Enums are special types that allow you to define a set of named constant.It's make more readable code and provide type safety.

5. Type guards in TypeScript: .\
 Type guards is some expression the performs a runtime check that guarantees the type in some scope. 
 ```ruby
 function userAge<T>(age: T):T {return age}
 ``` 
6. Readonly properties in TypeScript: .\
 Readonly properties are properties that cannot be changed after initialization. 
  ```ruby
  const user :{
    readonly name : string;
    readonly email : string;
    age : number
  }={
    name: 'sifat',
    email: 'sifat@gmail.com',
    age: 22
  }
  ```

7. Union types in TypeScript:.\
 Union types is a type formed from two or more other types, representing values that may be any one of those type. 
 ```ruby
 function getUserId(id: number|string){
    return `User id: ${id}`
 }
 ```
 