// Typed user object
const user: { id: number; name: string; email: string } = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

// Function with typed object parameter
function printUser(u: { id: number; name: string; email: string }) {
  console.log(`${u.id}, ${u.name}, <${u.email}>`);
}

printUser(user);