// --- Union Types ---
// Accept either number or string as an ID.
// Useful when an API may return numeric DB ids or string UUIDs.
export {};
function getUser(id: number | string): void {
  console.log("Fetching user with id:", id);
}

getUser(101);
getUser("abc-123");

// --- Type Narrowing ---
// Check the runtime type before using type-specific methods.
// Prevents errors like calling .toUpperCase() on a number.
function formatId(id: number | string): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return id.toFixed(2);
}

console.log(formatId(42));       // "42.00"
console.log(formatId("user01")); // "USER01"

// --- Literal Types (Constrained Values) ---
// Only allow specific string values for status.
type Status = "success" | "error" | "loading";

function handleStatus(status: Status): void {
  if (status === "success") console.log("✅ Done");
  else if (status === "error") console.log("❌ Failed");
  else console.log("⏳ Loading...");
}

handleStatus("success");
handleStatus("loading");
// handleStatus("pending"); // ❌ Compile-time error (not in Status)

// --- Combine Union + Literal Types ---
// Constrain valid choices while still passing other typed params.
type PaymentMethod = "card" | "cash" | "paypal";

function pay(method: PaymentMethod, amount: number): void {
  console.log(`Paid $${amount} via ${method}`);
}

pay("card", 50);
pay("paypal", 20);
// pay("bitcoin", 100); // ❌ Compile-time error (not in PaymentMethod)

// --- Challenge: Role + Guard ---
// Constrain role to known values and implement simple permission logic.
type Role = "admin" | "editor" | "viewer";

function canEdit(role: Role): boolean {
  return role === "admin" || role === "editor";
}

console.log(canEdit("admin"));  // true
console.log(canEdit("editor")); // true
console.log(canEdit("viewer")); // false
// console.log(canEdit("guest")); // ❌ Compile-time error (not in Role)
