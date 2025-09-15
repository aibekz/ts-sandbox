// API can return numeric or string ID
function getUser(id: number | string): void {
  console.log("Fetching user with id:", id);
}

getUser(101);
getUser("abc-123");


// Type Narrowing

// Use checks to “narrow” the union:

function formatId(id: number | string): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return id.toFixed(2);
}

console.log(formatId(42));       // "42.00"
console.log(formatId("user01")); // "USER01"


// Type Literals

// Function that only accepts certain status values
type Status = "success" | "error" | "loading";

function handleStatus(status: Status): void {
  if (status === "success") console.log("✅ Done");
  else if (status === "error") console.log("❌ Failed");
  else console.log("⏳ Loading...");
}

handleStatus("success");
handleStatus("loading");
// handleStatus("pending"); // ❌ Error: not allowed


// COMBINE Union + Literal Types

// Payment method can only be certain strings
type PaymentMethod = "card" | "cash" | "paypal";

// Payment amount must be a number
function pay(method: PaymentMethod, amount: number): void {
  console.log(`Paid $${amount} via ${method}`);
}

pay("card", 50);
pay("paypal", 20);
// pay("mastercard", 100); // ❌ Error: not allowed


type Role = "admin" | "editor" | "viewer"

function canEdit(role: Role): boolean {
   return role === "admin" || role === "editor";
}

console.log(canEdit("admin"));  // true
console.log(canEdit("editor")); // true
console.log(canEdit("viewer")); // false