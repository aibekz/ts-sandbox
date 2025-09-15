// --- typeof Narrowing ---
// Narrow unions with runtime typeof checks to safely use type-specific APIs.
function formatValue(v: string | number): string {
  if (typeof v === "string") {
    return v.trim().toUpperCase(); // string-only
  }
  return v.toFixed(2);             // number-only
}

console.log("formatValue:", formatValue(" hello "));
console.log("formatValue:", formatValue(42));

// --- instanceof Narrowing ---
// Useful for classes or built-ins like Date, Error, RegExp.
function getTimeSafe(x: Date | string): number {
  if (x instanceof Date) {
    return x.getTime(); // Date-only
  }
  return new Date(x).getTime(); // string parsed as date
}

console.log("getTimeSafe:", getTimeSafe(new Date()));
console.log("getTimeSafe:", getTimeSafe("2020-01-01"));

// --- 'in' Operator Narrowing ---
// Narrow by checking if a property exists.
type ApiSuccess = { ok: true; data: { id: number; name: string } };
type ApiError   = { ok: false; error: string };
type ApiResult  = ApiSuccess | ApiError;

function handleApiResult(res: ApiResult): void {
  if ("data" in res) {
    console.log("✅ Data:", res.data.name);
  } else {
    console.error("❌ Error:", res.error);
  }
}

handleApiResult({ ok: true, data: { id: 1, name: "Item" } });
handleApiResult({ ok: false, error: "Not found" });

// --- Discriminated Union ---
// A common pattern: add a 'kind' field to enable precise narrowing.
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
    default: {
      // Exhaustiveness check: if we add a new kind and forget to handle it,
      // TypeScript will error here because 'never' won't match the new case.
      const _exhaustive: never = shape;
      return _exhaustive;
    }
  }
}

console.log("area circle:", area({ kind: "circle", radius: 2 }));
console.log("area square:", area({ kind: "square", size: 3 }));
console.log("area rectangle:", area({ kind: "rectangle", width: 4, height: 5 }));

// --- Custom Type Guard (User-Defined Predicate) ---
// Create reusable functions that *tell* TypeScript how to narrow.
type User = { id: number; username: string };
type Guest = { token: string };

function isUser(x: User | Guest): x is User {
  return (x as User).id !== undefined; // runtime check
}

function loginName(entity: User | Guest): string {
  if (isUser(entity)) {
    // Inside this block, entity is User
    return entity.username;
  }
  // Here, entity is Guest
  return `guest:${entity.token.slice(0, 4)}`;
}

console.log("loginName user:", loginName({ id: 1, username: "alpha" }));
console.log("loginName guest:", loginName({ token: "abcd1234" }));

// --- Guarding Unknown / Any ---
// Safely narrow 'unknown' before use; never trust shape blindly.
function parseMaybeUser(json: string): User | undefined {
  const parsed: unknown = JSON.parse(json);
  if (
    typeof parsed === "object" &&
    parsed !== null &&
    "id" in parsed &&
    "username" in parsed &&
    typeof (parsed as any).id === "number" &&
    typeof (parsed as any).username === "string"
  ) {
    return parsed as User;
  }
  return undefined;
}

console.log("parseMaybeUser valid:", parseMaybeUser('{"id":2,"username":"beta"}'));
console.log("parseMaybeUser invalid:", parseMaybeUser('{"name":"oops"}'));

// --- Narrowing Functions with Predicates in Arrays ---
// Use guards with array methods for clean filtering.
type Item = { id: number } | { code: string };

function hasId(x: Item): x is { id: number } {
  return "id" in x;
}

const items: Item[] = [{ id: 1 }, { code: "A" }, { id: 2 }];
const withIds = items.filter(hasId); // inferred as { id: number }[]
console.log("withIds:", withIds);
