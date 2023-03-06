# Modular JavaScript

This repository provides two examples of modular JavaScript: CommonJS and ES Modules.

## CommonJS Modules

In the `CommonJS` example, two files have been created: `index.js` and `calc.js`.

The `calc.js` file contains a function named calc that performs a specific mathematical operation on two numbers.

To use this function in `index.js`, it has been exported using the following line:

```js
module.exports = calc
```

To import it in `index.js`, the following statement has been used:

```js
const calc = require('./calc');
```


## ES Modules

In the second example, several files have been created, including `index.html` and `index.css`, which are additional files used to display something in the browser.

The `modules/data.js` module contains a function named getData that fetches data from an API using the built-in `fetch` method and returns a `Promise`.

To use this function in `index.js`, it has been exported using the following statement:

```js
export default getData;
```

Then, it has been imported in `index.js` using the following statement:

```js
import getData from "./modules/data.js";
```