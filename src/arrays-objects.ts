export {};
// --- Arrays ---
// Typed arrays ensure all elements share the same type.
// Useful for collections like IDs, names, etc.
const numbers: number[] = [1, 2, 3, 4];
const names: string[] = ["alice", "bob", "charlie"];

console.log("numbers:", numbers);
console.log("names:", names);

// --- Generic Helper for Arrays ---
// A reusable function that works with any element type.
// Returns the first element or undefined if the array is empty.
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log("first number:", firstElement(numbers)); // 1
console.log("first name:", firstElement(names));     // "alice"

// --- Objects (Inline Object Types) ---
// Describe object shape with property: type pairs.
const user: { id: number; name: string } = {
  id: 1,
  name: "Alice",
};

// --- Functions with Object Params ---
// Taking an inline-typed object ensures callers pass the right shape.
function printUserBasic(u: { id: number; name: string }): void {
  console.log(`${u.id}: ${u.name}`);
}

printUserBasic(user);

// --- Array of Objects ---
// Common real-world pattern: list of records.
const users: { id: number; name: string }[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Loop with type safety (autocompletion + checks on u.id/u.name).
function printAllUserNames(list: { id: number; name: string }[]): void {
  for (const u of list) {
    console.log("user:", u.name);
  }
}

printAllUserNames(users);
