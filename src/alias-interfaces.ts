export {};
// --- Type Alias Example ---
// A type alias gives a reusable name to a shape (here: Book).
// We use it to make the code cleaner and avoid repeating the same structure.
type Book = {
  id: number;
  title: string;
  author: string;
  available: boolean;
};

function printBookInfo(book: Book) {
  console.log(`📚 ${book.title} by ${book.author} - ${book.available ? "Available" : "Out of stock"}`);
}

const b1: Book = { id: 1, title: "TS Handbook", author: "Microsoft", available: true };
printBookInfo(b1);

// --- Interface Example ---
// An interface describes the structure of an object.
// It’s commonly used for contracts (like API responses, classes).
interface Order {
  orderId: number;
  product: string;
  quantity: number;
}

function calculateOrderTotal(order: Order, pricePerUnit: number): number {
  return order.quantity * pricePerUnit;
}

const order1: Order = { orderId: 101, product: "Laptop", quantity: 2 };
console.log("💰 Total:", calculateOrderTotal(order1, 1200));

// --- Extending / Combining Example ---
// Both types and interfaces can build on top of existing ones.
// `type` uses intersection (&), `interface` uses extends.

type User = {
  id: number;
  username: string;
};

type Admin = User & { role: "admin" };

const adminUser: Admin = { id: 1, username: "root", role: "admin" };
console.log("🔑 Admin:", adminUser);

interface Employee extends User {
  department: string;
}

const employeeUser: Employee = { id: 2, username: "jdoe", department: "Engineering" };
console.log("👔 Employee:", employeeUser);
