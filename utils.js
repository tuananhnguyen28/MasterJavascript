const greeting = 'Hello World'
const sum = (a, b) => a + b
const mul = (a, b) => a * b
// Private
const divide = (a, b) => a / b

// export 1 bí danh (alias)
export { greeting, mul, sum as handleSum }