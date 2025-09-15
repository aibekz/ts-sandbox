export {};
// Shopping cart item IDs
const cartIds: number[] = [101, 102, 103];

// List of usernames
const participants: string[] = ["alice", "bob", "charlie"];

// Function that returns first element
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(first(participants)); // "alice"
console.log(first(cartIds)); // 101