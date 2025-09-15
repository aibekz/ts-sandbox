// Basic variables with types
const username: string = "Alex";
const age: number = 25;
const isDev: boolean = true;

// Function with typed params and return
function greet(username: string, age: number): string {
  return `Hello, ${username}. You are ${age} years old.`;
}

console.log(greet(username, age));
