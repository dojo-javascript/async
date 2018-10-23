# Asynchonous code

## How to install

```bash
npm install
```

## How to run

```bash
npx ts-node path/to/file.ts

# Examples
npx ts-node callback/1-sync.ts
npx ts-node async-await/3-async-with-promise.ts
```

## Examples

### Handle asynchronous with callbacks

`Standard callback` declaration with `synchronous` execution.

```bash
npx ts-node callback/1-sync.ts
```

`Standard callback` declaration with `asynchronous` execution.

```bash
npx ts-node callback/2-async.ts
```

`Error first callback` declaration, node styled callbacks.

```bash
npx ts-node callback/3-error-first-callbacks.ts
```

### Handle asynchronous with promises

Using `Promise` API to handle `successes asynchronous` executions.

```bash
npx ts-node promise/1-async-resolve.ts
```

Using `Promise` API to handle `errors asynchronous` executions.

```bash
npx ts-node promise/2-async-reject.ts
```

Using `Promise` API to handle `exceptions asynchronous` executions.

```bash
npx ts-node promise/3-async-reject-exception.ts
```

### Using Async/Await ES6 to handle asynchronous

Using `Async/Await ES6` to handle `Promise resolvers`.

```bash
npx ts-node async-await/1-async-resolve.ts
```

Using `Async/Await ES6` to handle `Promise rejections`.

```bash
npx ts-node async-await/2-async-reject.ts
```

Using `Async/Await ES6` with `Promises`.

```bash
npx ts-node async-await/3-async-with-promise.ts
```