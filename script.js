// 1.

function safeCall(f) {
  try {
    f();
    return true;
  } catch (error) {
    return false;
  }
}

safeCall(() => console.log('Hello!')); // true
safeCall(() => JSON.parse('abc')); // false
safeCall(() => false); // true
safeCall(() => abc); // false
