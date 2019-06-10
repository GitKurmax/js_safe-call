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

// 2.

Function.prototype.safeCall = function(...args) {
  try {
    return this(...args);
  } catch (error) {
    return null;
  }
}
