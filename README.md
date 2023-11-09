Typescript Interview Questions:

1. Benefits of using TypeScript over JavaScript in a project: .\
   a. Typescript code is more readable amd manageable in a large project.
   b. Typescript assists in identifying type error when write code preventing run time errors.
   c. Typescript code write when best assists in code editor.

2. Optional chaining (?.) and nullish coalescing (??) operators:
 a. Optional chaining (?.): It's easily and safely access properties or methods an object .
 `const user :{
    name: string
 }={
    name: 'sifat'
 }
 const userName = user?.name`
 b.  Nullish coalescing (??): Nullish coalescing operator check his two sides and returns the right operator if the left operator is null or undefined.
 `const name: string = 'sifat'
 const userName = null
 const displayName = name ?? userName`

3. 